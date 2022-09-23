const express = require('express');
const compression = require('compression');
var cors = require('cors');

module.exports = function () {
    const app = express();

    app.use(compression());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors());

    require('../src/routes/indexRoute')(app);

    return app;
};