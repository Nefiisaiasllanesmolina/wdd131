const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const year = today.getFullYear();

currentyear.innerHTML = year;
lastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;

let hamButton = document.querySelector("#menu");
let navigation = document.querySelector("#navigation");
let tittle = document.querySelector("#h1");

hamButton.addEventListener('click', () => {
	hamButton.classList.toggle("open");
    navigation.classList.toogle("hiddenlist");
    tittle.classList.toogle("color");
});

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];







  createTempleCard(temples);

  const listproduct = document.getElementById("selectaproduct");

  listproduct.addEventListener("click", () => {
    createTempleCard(products);
  });

  function createTempleCard(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("option");

      name.textContent = temple.templeName;

      card.appendChild(name);

      document.querySelector(".container").appendChild(card);
    });
  }
  
  var images = temples.map(function(element){
    return '<li>'+element.templeName+' '+element.location+' '+element.dedicated+' '+element.size+element.imageUrl+'</li>'
  })
  document.getElementById("templesImages").innerHTML = images;