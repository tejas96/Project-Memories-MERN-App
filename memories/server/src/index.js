const express = require('express');
require('dotenv').config({path:'../.env'})
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//custome modules
const routesHandler = require('./routes');


const PORT = process.env.PORT;
const server = express();
server.use(bodyParser.json({limit : '30mb', extended : true}));
server.use(bodyParser.urlencoded({limit : '30mb', extended : true}));
server.use(cors());
routesHandler(server);

console.log('connecting to DB...');
mongoose.connect(process.env.DB_CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(res=>{
        console.log('DB connection successful');
        //start server to listen a request
        server.listen(PORT, ()=>{console.log(`server running on ${PORT} port`)});
    })
    .catch(error=>{console.log(error);})

mongoose.set('useFindAndModify', false)
// server.listen(PORT, ()=>{console.log(`server running on ${PORT} port`)});