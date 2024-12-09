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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Merida Mexico",
      location: "Mérida, Yucatán, Mexico",
      dedicated: "2000, July, 8",
      area: 10700,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/merida-mexico-temple/merida-mexico-temple-14119-main.jpg"
    },
    {
      templeName: "Tijuana México",
      location: "Tijuana, Baja California, Mexico",
      dedicated: "2015, December, 13",
      area: 33367,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
    },
    {
      templeName: "Puebla Mexico",
      location: "Puebla, Mexico",
      dedicated: "2024, May, 19",
      area: 35865,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46342-main.jpg"
    },
  ];

  createTempleCard(temples);

  const oldLink = document.querySelector("#old");
  const newLink = document.querySelector("#new");
  const largeLink = document.querySelector("#large");
  const smallLink = document.querySelector("#small");

  oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.includes("19")));
  });

  newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.includes("20")));
  });

  largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => (temple.area > 90000)));
  });

  smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => (temple.area < 10000)));
  });

  function createTempleCard(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple` );
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector(".container").appendChild(card);
    });
  }
  
  var images = temples.map(function(element){
    return '<li>'+element.templeName+' '+element.location+' '+element.dedicated+' '+element.size+element.imageUrl+'</li>'
  })
  document.getElementById("templesImages").innerHTML = images;