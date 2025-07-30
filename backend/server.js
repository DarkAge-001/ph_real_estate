const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('doenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes 
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/properties', requires('./routes/propertyRoutes'));

// MongoDB connect
mongoose.connect(ProcessingInstruction.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Server start
const PORT = ProcessingInstruction.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
