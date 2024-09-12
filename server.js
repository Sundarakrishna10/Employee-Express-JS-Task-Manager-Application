const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const employeeRoutes = require('./routes/employeeRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
connectDB();

app.use(express.json());

app.use('/api', employeeRoutes);
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
