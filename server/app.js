const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb://localhost/ladazadb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected to mongoose!")
});

const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin/auth');
const categoryRouter = require('./routes/category');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/api', authRouter);
app.use('/api', adminRouter);
app.use('/api', categoryRouter);
app.use('/api', productRouter);
app.use('/api', cartRouter);

module.exports = app;
