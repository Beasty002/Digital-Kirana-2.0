const Costumer  = require('../../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const emailSender = require('../email/emailSender');
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

    const hashedPassword = await bcrypt.hash(password,12);
    const costumer = new Costumer({
        userName:username,
        email:email,
        password:hashedPassword,
        phoneNumber:phoneNumber,
    });
    await costumer.save();//save in db if email ver-incomplete then erase it
    //email verification:
    //generating random 6 digit number
    const otp=getRandomNumber();
    //sending random number to user
    const emailSubject='User Verification .................'
    const emailBody='Your otp is '+ otp +' .................'
    const emailStatus=await emailSender.sendMail(email,emailSubject,emailBody)
    if(emailStatus==='success'){
        return res.status(200).json({
            otp:otp,//?can user track the response--if yes save to db..
            message: "User registered Successfully"
        })
    }
    return res.status(422).json({
        message: "Error Occurred try after sometime"
    })
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
//req after otp verification
exports.verifyOtp=async(req,res)=>{
    const {email,verifiedStatus} = req.body;
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

