const {check,body} = require("express-validator");
const router = require('express').Router()
const passport = require("passport");

const AuthControllers = require('../controller/auth/authController')
const Costumer = require('../model/userModel');

const CLIENT_URL = "http://localhost:5173/"

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

router.route('/reset')
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
    ],
    AuthControllers.passwordReset
)
router.route('/changePassword')
    .post([
        body("password","Please enter a password with only numbers and text and at least 10 characters")
            .isLength({min:10})
            .isAlphanumeric()
            .trim(),
    ],
    AuthControllers.passwordChange
)
router.route('/otpVerification')
    .post([
    ],
    AuthControllers.verifyOtp
)


//  @desc if login using google failes
//  @route GET /auth/login/failed
router.route('/login/failed').get(AuthControllers.getFailedLogin);

// @dec Success Login
// @route GEt /auth/login/sucess
router.route('/login/success').get(AuthControllers.getSuccessLogin);

// @desc Login with google
// @route GET /auth/login/google
router.route("/login/google").get(passport.authenticate("google", {
    scope:["profile","email"]
}));

// @desc CallbackURL from google result error or success
// @route GET /auth/google/callback
router.route("/google/callback").get(passport.authenticate("google",{
    successRedirect:CLIENT_URL,
    failureRedirect:"/auth/login/failed",
}))

// @desc For Logging Out For Google Login
// @route GET /auth/google/logout
router.route("/logout").get(AuthControllers.getLogoutGoogle)

module.exports = router;