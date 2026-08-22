// ===============================
// Ben 10 Alien Data
// ===============================
const aliens = [
  {
    name: "Heatblast",
    species: "Pyronite",
    homeworld: "Pyros",
    description:
      "A fire-based alien capable of generating and manipulating intense flames and heat.",
    aliases: ["Pyronite"]
  },
  {
    name: "Four Arms",
    species: "Tetramand",
    homeworld: "Khoros",
    description:
      "A four-armed powerhouse with immense strength and durability.",
    aliases: []
  },
  {
    name: "XLR8",
    species: "Kineceleran",
    homeworld: "Kinet",
    description:
      "A super-speed alien able to move at incredible velocities.",
    aliases: []
  },
  {
    name: "Diamondhead",
    species: "Petrosapien",
    homeworld: "Petropia",
    description:
      "A crystalline alien who can form and manipulate durable crystal structures.",
    aliases: []
  }
];

// ===============================
// Search Map (name, species, aliases)
// ===============================
const searchMap = new Map();

aliens.forEach((alien) => {
  searchMap.set(alien.name.toLowerCase(), alien);
  searchMap.set(alien.species.toLowerCase(), alien);
  alien.aliases.forEach((alias) => {
    searchMap.set(alias.toLowerCase(), alien);
  });
});

// ===============================
// Homepage Alien List
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
        ${alien.homeworld ? " • Homeworld: " + alien.homeworld : ""}
      </div>
      <div class="alien-description">${alien.description}</div>
    `;

    listContainer.appendChild(card);
  });
}

// ===============================
// Copy Box Generator
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
// Search Handler
// ===============================
function handleSearch() {
  const input = document.getElementById("searchInput");
  const resultDiv = document.getElementById("searchResult");
  const query = input.value.trim().toLowerCase();

  if (!query) {
    resultDiv.textContent = "Type an alien name or species to search.";
    return;
  }

  const alien = searchMap.get(query);

  if (!alien) {
    resultDiv.textContent = `No alien found for "${query}". Try Heatblast or Pyronite.`;
    return;
  }

  // Build alias boxes
  const aliasBoxes = alien.aliases
    .map(alias => copyBox("Alias", alias))
    .join("");

  // Final output
  resultDiv.innerHTML = `
    <strong>Result:</strong><br/><br/>
    ${copyBox("Name", alien.name)}
    ${copyBox("Species", alien.species)}
    ${aliasBoxes}
    <div style="margin-top:10px;">
      Homeworld: ${alien.homeworld || "Unknown"}<br/><br/>
      ${alien.description}
    </div>
  `;
}

// ===============================
// Init
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderAlienList();

  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");

  searchButton.addEventListener("click", handleSearch);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });
});
