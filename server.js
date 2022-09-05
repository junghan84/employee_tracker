const express = require('express');

//Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Connetct to database
const db = mysql.createConnection(
   {
      host:'localhost',
      //MySQL username,
      user:'root',
      //TODE:Add MySQL password here
      password:'',
      database:'movie_db'
   }
)