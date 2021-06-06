const express = require("express");
const router = express.Router();
const controller = require('./admin.controller');


router.get('/', controller.LoginAdmin);

module.exports = router;