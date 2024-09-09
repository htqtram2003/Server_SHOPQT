// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // Port for the API server

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Mock data
const classes = [
  {
    id: "66bdbd0145b3500a02e2d529",
    sessions: ["66b0431fb780a15cd82331ee", "66b04322b780a15cd8233208", "66b04332b780a15cd823321f"],
    students: ["66bda6116b0603eb32b038e2"],
    teachers: [],
    class_status: "ACTIVE",
    class_name: "[DEV] CHUYÊN BIỆT - SINH VIÊN",
    class_code: "0824",
    class_note: "",
    class_type: "",
    course: "66b04305b780a15cd82331a4",
    campus: {
      id: "66b98288614030acb18d9449",
      campus_status: "ACTIVE",
      is_active: true,
      campus_code: "San 2",
      campus_name: "SANA",
      campus_cluster: "SANA",
      campus_address: "Thu Duc",
      createdAt: "2024-08-12T03:33:28.385Z",
      updatedAt: "2024-08-12T03:33:28.385Z",
      campus_slug: "sana-0001"
    },
    class_location: "Thu Duc",
    number_student: 30,
    start_date: "2024-08-15",
    end_date: "2024-08-31",
    calendar_config: {
      rank: ["Thứ Hai", "Thứ Tư", "Thứ Sáu"],
      time_start: "06:00",
      time_end: "08:00"
    },
    author: "66ac5d59f4536a3d3eb8873e",
    created: 1723710721282,
    updated: 1723711060016,
    normalized_class_name: "[dev] chuyen biet - sinh vien",
    class_slug: "dev-chuyen-biet-sinh-vien",
    course_level: {
      id: "66ac81764eb45240b8d4912e",
      course_level_title: "Cơ bản",
      course_level_slug: "co-ban",
      course_level_description: "",
      created: 1722581366047,
      updated: 1722581366047
    },
    course_price: 2000000,
    course_discount: 0,
    number_student_in_class: 1,
    number_student_register_class: 0
  },
  // Add other class objects here
];

// Define a route to get classes
app.get('/api/classes', (req, res) => {
  res.json({ data: classes, meta: { total: classes.length, totalPage: 1, skip: 0, limit: 16 } });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
