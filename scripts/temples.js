const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

const today = new Date();
const year = today.getFullYear();

currentyear.innerHTML = year;
lastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;




hamButton.addEventListener('click', () => {
	hamButton.classList.toggle("open");
    navigation.classList.toogle("hiddenlist");
});