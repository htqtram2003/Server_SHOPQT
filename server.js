
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const session = require('express-session');
const crypto = require('crypto'); // For generating random OTP
const secret = crypto.randomBytes(32).toString('hex');
console.log(secret); // In ra chuỗi bí mật ngẫu nhiên
require('dotenv').config();
const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies
mongoose.connect('mongodb://localhost:27017/hshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const classes = [
  [
    {
        "id": "66bb282a28b713d48a5eeea6",
        "sessions": ["66b0431fb780a15cd82331ee", "66b04322b780a15cd8233208", "66b04332b780a15cd823321f"],
        "students": [],
        "teachers": [
            {
                "id": "66ac7d844eb45240b8d48d0d",
                "name": "teacher",
                "email": "teacher@gmail.com"
            }
        ],
        "class_status": "ACTIVE",
        "class_name": "class business COPY COPY COPY",
        "class_code": "business-01 COPY COPY COPY",
        "class_note": "",
        "class_type": "EXTERNAL",
        "course": "66b04305b780a15cd82331a4",
        "campus": {
            "id": "66b98288614030acb18d9449",
            "campus_status": "ACTIVE",
            "is_active": true,
            "campus_code": "San 2",
            "campus_name": "SANA",
            "campus_cluster": "SANA",
            "campus_address": "Thu Duc",
            "createdAt": "2024-08-12T03:33:28.385Z",
            "updatedAt": "2024-08-12T03:33:28.385Z",
            "campus_slug": "sana-0001"
        },
        "class_location": "Thu Duc",
        "number_student": 4,
        "start_date": "2024-07-03",
        "end_date": "2024-08-03",
        "calendar_config": {
            "rank": ["Thứ Hai", "Thứ Tư"],
            "time_start": "18:30",
            "time_end": "19:30"
        },
        "author": "66ac5d59f4536a3d3eb8873e",
        "created": 1723541546790,
        "updated": 1723542382120,
        "normalized_class_name": "class business copy copy copy",
        "class_slug": "class-business-copy-copy-copy-0004",
        "course_level": {
            "id": "66ac81764eb45240b8d4912e",
            "course_level_title": "Cơ bản",
            "course_level_slug": "co-ban",
            "course_level_description": "",
            "created": 1722581366047,
            "updated": 1722581366047
        },
        "course_price": 2000000,
        "course_discount": 0,
        "number_student_in_class": 0,
        "number_student_register_class": 0
    },
    {
        "id": "66bb282828b713d48a5eee8b",
        "sessions": ["66b0431fb780a15cd82331ee", "66b04322b780a15cd8233208", "66b04332b780a15cd823321f"],
        "students": [],
        "teachers": [
            {
                "id": "66ac7d844eb45240b8d48d0d",
                "name": "teacher",
                "email": "teacher@gmail.com"
            }
        ],
        "class_status": "ACTIVE",
        "class_name": "class business COPY COPY COPY",
        "class_code": "business-01 COPY COPY COPY",
        "class_note": "",
        "class_type": "",
        "course": "66b04305b780a15cd82331a4",
        "campus": {
            "id": "66b98288614030acb18d9449",
            "campus_status": "ACTIVE",
            "is_active": true,
            "campus_code": "San 2",
            "campus_name": "SANA",
            "campus_cluster": "SANA",
            "campus_address": "Thu Duc",
            "createdAt": "2024-08-12T03:33:28.385Z",
            "updatedAt": "2024-08-12T03:33:28.385Z",
            "campus_slug": "sana-0001"
        },
        "class_location": "Thu Duc",
        "number_student": 4,
        "start_date": "2024-07-03",
        "end_date": "2024-08-03",
        "calendar_config": {
            "rank": ["Thứ Hai", "Thứ Tư"],
            "time_start": "18:30",
            "time_end": "19:30"
        },
        "author": "66ac5d59f4536a3d3eb8873e",
        "created": 1723541544291,
        "updated": 1723541544291,
        "normalized_class_name": "class business copy copy copy",
        "class_slug": "class-business-copy-copy-copy-0003",
        "course_level": {
            "id": "66ac81764eb45240b8d4912e",
            "course_level_title": "Cơ bản",
            "course_level_slug": "co-ban",
            "course_level_description": "",
            "created": 1722581366047,
            "updated": 1722581366047
        },
        "course_price": 2000000,
        "course_discount": 0,
        "number_student_in_class": 0,
        "number_student_register_class": 0
    },
    {
        "id": "66bb282428b713d48a5eee68",
        "sessions": ["66b0431fb780a15cd82331ee", "66b04322b780a15cd8233208", "66b04332b780a15cd823321f"],
        "students": [],
        "teachers": [
            {
                "id": "66ac7d844eb45240b8d48d0d",
                "name": "teacher",
                "email": "teacher@gmail.com"
            }
        ],
        "class_status": "ACTIVE",
        "class_name": "class business COPY COPY COPY",
        "class_code": "business-01 COPY COPY COPY",
        "class_note": "",
        "class_type": "",
        "course": "66b04305b780a15cd82331a4",
        "campus": {
            "id": "66b98288614030acb18d9449",
            "campus_status": "ACTIVE",
            "is_active": true,
            "campus_code": "San 2",
            "campus_name": "SANA",
            "campus_cluster": "SANA",
            "campus_address": "Thu Duc",
            "createdAt": "2024-08-12T03:33:28.385Z",
            "updatedAt": "2024-08-12T03:33:28.385Z",
            "campus_slug": "sana-0001"
        },
        "class_location": "Thu Duc",
        "number_student": 4,
        "start_date": "2024-07-03",
        "end_date": "2024-08-03",
        "calendar_config": {
            "rank": ["Thứ Hai", "Thứ Tư"],
            "time_start": "18:30",
            "time_end": "19:30"
        },
        "author": "66ac5d59f4536a3d3eb8873e",
        "created": 1723541540035,
        "updated": 1723541540035,
        "normalized_class_name": "class business copy copy copy",
        "class_slug": "class-business-copy-copy-copy-0002",
        "course_level": {
            "id": "66ac81764eb45240b8d4912e",
            "course_level_title": "Cơ bản",
            "course_level_slug": "co-ban",
            "course_level_description": "",
            "created": 1722581366047,
            "updated": 1722581366047
        },
        "course_price": 2000000,
        "course_discount": 0,
        "number_student_in_class": 0,
        "number_student_register_class": 0
    },
    {
        "id": "66bb282128b713d48a5eee4d",
        "sessions": ["66b0431fb780a15cd82331ee", "66b04322b780a15cd8233208", "66b04332b780a15cd823321f"],
        "students": [],
        "teachers": [
            {
                "id": "66ac7d844eb45240b8d48d0d",
                "name": "teacher",
                "email": "teacher@gmail.com"
            }
        ],
        "class_status": "ACTIVE",
        "class_name": "class business COPY COPY COPY",
        "class_code": "business-01 COPY COPY COPY",
        "class_note": "",
        "class_type": "",
        "course": "66b04305b780a15cd82331a4",
        "campus": {
            "id": "66b98288614030acb18d9449",
            "campus_status": "ACTIVE",
            "is_active": true,
            "campus_code": "San 2",
            "campus_name": "SANA",
            "campus_cluster": "SANA",
            "campus_address": "Thu Duc",
            "createdAt": "2024-08-12T03:33:28.385Z",
            "updatedAt": "2024-08-12T03:33:28.385Z",
            "campus_slug": "sana-0001"
        },
        "class_location": "Thu Duc",
        "number_student": 4,
        "start_date": "2024-07-03",
        "end_date": "2024-08-03",
        "calendar_config": {
            "rank": ["Thứ Hai", "Thứ Tư"],
            "time_start": "18:30",
            "time_end": "19:30"
        },
        "author": "66ac5d59f4536a3d3eb8873e",
        "created": 1723541534846,
        "updated": 1723541534846,
        "normalized_class_name": "class business copy copy copy",
        "class_slug": "class-business-copy-copy-copy-0001",
        "course_level": {
            "id": "66ac81764eb45240b8d4912e",
            "course_level_title": "Cơ bản",
            "course_level_slug": "co-ban",
            "course_level_description": "",
            "created": 1722581366047,
            "updated": 1722581366047
        },
        "course_price": 2000000,
        "course_discount": 0,
        "number_student_in_class": 0,
        "number_student_register_class": 0
    }
]
]

const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
    sparse: true, 
  },
  image: String,
  password: {
    type: String,
    required: true,
  },
  birthday: { 
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender:{
    type: String,
    require: true,
  },
}));


const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
}));

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

app.get('/api/products/hot', async (req, res) => {
  try {
    const hotProducts = await Product.find({ isHot: true }); 
    res.json(hotProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/sale-products', async (req, res) => {
  try{
  const saleProducts = await Product.find({ salePrice:Number }); 
    res.json(saleProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});
app.post('/auth/v1/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email and password
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});



app.post('/auth/v1/register', async (req, res) => {
  try {
    const { name, email, password ,phone, birthday, address, gender} = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ name, email, password ,phone , birthday, address, gender});
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

app.post('/auth/v1/check-email', async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ exists: true, message: 'Email is already registered' });
    }

    res.status(200).json({ exists: false, message: 'Email is available' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

app.post('/auth/v1/check-phone', async (req, res) => {
  try {
    const { phone } = req.body;

    // Check if the phone number already exists in the database
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(200).json({ exists: true, message: 'Phone number is already registered' });
    }

    res.status(200).json({ exists: false, message: 'Phone number is available' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 } // Session tồn tại trong 10 phút
}));


// Sử dụng biến môi trường cho Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Sử dụng biến môi trường cho session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}));


// // API gửi OTP qua email
// app.post('/auth/v1/send-otp-email', (req, res) => {
//   const email = req.body.email;

//   // Tạo mã OTP
//   const otp = crypto.randomInt(100000, 999999);
//   const expiry = Date.now() + 10 * 60 * 1000; // OTP hết hạn sau 10 phút

//   // Lưu OTP và thời gian hết hạn vào session
//   req.session.otp = otp;
//   req.session.expiry = expiry;

//   // Gửi email chứa mã OTP
//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: email,
//     subject: 'Your OTP Code',
//     text: `Your OTP is: ${otp}. This OTP will expire in 10 minutes.`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).json({ error: 'Failed to send OTP.' });
//     }
//     res.status(200).json({ message: 'OTP sent successfully!' });
//   });
// });
app.post('/auth/v1/send-otp-email', (req, res) => {
  const otp = Math.floor(100000 + Math.random() * 900000); // Sinh OTP ngẫu nhiên
  const expiry = Date.now() + 10 * 60 * 1000; // OTP hết hạn sau 10 phút

  // Lưu OTP và thời gian hết hạn vào session
  req.session.otp = otp;
  req.session.expiry = expiry;

  console.log('OTP:', otp, 'Expiry:', expiry); // Kiểm tra log OTP và thời gian hết hạn

  // Gửi OTP qua email (giả định là phần này hoạt động đúng)
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: req.body.email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Error sending OTP.' });
    }
    res.status(200).json({ message: 'OTP sent successfully.' });
  });
});


app.post('/auth/v1/verify-otp-email', (req, res) => {
  console.log(req.body); // In ra dữ liệu được gửi từ frontend

  const { otp } = req.body;

  // Kiểm tra nếu không có otp trong body
  if (!otp) {
    return res.status(400).json({ error: 'OTP is required.' });
  }

  // Kiểm tra OTP và thời gian hết hạn
  if (req.session.otp && req.session.expiry > Date.now()) {
    if (parseInt(otp) === req.session.otp) {
      return res.status(200).json({ message: 'OTP verified successfully!' });
    } else {
      return res.status(400).json({ error: 'Invalid OTP.' });
    }
  } else {
    return res.status(400).json({ error: 'OTP expired or not found.' });
  }
});


app.get('/api/classes', (req, res) => {
  try {
    res.json(classes);
  } catch (error) {
    console.error('Error fetching classes:', error);
    res.status(500).json({ error: 'Failed to fetch classes' });
  }
});


app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});

