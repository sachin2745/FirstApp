const express = require("express");
const { getTodoList, addTodo, updateTodo, deleteTodo, searchTodos } = require("../controllers/todoController");

const router = express.Router();

router.get("/getall", getTodoList);
router.post("/add", addTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);
router.get('/search', searchTodos);

module.exports = router; 