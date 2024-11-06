/*const today = new Date();
const year = today.getFullYear();

document.getElementById('currentyear').innerHTML = year;*/

const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const year = today.getFullYear();

currentyear.innerHTML = year;
lastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;
