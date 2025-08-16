// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');

// dotenv.config();

// const app = express();
// // adding cors to connect fronyend

// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials:true
// }));
// // end cors

// app.use(express.json());
// app.use(express.static('public'));

// // Routes
// app.use('/api/auth', authRoutes);

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGODB_CONNECT)
//   .then(() => console.log('MongoDB connected Successfully...'))
//   .catch(err => console.log('DB error:', err));

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // syed1234 = password, kiransyed = Uname
// // MONGODB_CONNECT="mongodb+srv://kiranshahid8080:<db_password>@finalhachk.pboobf4.mongodb.net/?retryWrites=true&w=majority&appName=finalhachk"
// // PORT=5000

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Middleware path
app.use(cors({
  origin: 'http://localhost:3000',
  credentials:true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// MongoDB Connection ...
mongoose
  .connect(process.env.MONGODB_CONNECT)
  .then(() => console.log('MongoDB connected Successfully...'))
  .catch(err => console.log('DB error:', err));

// Start Server...
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
