console.log("Ben 10 Database Loaded");

// Full Alien List
const aliens = [
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
  { name: "Frankenstrike", species: "Transylian" },
  { name: "Upchuck", species: "Gourmand" },
  { name: "Ditto", species: "Splixson" },
  { name: "Eye Guy", species: "Opticoid" },
  { name: "Way Big", species: "To'kustar" },
  { name: "Spitter", species: "Spheroid" },
  { name: "Buzzshock", species: "Nosedeenian" },
  { name: "Arctiguana", species: "Polar Manzardill" },
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
  { name: "Fasttrack", species: "Kineceleran" },
  { name: "Clockwork", species: "Chronosapien" },
  { name: "Chamalien", species: "Merlinisapien" },
  { name: "Eatle", species: "Oryctini" },
  { name: "Juryrigg", species: "Fixer" },
  { name: "Shocksquatch", species: "Gimlinopithecus" },
  { name: "Feedback", species: "Conductoid" },
  { name: "Bloxx", species: "Segmentasapien" },
  { name: "Gravattack", species: "Galileon" },
  { name: "Crashhopper", species: "Orthopterran" },
  { name: "Ball Weevil", species: "Spheroid" },
  { name: "Walkatrout", species: "Ichthian" }
];

// Render Alien List
function renderAlienList() {
  const list = document.getElementById("alienList");
  list.innerHTML = "";

  aliens.forEach(alien => {
    const card = document.createElement("div");
    card.className = "alien-card";

    card.innerHTML = `
      <h3>${alien.name}</h3>
      <div class="alien-meta">Species: ${alien.species}</div>
    `;

    list.appendChild(card);
  });
}

// Search System
function handleSearch() {
  const input = document.getElementById("searchInput");
  const result = document.getElementById("searchResult");
  const query = input.value.trim().toLowerCase();

  if (!query) {
    result.textContent = "Type an alien name or species to search.";
    return;
  }

  const matches = aliens.filter(a =>
    a.name.toLowerCase().includes(query) ||
    a.species.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    result.textContent = `No aliens match "${query}".`;
    return;
  }

  let output = `<strong>Matches (${matches.length}):</strong><br><br>`;
  matches.forEach(alien => {
    output += `
      <div style="margin-bottom:15px;">
        <div><strong>Name:</strong> ${alien.name}</div>
        <div><strong>Species:</strong> ${alien.species}</div>
      </div>
      <hr>
    `;
  });

  result.innerHTML = output;
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderAlienList();
  document.getElementById("searchBtn").addEventListener("click", handleSearch);
});
