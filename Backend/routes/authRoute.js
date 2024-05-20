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


// router.post('/dbData', async (req, res) => {
//     const { email } = req.body;
//     const emailExist = await Costumer.findOne({email: email});
//                 if(emailExist){
//                     return res.status(201).json({
//                         email: email,
//                         message: emailExist
//                     });
//                 }
//     res.status(201).json({
//         email: email,
//         message: 'not a user'
//     });
// });


// router.delete('/delData', async (req, res) => {
//     const { email } = req.body;

//     try {
//         // Find the user by email
//         const user = await Costumer.findOne({ email });

//         if (!user) {
//             return res.status(404).json({
//                 message: 'User not found'
//             });
//         }

//         // Delete the user
//         await Costumer.deleteOne({ email });

//         res.status(200).json({
//             message: 'User data deleted successfully',
//             deletedUser: user
//         });

//     } catch (error) {
//         console.error('Error deleting user data:', error);
//         res.status(500).json({
//             message: 'Internal Server Error'
//         });
//     }
// });



router.route("/login/federated/google")

module.exports = router;