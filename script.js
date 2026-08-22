console.log("SCRIPT LOADED");
// ===============================
// FULL BEN 10 ALIEN LIST (62 ALIENS)
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
  { name: "Walkatrout", species: "Ickthian" },
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
// HOMEPAGE LIST
// ===============================
function renderAlienList() {
  const listContainer = document.getElementById("alienList");
  listContainer.innerHTML = "";

  aliens.forEach((alien) => {
    const card = document.createElement("div");
    card.className = "alien-card";

    card.innerHTML = `
      <h3>${alien.name}</h3>
      <div class="alien-meta">
        Species: ${alien.species}
      </div>
    `;

    listContainer.appendChild(card);
  });
}

// ===============================
// COPY BOX
// ===============================
function copyBox(label, value) {
  return `
    <div style="
      background:#0b1020;
      border:1px solid #333;
      padding:8px;
      margin:6px 0;
      border-radius:6px;
      display:flex;
      justify-content:space-between;
      align-items:center;
    ">
      <span>${label}: <strong>${value}</strong></span>
      <button onclick="navigator.clipboard.writeText('${value}')"
        style="padding:4px 8px;border:none;border-radius:4px;background:#22c55e;color:#000;cursor:pointer;">
        Copy
      </button>
    </div>
  `;
}

// ===============================
// IMPORTANCE RANKING
// ===============================
function scoreMatch(alien, query) {
  const q = query.toLowerCase();
  let score = 0;

  if (alien.name.toLowerCase().includes(q)) score += 100;
  if (alien.species.toLowerCase().includes(q)) score += 50;

  return score;
}

// ===============================
// AUTO SEARCH
// ===============================
function handleSearch() {
  const input = document.getElementById("searchInput");
  const resultDiv = document.getElementById("searchResult");
  const query = input.value.trim().toLowerCase();

  if (!query) {
    resultDiv.textContent = "Type an alien name or species to search.";
    return;
  }

  const matches = aliens
    .map(alien => ({ alien, score: scoreMatch(alien, query) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (matches.length === 0) {
    resultDiv.textContent = `No aliens match "${query}".`;
    return;
  }

  let output = `<strong>Matches (${matches.length}):</strong><br/><br/>`;

  matches.forEach(({ alien }) => {
    output += `
      ${copyBox("Name", alien.name)}
      ${copyBox("Species", alien.species)}
      <hr style="border-color:#333;margin:15px 0;">
    `;
  });

  resultDiv.innerHTML = output;
}

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderAlienList();
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", handleSearch);
});
