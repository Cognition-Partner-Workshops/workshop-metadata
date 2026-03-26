const mongoose = require("mongoose");

// Create separate connections for Student and Teacher databases
const studentConnection = mongoose.createConnection(process.env.STUDENT_DB_URI);
const teacherConnection = mongoose.createConnection(process.env.TEACHER_DB_URI);

studentConnection.on("connected", () => {
  console.log("Connected to Student MongoDB (student-mongo-db)");
});

studentConnection.on("error", (err) => {
  console.error("Student DB connection error:", err.message);
});

teacherConnection.on("connected", () => {
  console.log("Connected to Teacher MongoDB (teacher-mongo-db)");
});

teacherConnection.on("error", (err) => {
  console.error("Teacher DB connection error:", err.message);
});

module.exports = { studentConnection, teacherConnection };
