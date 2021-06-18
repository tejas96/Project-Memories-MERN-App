const router  = require('express').Router();
const userController = require('../controller').userController;

router.get('/',userController.userRegister);

module.exports = router;
