const express = require('express');
const {indexRouter} = require('./../routes/index');


var server = express();
const PORT = process.env.PORT || 3000;
server.set('view engine', 'ejs');

server.use(express.static(__dirname + "/public"));

server.use(indexRouter);
server.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`);
});