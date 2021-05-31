let temperature1 = document.getElementById('temp1');
let temperature2 = document.getElementById('temp2');
let temp1scale = document.getElementById('temp1scale');
let temp2scale = document.getElementById('temp2scale');
 
let submitButton = document.getElementById('submitButton');



function convertTemperature() {
  temperature = parseInt(temperature1.value);
  scale1 = temp1scale.value;
  resultTemperature = parseInt(temperature2.value);
  scale2 = temp2scale.value;
  
  console.log(temperature, scale1, resultTemperature, scale2)
  
  if (scale1 == 'celsius') {

    if (scale2 == 'celsius') {
      resultTemperature = temperature;
    } else if (scale2 == 'farenheit') {
      resultTemperature = (9/5*temperature) + 32;
    } else {
      resultTemperature = temperature + 273;
    }

  }

  else if (scale1 == 'farenheit') {

    if (scale2 == 'celsius') {
      resultTemperature = (5/9)*(temperature-32);
    } else if (scale2 == 'farenheit') {
      resultTemperature = temperature;
    } else {
      resultTemperature = ((temperature-32) * (5/9)) + 273;
    }

  }

  else if (scale1 == 'kelvin') {

    if (scale2 == 'celsius') {
      resultTemperature = temperature - 273;
    } else if (scale2 == 'farenheit') {
      resultTemperature = (((temperature - 273)*9)/5 + 32);
    } else {
      resultTemperature = temperature;
    }

  }

  else {
    alert('Seems like you did something wrong...')
  }

  temperature2.value = resultTemperature.toFixed(2);
  console.log(resultTemperature)
}


submitButton.addEventListener('click', convertTemperature);