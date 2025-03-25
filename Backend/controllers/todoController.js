const { PrismaClient, Priority } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllTodos = async (req, res) => {
  try {
    const { query, priority } = req.query;

    const whereClause = {
      AND: [
        query ? { title: { contains: query, mode: "insensitive" } } : {},
        priority ? { priority: priority } : {},
      ],
    };

    const todos = await prisma.todo.findMany({
      where: whereClause,
      orderBy: { id: "desc" },
    });

    res.json(todos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch todos", details: error.message });
  }
};

const addTodo = async (req, res) => {
  try {
    const { title, priority } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    if (!priority || !["HIGH", "MEDIUM", "LOW"].includes(priority)) {
      return res.status(400).json({ error: "Invalid priority value" });
    }
    console.log(title, priority);

    const newTodo = await prisma.todo.create({
      data: {
        title,
        priority: Priority[priority], // Convert string to Enum
        completed: false,
      },
    });

    res.status(201).json(newTodo);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create todo", details: error.message });
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  try {
    await prisma.todo.update({
      where: { id },
      data: { completed: req.body.completed },
    });
    res.json({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating todo" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json({ error: "Invalid ID" });

    await prisma.todo.delete({ where: { id } });
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete todo", details: error.message });
  }
};

const deleteAllTodos = async (req, res) => {
  const { ids } = req.body;
  try {
    await prisma.todo.deleteMany({
      where: { id: { in: ids } },
    });
    res.json({ message: "Todos deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting todos" });
  }
};

module.exports = {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodos,
}; // Corrected export for CommonJS
