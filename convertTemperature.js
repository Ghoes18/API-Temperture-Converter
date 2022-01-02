function convertCelcius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 1.8;

    return celsius;
}

function convertFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}

function convertTemperature(temperature, converter) {

    if (converter == 'C') {
        return convertCelcius(temperature);
    } else if (converter == 'F') {
        return convertFahrenheit(temperature);
    }
}

exports.convertTemperature = convertTemperature;