const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import database connections (initializes both connections)
require("./config/database");

// Import routes
const studentRoutes = require("./routes/student.routes");
const teacherRoutes = require("./routes/teacher.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get("/", (req, res) => {
  res.json({
    message: "Student Management System API",
    version: "1.0.0",
    endpoints: {
      students: "/api/students",
      teachers: "/api/teachers",
    },
  });
});

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}`);
  console.log(`Students API: http://localhost:${PORT}/api/students`);
  console.log(`Teachers API: http://localhost:${PORT}/api/teachers`);
});
