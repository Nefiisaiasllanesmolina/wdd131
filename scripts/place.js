const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const year = today.getFullYear();

currentyear.innerHTML = year;
lastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;




//const windSpeed = document.getElementById("#wind");
//const temperature = parseInt(document.getElementById("#temperature").value, 10);
const calculateWindChill = document.querySelector("#windChill");
const temperature = 10;
const wind = 5;

//nodo = temperature + wind;
nodo = 13.12 + .6215*(temperature) -11.37*(wind**.16)+.3965*(temperature)*(wind**.16);
si = nodo.toFixed(2);
calculateWindChill.innerHTML = `<span>${si}°C</span>`;;


