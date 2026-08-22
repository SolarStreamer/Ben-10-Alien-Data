console.log("MC Ben 10 Classic Loaded");

// FULL ALIEN LIST (All Aliens)
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
  { name: "Feedback", species: "Conductoid" }
];

// MC BEN 10 CLASSIC (your 22)
const mcClassic = [...allAliens];

// Render Alien List
function renderAlienList(list) {
  const container = document.getElementById("alienList");
  container.innerHTML = "";

  list.forEach(alien => {
    const card = document.createElement("div");
    card.className = "alien-card";

    card.innerHTML = `
      <h3>${alien.name}</h3>
      <div class="alien-meta">Species: ${alien.species}</div>
    `;

    container.appendChild(card);
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

  const matches = allAliens.filter(a =>
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

// Category Filter
document.getElementById("categorySelect").addEventListener("change", (e) => {
  const value = e.target.value;

  if (value === "all") {
    renderAlienList(allAliens);
  } else if (value === "mcclassic") {
    renderAlienList(mcClassic);
  }
});

// Loading Screen Fade
window.addEventListener("load", () => {
  const loader = document.getElementById("omniLoading");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 1000);
});

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderAlienList(allAliens);
  document.getElementById("searchBtn").addEventListener("click", handleSearch);
});
