const mongoose = require("mongoose");
const { teacherConnection } = require("../config/database");

const teacherSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
    },
    department: {
      type: String,
      trim: true,
    },
    subjects: {
      type: [String],
      default: [],
    },
    qualification: {
      type: String,
      trim: true,
    },
    experience: {
      type: Number,
      default: 0,
    },
    joiningDate: {
      type: Date,
      default: Date.now,
    },
    salary: {
      type: Number,
    },
    address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      zipCode: { type: String, trim: true },
    },
    phone: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Register model on the teacherConnection (teacher-mongo-db)
const Teacher = teacherConnection.model("Teacher", teacherSchema);

module.exports = Teacher;
