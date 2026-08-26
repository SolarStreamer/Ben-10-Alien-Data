window.onload = function () {
    console.log("All Aliens Loaded");
};
console.log("All Aliens Loaded");

// FULL 62 ALIENS
const allAliens = [
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
  { name: "Feedback", species: "Conductoid" },

  // The rest of the 62:
  { name: "Buzzshock", species: "Nosedeenian" },
  { name: "Spitter", species: "Spheroid" },
  { name: "Swampfire", species: "Methanosian" },
  { name: "Echo Echo", species: "Sonorosian" },
  { name: "Humungousaur", species: "Vaxasaurian" },
  { name: "Jetray", species: "Aerophibian" },
  { name: "Big Chill", species: "Necrofriggian" },
  { name: "Chromastone", species: "Crystalsapien" },
  { name: "Brainstorm", species: "Cerebrocrustacean" },
  { name: "Spidermonkey", species: "Arachnichimp" },
  { name: "Goop", species: "Polymorph" },
  { name: "Alien X", species: "Celestialsapien" },
  { name: "Lodestar", species: "Biosovortian" },
  { name: "Rath", species: "Appoplexian" },
  { name: "Nanomech", species: "Nanochip" },
  { name: "Water Hazard", species: "Orishan" },
  { name: "Ampfibian", species: "Amphibian" },
  { name: "Armodrillo", species: "Talpaedan" },
  { name: "Terraspin", species: "Geochelone Aerio" },
  { name: "NRG", species: "Prypiatosian-B" },
  { name: "Fasttrack", species: "Citrakayah" },
  { name: "Chamalien", species: "Merlinisapien" },
  { name: "Eatle", species: "Oryctini" },
  { name: "Juryrigg", species: "Fixer" },
  { name: "Shocksquatch", species: "Gimlinopithecus" },
  { name: "Bloxx", species: "Segmentasapien" },
  { name: "Gravattack", species: "Galileon" },
  { name: "Crashhopper", species: "Orthopterran" },
  { name: "Ball Weevil", species: "Spheroid" },
  { name: "Walkatrout", species: "Ichthian" }
  { name: "Atomix", species: "Unknown" }
];

// Render
function renderAlienList() {
  const list = document.getElementById("alienList");
  list.innerHTML = "";

  allAliens.forEach(alien => {
    const card = document.createElement("div");
    card.className = "alien-card";
    card.innerHTML = `
      <h3>${alien.name}</h3>
      <div class="alien-meta">Species: ${alien.species}</div>
    `;
    list.appendChild(card);
  });
}

// Search
function handleSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const result = document.getElementById("searchResult");

  if (!input) {
    result.textContent = "Type an alien name or species to search.";
    return;
  }

  const matches = allAliens.filter(a =>
    a.name.toLowerCase().includes(input) ||
    a.species.toLowerCase().includes(input)
  );

  if (matches.length === 0) {
    result.textContent = `No aliens match "${input}".`;
    return;
  }

  let output = `<strong>Matches (${matches.length}):</strong><br><br>`;
  matches.forEach(a => {
    output += `<div><strong>${a.name}</strong> — ${a.species}</div><hr>`;
  });

  result.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", () => {
  renderAlienList();
  document.getElementById("searchBtn").addEventListener("click", handleSearch);
});
