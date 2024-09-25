const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Define routes
const authRouter = require('./routes/auth');
const courseRouter = require('./routes/course');
const purchaseRouter = require('./routes/purchase');

app.use('/api/auth', authRouter);
app.use('/api/course', courseRouter);
app.use('/api/purchase', purchaseRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
