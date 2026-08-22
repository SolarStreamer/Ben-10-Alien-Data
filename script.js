console.log("OMNIWATCH ONLINE");

// =======================================================
// ALIEN LIST (names only for silhouette rotation + database)
// =======================================================
const aliens = [
  "Heatblast", "Wildmutt", "Diamondhead", "XLR8", "Grey Matter",
  "Four Arms", "Stinkfly", "Ripjaws", "Upgrade", "Ghostfreak",
  "Cannonbolt", "Wildvine", "Blitzwolfer", "Snare-oh", "Frankenstrike",
  "Upchuck", "Ditto", "Eye Guy", "Way Big", "Spitter",
  "Buzzshock", "Arctiguana", "Swampfire", "Echo Echo", "Humungousaur",
  "Jetray", "Big Chill", "Chromastone", "Brainstorm", "Spidermonkey",
  "Goop", "Alien X", "Lodestar", "Rath", "Nanomech",
  "Water Hazard", "Ampfibian", "Armodrillo", "Terraspin", "NRG",
  "Fasttrack", "Clockwork", "Chamalien", "Eatle", "Juryrigg",
  "Shocksquatch", "Feedback", "Bloxx", "Gravattack", "Crashhopper",
  "Ball Weevil", "Walkatrout", "Pesky Dust", "Mole-Stache", "The Worst",
  "Kickin Hawk", "Toepick", "Astrodactyl", "Bullfrag", "Atomix",
  "Gutrot", "Whampire"
];

// =======================================================
// OMNIWATCH LOADING SCREEN (rotating silhouettes)
// =======================================================
const omniSlots = [
  document.querySelector(".omniSlot1"),
  document.querySelector(".omniSlot2"),
  document.querySelector(".omniSlot3"),
  document.querySelector(".omniSlot4")
];

let omniIndex = 0;

// Rotate silhouettes every 400ms
function rotateOmniwatch() {
  omniSlots.forEach((slot, i) => {
    const alienName = aliens[(omniIndex + i) % aliens.length];
    slot.textContent = alienName;
  });
  omniIndex = (omniIndex + 1) % aliens.length;
}

setInterval(rotateOmniwatch, 400);

// Fade out loading screen when page is ready
window.addEventListener("load", () => {
  const loader = document.getElementById("omniLoading");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 1000);
});

// =======================================================
// ALIEN DATABASE RENDERING
// =======================================================
function renderAlienList() {
  const list = document.getElementById("alienList");
  list.innerHTML = "";

  aliens.forEach(name => {
    const card = document.createElement("div");
    card.className = "alien-card";
    card.innerHTML = `
      <h3>${name}</h3>
      <div class="alien-meta">Species: Unknown</div>
    `;
    list.appendChild(card);
  });
}

// =======================================================
// SEARCH SYSTEM
// =======================================================
function handleSearch() {
  const input = document.getElementById("searchInput");
  const result = document.getElementById("searchResult");
  const query = input.value.trim().toLowerCase();

  if (!query) {
    result.textContent = "Type an alien name or species to search.";
    return;
  }

  const matches = aliens.filter(a => a.toLowerCase().includes(query));

  if (matches.length === 0) {
    result.textContent = `No aliens match "${query}".`;
    return;
  }

  let output = `<strong>Matches (${matches.length}):</strong><br><br>`;
  matches.forEach(name => {
    output += `
      <div style="margin-bottom:15px;">
        <div><strong>Name:</strong> ${name}</div>
        <div><strong>Species:</strong> Unknown</div>
      </div>
      <hr>
    `;
  });

  result.innerHTML = output;
}

// =======================================================
// OMNITRIX MODEL FILTER (visual only)
// =======================================================
document.getElementById("omnitrixFilter").addEventListener("change", (e) => {
  const model = e.target.value;

  const body = document.body;

  if (model === "prototype") {
    body.style.setProperty("--omni-color", "#00ff66");
  }
  if (model === "classic") {
    body.style.setProperty("--omni-color", "#33ff33");
  }
  if (model === "ultimatrix") {
    body.style.setProperty("--omni-color", "#00ccff");
  }
  if (model === "omniverse") {
    body.style.setProperty("--omni-color", "#88ff00");
  }
});

// =======================================================
// OMNITRIX CODE INPUT SYSTEM
// =======================================================
let code = "";

const codeDisplay = document.getElementById("codeDisplay");
const codeStatus = document.getElementById("codeStatus");

document.getElementById("btnL").onclick = () => {
  code += "L";
  updateCode();
};

document.getElementById("btnR").onclick = () => {
  code += "R";
  updateCode();
};

document.getElementById("btnClear").onclick = () => {
  code = "";
  updateCode();
};

function updateCode() {
  codeDisplay.textContent = "Code: " + code;

  // MASTER CONTROL
  if (code === "RRLLRRLLRL") {
    codeStatus.textContent = "MASTER CONTROL ACTIVATED";
    flashGreen();
  }

  // RANDOMISER MODE
  if (code === "RLRLRLRL") {
    codeStatus.textContent = "RANDOMISER MODE ENABLED";
    randomAlienFlash();
  }

  // SELF DESTRUCT (visual blank screen)
  if (code === "RRRR") {
    activateSelfDestruct();
  }
}

// =======================================================
// SELF DESTRUCT SCREEN
// =======================================================
function activateSelfDestruct() {
  const sd = document.getElementById("selfDestructScreen");
  sd.style.display = "flex";
  sd.style.opacity = "1";
}

// =======================================================
// VISUAL EFFECTS
// =======================================================
function flashGreen() {
  document.body.style.transition = "0.2s";
  document.body.style.background = "#003300";
  setTimeout(() => {
    document.body.style.background = "#0a0f0a";
  }, 300);
}

function randomAlienFlash() {
  const result = document.getElementById("searchResult");
  const randomAlien = aliens[Math.floor(Math.random() * aliens.length)];
  result.innerHTML = `<strong>Random Alien:</strong> ${randomAlien}`;
}

// =======================================================
// INIT
// =======================================================
document.addEventListener("DOMContentLoaded", () => {
  renderAlienList();
  document.getElementById("searchInput").addEventListener("input", handleSearch);
});
