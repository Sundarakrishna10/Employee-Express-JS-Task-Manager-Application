const express = require('express');
const { createTask, getTasks, getTasksByDate, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks', getTasks);
router.get('/tasks/date/:date', getTasksByDate);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
