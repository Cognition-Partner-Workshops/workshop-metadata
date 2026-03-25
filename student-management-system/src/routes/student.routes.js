const express = require("express");
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  searchStudents,
} = require("../controllers/student.controller");

// GET /api/students/search?q=query - Search students
router.get("/search", searchStudents);

// POST /api/students - Create a new student
router.post("/", createStudent);

// GET /api/students - Get all students (with pagination & filters)
router.get("/", getAllStudents);

// GET /api/students/:id - Get student by ID
router.get("/:id", getStudentById);

// PUT /api/students/:id - Update student by ID
router.put("/:id", updateStudent);

// DELETE /api/students/:id - Delete student by ID
router.delete("/:id", deleteStudent);

module.exports = router;
