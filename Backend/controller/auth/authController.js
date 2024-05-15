const Costumer  = require('../../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
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
    await costumer.save();
    res.status(200).json({
        message: "User registered Successfully"
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
        // res.cookie('userToken',userToken,{
        //     secure:true
        // })
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