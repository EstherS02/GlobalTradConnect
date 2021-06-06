const express = require("express");
const router = express.Router();
const controller = require('./users.controller');
const auth = require("../../middleware/auth");

router.get('/', auth, controller.getUser);
router.post('/',auth, controller.saveUser);
router.put('/:id', auth, controller.updateUser);
router.delete('/:id', auth, controller.deleteUser);

module.exports = router;