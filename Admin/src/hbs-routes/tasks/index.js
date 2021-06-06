const express = require("express");
const router = express.Router();
const controller = require('./tasks.controller');
const auth = require("../../middleware/auth");

router.get('/', auth, controller.getTasks);
router.get('/add', auth, controller.addTask);
router.get('/edit/:id', auth, controller.editTask);

module.exports = router;