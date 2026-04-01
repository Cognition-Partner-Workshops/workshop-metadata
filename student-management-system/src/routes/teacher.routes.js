const express = require("express");
const router = express.Router();
const {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  searchTeachers,
} = require("../controllers/teacher.controller");

// GET /api/teachers/search?q=query - Search teachers
router.get("/search", searchTeachers);

// POST /api/teachers - Create a new teacher
router.post("/", createTeacher);

// GET /api/teachers - Get all teachers (with pagination & filters)
router.get("/", getAllTeachers);

// GET /api/teachers/:id - Get teacher by ID
router.get("/:id", getTeacherById);

// PUT /api/teachers/:id - Update teacher by ID
router.put("/:id", updateTeacher);

// DELETE /api/teachers/:id - Delete teacher by ID
router.delete("/:id", deleteTeacher);

module.exports = router;
