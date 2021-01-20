const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = 5000 || process.env.PORT 

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {

	console.log('MongoDB database connection extablished successfully');
});

const usersRouter = require('./routes/users.js');

app.use('/users', usersRouter);
app.listen(port, () => {

	console.log(`Server is running on port ${port}`);
});
