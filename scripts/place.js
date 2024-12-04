const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const year = today.getFullYear();

currentyear.innerHTML = year;
lastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;




const windSpeed = document.getElementById("#wind");
const calculateWindChill = document.querySelector("#windChill");


let nodo;
const temperature = parseInt(document.getElementById("#temperature").value, 10);
    
nodo = temperature;
calculateWindChill.innerHTML = nodo;


