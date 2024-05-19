const {check,body} = require("express-validator");
const router = require('express').Router()

const AuthControllers = require('../controller/auth/authController')
const Costumer = require('../model/userModel')

// @ desc Register Costumer
// @ route POST /auth/register
router.route('/register')
    .post([
        check("email")
            .isEmail()
            .withMessage("Please provide a valid email address")
            .custom(async(value, {req}) => {
                const emailExist = await Costumer.findOne({email: value});
                if(emailExist){
                    return Promise.reject(
                        "Email exists already, please pick a different one."
                    )
                }
            })
            .normalizeEmail(),
        body("password","Please enter a password with only numbers and text and at least 10 characters")
            .isLength({min:10})
            .isAlphanumeric()
            .trim(),
        body("username","Username should all lowercase and at least 10 characters")
            .isLowercase()
            .isLength({min:10})
            .isAlphanumeric()
            .trim()
            
    ],
    AuthControllers.registerCostumer
)

// @ desc Login Costumer
// @ route POST /auth/login
router.route('/login')
    .post([
        check("email")
            .isEmail()
            .withMessage("Please provide a valid email address")
            .custom(async(value, {req}) => {
                const emailExist = await Costumer.findOne({email: value});
                if(!emailExist){
                    return Promise.reject(
                        "User doesnot exist"
                    )
                }
            })
            .normalizeEmail(),
        body("password","Please enter a password with only numbers and text and at least 10 characters")
            .isLength({min:10})
            .isAlphanumeric()
            .trim(),
    ],
    AuthControllers.loginCostumer
)

router.route("/login/federated/google")

module.exports = router;