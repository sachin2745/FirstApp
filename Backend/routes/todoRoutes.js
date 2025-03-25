const express = require("express");
const { getAllTodos, addTodo, updateTodo, deleteTodo } = require("../controllers/todoController");

const router = express.Router();

router.get("/getall", getAllTodos);
router.post("/add", addTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router; 