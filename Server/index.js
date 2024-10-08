const express = require('express');
const connectDB = require('./db');
const careerRoutes = require('./routes/careerRoutes');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/api/careers', careerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
