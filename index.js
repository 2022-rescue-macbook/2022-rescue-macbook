const express = require('./config/express');

const port = 3000;
express().listen(port);
console.log(`API Server Start At Port ${port}`);