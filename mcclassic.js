window.onload = function () {
    console.log("Mc Classic Aliens Loaded");
};
console.log("MC Classic Loaded");

// Your 22 aliens
const mcClassic = [
  { name: "Heatblast", species: "Pyronite" },
  { name: "Wildmutt", species: "Vulpimancer" },
  { name: "Diamondhead", species: "Petrosapien" },
  { name: "XLR8", species: "Kineceleran" },
  { name: "Grey Matter", species: "Galvan" },
  { name: "Four Arms", species: "Tetramand" },
  { name: "Stinkfly", species: "Lepidopterran" },
  { name: "Ripjaws", species: "Piscciss Volann" },
  { name: "Upgrade", species: "Galvanic Mechamorph" },
  { name: "Ghostfreak", species: "Ectonurite" },
  { name: "Cannonbolt", species: "Arburian Pelarota" },
  { name: "Wildvine", species: "Florauna" },
  { name: "Blitzwolfer", species: "Loboan" },
  { name: "Snare-oh", species: "Thep Khufan" },
  { name: "Upchuck", species: "Gourmand" },
  { name: "Frankenstrike", species: "Transylian" },
  { name: "Ditto", species: "Splixson" },
  { name: "Eye Guy", species: "Opticoid" },
  { name: "Way Big", species: "To'kustar" },
  { name: "Arctiguana", species: "Polar Manzardill" },
  { name: "Clockwork", species: "Chronosapien" },
  { name: "Feedback", species: "Conductoid" }
];

// Render
function renderAlienList() {
  const list = document.getElementById("alienList");
  list.innerHTML = "";

  mcClassic.forEach(alien => {
    const card = document.createElement("div");
    card.className = "alien-card";
    card.innerHTML = `
      <h3>${alien.name}</h3>
      <div class="alien-meta">Species: ${alien.species}</div>
    `;
    list.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderAlienList);
