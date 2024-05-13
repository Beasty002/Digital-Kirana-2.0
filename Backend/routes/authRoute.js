const AuthControllers = require('../controller/auth/authController')

const router = require('express').Router()

router.route('/register').post(AuthControllers.registerCostumer)
router.route('/login').post(AuthControllers.loginCostumer)

module.exports = router