const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const year = today.getFullYear();

currentyear.innerHTML = year;
lastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;




//const windSpeed = document.getElementById("#wind");
//const temperature = parseInt(document.getElementById("#temperature").value, 10);
const calculateWindChill = document.querySelector("#windChill");
const temperature1 = 10;
const wind1 = 5;

//nodo = temperature + wind;
if (temperature1<=10 && wind1>4.8){
    function myFunc(temperature, wind) {
        nodo = 13.12 + .6215*(temperature) -11.37*(wind**.16)+.3965*(temperature)*(wind**.16); calculateWindChill.innerHTML = `<span>${nodo.toFixed(2)}°C</span>`;
    }
}
else{
    calculateWindChill.innerHTML = "N/A"
}
    

myFunc(temperature1, wind1)



