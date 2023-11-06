document.getElementById("convertButton").addEventListener("click", function () {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    let result;

    if (inputUnit === "celsius") {
        if (outputUnit === "celsius") {
            result = inputTemperature;
        } else if (outputUnit === "fahrenheit") {
            result = (inputTemperature * 9 / 5) + 32;
        } else if (outputUnit === "kelvin") {
            result = inputTemperature + 273.15;
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            result = (inputTemperature - 32) * 5 / 9;
        } else if (outputUnit === "fahrenheit") {
            result = inputTemperature;
        } else if (outputUnit === "kelvin") {
            result = (inputTemperature - 32) * 5 / 9 + 273.15;
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            result = inputTemperature - 273.15;
        } else if (outputUnit === "fahrenheit") {
            result = (inputTemperature - 273.15) * 9 / 5 + 32;
        } else if (outputUnit === "kelvin") {
            result = inputTemperature;
        }
    }

    document.getElementById("output").textContent = `${inputTemperature} ${inputUnit === "celsius" ? "°C" : inputUnit === "fahrenheit" ? "°F" : "K"} is ${result.toFixed(2)} ${outputUnit === "celsius" ? "°C" : outputUnit === "fahrenheit" ? "°F" : "K"}`;
});
