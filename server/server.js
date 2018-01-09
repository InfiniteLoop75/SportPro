const express = require('express');



var server = express();
const PORT = process.env.PORT || 3000;

server.get('/', (req, res)=>{
    res.render('index.html');
});

server.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`);
});