const express = require("express");
const router = express.Router();
const controller = require('./tasks.controller');

router.get('/', controller.getTasks);
router.get('/:id',controller.getTaskById);
router.post('/', controller.saveTask);
router.put('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);

module.exports = router;
