// const path = require('path');
// const router = require('./router.js');
// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
import express, {Request, Response} from 'express';
// import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
// import router from './router.ts';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));

// app.use('/', router);



app.listen(3000, () => {
  console.log('App is listening at http://localhost:3000')
})

// module.exports = app;