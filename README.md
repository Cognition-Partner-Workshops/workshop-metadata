# Student Management System

An Express.js REST API for managing students and teachers, with **two separate MongoDB databases** connected via Mongoose.

- **student-mongo-db** — stores all student data
- **teacher-mongo-db** — stores all teacher data

## Project Structure

```
student-management-system/
├── src/
│   ├── config/
│   │   └── database.js          # Dual Mongoose connections
│   ├── controllers/
│   │   ├── student.controller.js
│   │   └── teacher.controller.js
│   ├── models/
│   │   ├── student.model.js     # Student schema (student-mongo-db)
│   │   └── teacher.model.js     # Teacher schema (teacher-mongo-db)
│   ├── routes/
│   │   ├── student.routes.js
│   │   └── teacher.routes.js
│   └── server.js                # Express app entry point
├── .env                         # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## Prerequisites

- Node.js >= 16
- MongoDB (two databases: `student-mongo-db` and `teacher-mongo-db`)

## Setup

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd student-management-system
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root:

   ```env
   PORT=3000
   STUDENT_DB_URI=mongodb://localhost:27017/student-mongo-db
   TEACHER_DB_URI=mongodb://localhost:27017/teacher-mongo-db
   ```

4. **Start the server**

   ```bash
   # Production
   npm start

   # Development (auto-reload)
   npm run dev
   ```

## API Endpoints

### Health Check

| Method | Endpoint | Description          |
| ------ | -------- | -------------------- |
| GET    | `/`      | API info & endpoints |

### Students (`/api/students`)

| Method | Endpoint                    | Description                            |
| ------ | --------------------------- | -------------------------------------- |
| POST   | `/api/students`             | Create a new student                   |
| GET    | `/api/students`             | Get all students (pagination & filter) |
| GET    | `/api/students/search?q=`   | Search students by name or email       |
| GET    | `/api/students/:id`         | Get a student by ID                    |
| PUT    | `/api/students/:id`         | Update a student by ID                 |
| DELETE | `/api/students/:id`         | Delete a student by ID                 |

**Query Parameters for GET `/api/students`:**

- `page` (default: 1) — page number
- `limit` (default: 10) — results per page
- `isActive` — filter by active status (`true`/`false`)
- `grade` — filter by grade

### Teachers (`/api/teachers`)

| Method | Endpoint                    | Description                            |
| ------ | --------------------------- | -------------------------------------- |
| POST   | `/api/teachers`             | Create a new teacher                   |
| GET    | `/api/teachers`             | Get all teachers (pagination & filter) |
| GET    | `/api/teachers/search?q=`   | Search teachers by name or department  |
| GET    | `/api/teachers/:id`         | Get a teacher by ID                    |
| PUT    | `/api/teachers/:id`         | Update a teacher by ID                 |
| DELETE | `/api/teachers/:id`         | Delete a teacher by ID                 |

**Query Parameters for GET `/api/teachers`:**

- `page` (default: 1) — page number
- `limit` (default: 10) — results per page
- `isActive` — filter by active status (`true`/`false`)
- `department` — filter by department

## Sample Requests

### Create a Student

```bash
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "grade": "10th",
    "subjects": ["Math", "Science"],
    "phone": "555-0100"
  }'
```

### Create a Teacher

```bash
curl -X POST http://localhost:3000/api/teachers \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane.smith@example.com",
    "department": "Mathematics",
    "subjects": ["Algebra", "Calculus"],
    "qualification": "M.Sc. Mathematics",
    "experience": 8,
    "phone": "555-0200"
  }'
```

### Get All Students

```bash
curl http://localhost:3000/api/students?page=1&limit=5
```

### Search Teachers

```bash
curl http://localhost:3000/api/teachers/search?q=math
```

## Dual Database Architecture

This project uses `mongoose.createConnection()` to establish **two independent MongoDB connections**:

- `studentConnection` → connects to `student-mongo-db`
- `teacherConnection` → connects to `teacher-mongo-db`

Each model is registered on its respective connection, ensuring complete data isolation between students and teachers.
