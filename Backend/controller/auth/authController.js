const { users } = require('../../model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.registerUser = (req,res) => {
    const {name,email,password} = req.body
    users.create({
        name,
        email,
        password:bcrypt.hashSync(password,8)
    })
    res.status(200).json({
        message: "User registered Successfully"
    })
}

exports.loginUser = async (req,res) => {
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