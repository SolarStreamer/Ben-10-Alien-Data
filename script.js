console.log("HAZARD TEST 999");

// ===============================
// Full Alien List (62 Aliens)
// ===============================
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
  { name: "Walkatrout", species: "Ichthian" },
  { name: "Pesky Dust", species: "Nemuina" },
  { name: "Mole-Stache", species: "Mustachian" },
  { name: "The Worst", species: "Atrocian" },
  { name: "Kickin Hawk", species: "Talonian" },
  { name: "Toepick", species: "Unknown" },
  { name: "Astrodactyl", species: "Lunatac" },
  { name: "Bullfrag", species: "Incursean" },
  { name: "Atomix", species: "Unknown" },
  { name: "Gutrot", species: "Unknown" },
  { name: "Whampire", species: "Vladat" }
];

// ===============================
// Render Homepage List
// ===============================
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

    card.onclick = () => openTransformScreen(alien);

    list.appendChild(card);
  });
}

// ===============================
// Search System
// ===============================
function scoreMatch(alien, query) {
  const q = query.toLowerCase();
  let score = 0;

  if (alien.name.toLowerCase().includes(q)) score += 100;
  if (alien.species.toLowerCase().includes(q)) score += 50;

  return score;
}

function handleSearch() {
  const input = document.getElementById("searchInput");
  const result = document.getElementById("searchResult");
  const query = input.value.trim().toLowerCase();

  if (!query) {
    result.textContent = "Type an alien name or species to search.";
    return;
  }

  const matches = aliens
    .map(a => ({ alien: a, score: scoreMatch(a, query) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (matches.length === 0) {
    result.textContent = `No aliens match "${query}".`;
    return;
  }

  let output = `<strong>Matches (${matches.length}):</strong><br><br>`;

  matches.forEach(({ alien }) => {
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

// ===============================
// Transform Modal Logic
// ===============================
const modal = document.getElementById("transformModal");
const modalName = document.getElementById("modalName");
const modalSpecies = document.getElementById("modalSpecies");
const closeModal = document.getElementById("closeModal");

function openTransformScreen(alien) {
  modalName.textContent = alien.name;
  modalSpecies.textContent = "Species: " + alien.species;

  modal.style.display = "block";
}

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// ===============================
// Init
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderAlienList();
  document.getElementById("searchInput").addEventListener("input", handleSearch);
});
