const Costumer  = require('../../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const sendMail = require('../email/emailSender');
const {validationResult} = require("express-validator");


exports.registerCostumer = async(req,res) => {
    const {username,email,password,phoneNumber} = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errorMessage: errors.array()[0].msg,
            oldInput: {
                username,
                email,
                password,
                phoneNumber,
            },
        })
    }

    try{
        const hashedPassword = await bcrypt.hash(password,12);

        //verification code and its expiration for db insertion:
        const verificationCode = Math.floor(100000 + Math.random() * 900000);//6 digit otp
        const verificationCodeExpiration = new Date(Date.now() + 10 * 60 * 1000);//10 minutes
    
            const costumer = new Costumer({
                userName:username,
                email:email,
                password:hashedPassword,
                phoneNumber:phoneNumber,
                verificationCode: verificationCode,
                verificationCodeExpiration: verificationCodeExpiration,
            });
            await costumer.save();
        
        //sending otp to user
        const emailSubject='Digital Kirana : User Verification'
        const emailBody = `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f5f5;
                    color: #333;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background-color: #4CAF50;
                    color: #fff;
                    padding: 10px;
                    text-align: center;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
                .content {
                    padding: 20px;
                }
                .otp {
                    font-size: 24px;
                    font-weight: bold;
                    color: #4CAF50;
                }
                .footer {
                    margin-top: 20px;
                    text-align: center;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>User Verification</h2>
                </div>
                <div class="content">
                    <p>Your OTP is <span class="otp">${verificationCode}</span>. Use this code to verify your account.</p>
                </div>
                <div class="footer">
                    <p>Do not reply to this email. Visit our website <a href="http://localhost:3000">Digital Kirana</a> for more information.</p>
                </div>
            </div>
        </body>
        </html>
    `;
        const emailStatus=await sendMail(email,emailSubject,emailBody)
        if(emailStatus==='success'){
            return res.status(200).json({
                message: "User registered Successfully"
            })
        }
            res.status(422).json({
            message: "Error Occurred "
        })
    }catch(e){
        const errMsg="Error Occurred "+e
        res.status(422).json({
        message: errMsg
        })
    }
}

exports.loginCostumer = async (req,res) => {
    const {email,password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errorMessage: errors.array()[0].msg,
            oldInput: {
                email,
                password
            },
        })
    }
    const user = await Costumer.findOne({email});

    const userPassword = user.password;
    const isMatched = await bcrypt.compare(password,userPassword)
    if(isMatched){
        const userToken = jwt.sign({id : user._id},process.env.USER_SECRET_KEY,{
            expiresIn : '30d'
        })
        res.cookie('userToken',userToken,{
            secure:true
        })
        res.status(200).json({
            message:'Logged in successfully',
            userToken:userToken,
        })
    }else{
        res.status(403).json({
            message:'Invalid Password',
            oldInput: {
                email,
                password
            },
        })
    }
}

//sending reset link
exports.passwordReset = async(req,res) => {
    const { email } = req.body;
    try{
        const user = await Costumer.findOne({ email });
  
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if(user.reset.tokenExpiration > Date.now()){
            return res.status(429).json({ message: 'Reset link already sent to email' });
        }
        const resetToken = jwt.sign({ userId: user._id }, process.env.USER_SECRET_KEY, { expiresIn: '1h' });
    
        const resetLink = `http://localhost:5173/reset?token=${resetToken}`;

        const tokenExpiration = new Date(Date.now() + 60 * 60 * 1000); 

        // Updating db
        user.reset.token = resetToken;
        user.reset.tokenExpiration = tokenExpiration;
        await user.save();
    
        const emailSubject = 'Digital Kirana : Password Reset Request';
        const emailBody = `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f5f5;
                    color: #333;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background-color: #4CAF50;
                    color: #fff;
                    padding: 10px;
                    text-align: center;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
                .content {
                    padding: 20px;
                }
                .link {
                    display: block;
                    margin-top: 20px;
                    text-align: center;
                }
                .footer {
                    margin-top: 20px;
                    text-align: center;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>Password Reset Request</h2>
                </div>
                <div class="content">
                    <p>Click the link below to reset your password:</p>
                    <div class="link">
                        <a href="${resetLink}" target="_blank">${resetLink}</a>
                    </div>
                </div>
                <div class="footer">
                    <p>Do not reply to this email. Visit our website <a href="http://localhost:3000">Digital Kirana</a> for more information.</p>
                </div>
            </div>
        </body>
        </html>
        `;
    
        await sendMail(email, emailSubject, emailBody);
        res.status(200).json({ message: 'Password reset link sent to your email' });
    }catch(e){

        return res.status(500).json({ message: 'Error Occurred' });
    }
  };

//sending reset link
exports.passwordChange = async(req,res) => {
    const {token,password} = req.body;
    try{
        const decoded = jwt.verify(token,process.env.USER_SECRET_KEY);
        const customerId = decoded.userId;
        console.log(customerId)
        const user = await Costumer.findById(customerId);
        //check token expired or not:
        if(!user){
            return res.status(404).json({ message: 'Error occurred' });
        }
        if(user.reset.tokenExpiration < Date.now()){
            return res.status(410).json({ message: 'Token expired' });
        }
        if(user.reset.token!==token){
            return res.status(400).json({ message: 'Invalid token' });
        }
        if(await bcrypt.compare(password,user.password)){
            return res.status(422).json({ message: 'Password must be different from previous one' });
        }
        const hashedPassword = await bcrypt.hash(password,12);
        if(user){
            user.password=hashedPassword
            user.reset.token=null
            user.reset.tokenExpiration=null
            await user.save()
            return res.status(200).json({ message: 'Password changed Successfully' });
        }
        return res.status(500).json({ message: 'Error Occurred' });
    }catch(e){
         res.status(500).json({ message: e });
    }
  };




  //otp verification
  exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const user = await Costumer.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.verificationCode === parseInt(otp) && user.verificationCodeExpiration > Date.now()) {
            user.verified = true;
            user.verificationCode = null;
            user.verificationCodeExpiration = null;
            await user.save();

            return res.status(200).json({ message: 'User verified successfully' });
        }
        res.status(400).json({ message: 'Invalid or expired OTP' });
    } catch (error) {
        res.status(500).json({ message: 'Error occurred: ' + error.message });
    }
};
// exports.getVerify = async(req,res) => {

// }
exports.postVerify = async(req,res)=>{

};