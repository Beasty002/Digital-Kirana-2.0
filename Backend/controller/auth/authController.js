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
//otp verification
exports.verifyOtp=async(req,res)=>{
    const {email,otp} = req.body;
    try{
        if(verifiedStatus===false){
            //set Status unverified or delete user from DB-using emailId
        }else{
            //set Status unverified if necessary:-using emailId
            //send welcome email-optional
        }
        // return succcess res
    }catch(e){
        //err res 
    }
}
// exports.getVerify = async(req,res) => {

// }
exports.postVerify = async(req,res)=>{

};

exports.postReset = async(req,res) => {

}