const express = require('express');

var indexRouter = express.Router();

indexRouter.get('/', (req, res)=>{
    res.render('index');
});

module.exports = {indexRouter};