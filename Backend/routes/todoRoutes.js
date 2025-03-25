const express = require("express");
const { getAllTodos, addTodo, updateTodo, deleteTodo, deleteAllTodos } = require("../controllers/todoController");

const router = express.Router();

router.get("/getall", getAllTodos);
router.post("/add", addTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);
router.delete("/deleteAll", deleteAllTodos);

module.exports = router; 