const Costumer  = require('../../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {validationResult} = require("express-validator");


exports.registerCostumer = async(req,res,next) => {
    const {username,email,password,phoneNumber} = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errorMessage: errors.array()[0].msg,
            oldInput: {
                username:username,
                email:email,
                password:password,
                phoneNumber:phoneNumber,
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
    const {email,password} = req.body
    if(!email || !password){
        return res.status(400).json({
            message: "Please enter data"
        })
    }
    const user = await users.findAll({
        where : {
            email
        }
    })
    if(user == 0){
        return res.status(404).json({message:'User doesnot exist'})
    }else{
        const userPassword = user[0].password
        const isMatched = bcrypt.compareSync(password,userPassword)
        if(isMatched){
            const token = jwt.sign({id : user[0].id},process.env.SECRETKEY,{
                expiresIn : '30d'
            })
            res.cookie('token',token,{
                secure:true
            })
            res.status(200).json({
                message:'Logged in successfully'
            })
        }else{
            res.status(403).json({message:'Invalid Password'})
        }
    }
}