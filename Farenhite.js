                //    farenhite to celliciou


                
 const fahrenheitTemp = 77; 
 const celsiusTemp = fahrenheitToCelsius(fahrenheitTemp); 
 console.log(`${fahrenheitTemp} degrees Fahrenheit is equal to ${celsiusTemp} degrees Celsius.`); 
function fahrenheitToCelsius(fahrenheit) {
 const celsius = (fahrenheit - 32) * 5/9;
 return celsius;
  }
                  