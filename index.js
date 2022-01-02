const express = require('express');
const app = express();

const convertTemperature = require('./convertTemperature');

app.get('/', (req, res) => {
    let temperature = req.query.temperature;
    let converter = req.query.converter;

    let result = convertTemperature.convertTemperature(temperature, converter);

    res.json({temperature: result});
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

