const allData = {
  Overall: [
    { name: "DRFOXCraft", pts: 20},
    { name: "Marvelz_", pts: 19 },
    { name: "GwayPyanGy", pts: 18 },
    { name: "GorgeTheGuild", pts: 17 },
    { name: "OliSteph", pts: 16 },
    { name: "MikeTheClover", pts: 15 },
    { name: "vemoshake", pts: 14 },
    { name: "naomigrief", pts: 13 },
    { name: "Mtskillissue", pts: 12 },
    { name: "Mikepool", pts: 10 },
    { name: "MashTheSigma", pts: 9 },
    { name: "SlideTheBird", pts: 8 },
    { name: "BaBaGyi", pts: 7 },
    { name: "xyztheplayer", pts: 6 },
    { name: "zen1vs1", pts: 5 },
    { name: "coffee", pts: 4 }
  ],

  Sword: [
    { name: "DRFOXCraft", tier: "HT1"},
    { name: "Marvelz_", tier: "LT1" },
    { name: "GwayPyanGy", tier: "HT2" },
    { name: "naomigrief", tier: "LT2" },
    { name: "GorgeTheGuild", tier: "HT3" },
    { name: "MikeTheClover", tier: "LT3" },
    { name: "Olisteph", tier: "HT3" },
    { name: "vemoshake", tier: "HT4" },
    { name: "MgLay", tier: "LT4" },
    { name: "slow", tier: "HT5" },
    { name: "ryan", tier: "LT5" }
  ],

  Axe: [
    { name: "Marvelz_", tier: "LT1" },
    { name: "GwayPyanGy", tier: "HT2" },
    { name: "GorgeTheGuild", tier: "LT2" },
    { name: "vemoshake", tier: "HT3" },
    { name: "MikeTheClover", tier: "LT3" },
    { name: "Olisteph", tier: "HT3" },
    { name: "naomigrief", tier: "HT4" },
    { name: "Mglay", tier: "LT4" },
    { name: "babagyi", tier: "HT5" },
    { name: "ryan", tier: "LT5" },
    { name: "DRFOXCraft", tier: "-"},
  ],

  Mace: [
    { name: "Marvelz_", tier: "HT1" },
    { name: "GwayPyanGy", tier: "LT1" },
    { name: "DRFOXCraft", tier: "HT2"},
    { name: "GorgeTheGuild", tier: "LT2" },
    { name: "ryan", tier: "HT3" },
    { name: "slow", tier: "LT3" },
    { name: "MiketheClover", tier: "HT4" },
    { name: "vemoshake", tier: "LT4" },
    { name: "OliSteph", tier: "HT5" },
    { name: "babagyi", tier: "LT5" },
    { name: "Mglay", tier: "HT5" }
  ],

  "Diamond SMP": [
    { name: "DRFOXCraft", tier: "HT1"},
    { name: "Marvelz_", tier: "LT1" },
    { name: "GwayPyanGy", tier: "HT2" },
    { name: "GorgeTheGuild", tier: "LT2" },
    { name: "MikeTheClover", tier: "HT3" },
    { name: "vemoshake", tier: "LT3" },
    { name: "Olisteph", tier: "HT4" },
    { name: "naomigrief", tier: "LT4" },
    { name: "ryan", tier: "HT5" },
    { name: "babayi", tier: "LT5" },
    { name: "slow", tier: "HT5" }
  ],

  "Neth Pot": [
    { name: "Marvelz_", tier: "HT1" },
    { name: "DRFOXCraft", tier: "LT1"},
    { name: "GwayPyanGy", tier: "HT2" },
    { name: "GorgeTheGuild", tier: "LT2" },
    { name: "MikeTheClover", tier: "HT3" },
    { name: "Olisteph", tier: "HT3" },
    { name: "vemoshake", tier: "LT3" },
    { name: "naomigrief", tier: "HT4" },
    { name: "Mglay", tier: "LT4" },
    { name: "babagyi", tier: "HT5" },
    { name: "ryan", tier: "LT5" }
  ],

  Crystal: [
    { name: "DRFOXCraft", tier: "HT1"},
    { name: "GwayPyanGy", tier: "LT1" },
    { name: "Marvelz_", tier: "HT2" },
    { name: "naomigrief", tier: "LT2" },
    { name: "GorgeTheGuild", tier: "HT3" },
    { name: "MikeTheClover", tier: "LT3" },
    { name: "OliSteph", tier: "HT4" },
    { name: "MgLay", tier: "LT4" },
    { name: "ryan", tier: "HT5" },
    { name: "vemoshake", tier: "LT5" },
    { name: "slow", tier: "HT5" }
  ]
};

const modeTitle = document.getElementById("mode-title");
const playerList = document.getElementById("playerList");
const searchInput = document.getElementById("searchInput");
const playerModal = document.getElementById("playerModal");
const sidebar = document.getElementById("sidebar");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");

let currentMode = "Overall";

function enterSite() {
  const welcome = document.getElementById("welcome-screen");
  welcome.style.opacity = "0";

  setTimeout(() => {
    welcome.style.display = "none";
    document.getElementById("main-content").style.display = "flex";
    switchMode("Overall");
  }, 600);
}

function getModeValue(player) {
  return currentMode === "Overall" ? `${player.pts} Pts` : player.tier;
}

function getTierClass(value) {
  if (value.includes("Pts")) return "pts";
  if (value.includes("LT")) return "lt";
  return "ht";
}

function updateActiveNav(mode) {
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.textContent.toLowerCase().includes(mode.toLowerCase())) {
      btn.classList.add("active");
    }
  });
}

function switchMode(mode) {
  currentMode = mode;
  modeTitle.textContent = `${mode} Rankings`;
  updateActiveNav(mode);
  renderPlayers();

  if (window.innerWidth <= 980) {
    sidebar.classList.remove("active");
  }
}

function renderPlayers() {
  const players = allData[currentMode] || [];
  const query = searchInput.value.trim().toLowerCase();

  playerList.innerHTML = "";

  const filtered = players.filter((player) =>
    player.name.toLowerCase().includes(query)
  );

  if (!filtered.length) {
    playerList.innerHTML = `<div class="empty-state">No players found.</div>`;
    return;
  }

  filtered.forEach((player, index) => {
    const value = getModeValue(player);
    const tierClass = getTierClass(value);

    let rankClass = "";
    if (index === 0) rankClass = "rank-1";
    else if (index === 1) rankClass = "rank-2";
    else if (index === 2) rankClass = "rank-3";

    const card = document.createElement("div");
    card.className = `player-card ${rankClass}`;
    card.style.animation = `cardIn 0.45s ease forwards ${index * 0.05}s`;

    card.innerHTML = `
      <div class="num">${index + 1}.</div>

      <div class="rank-info">
        <img src="https://mc-heads.net/avatar/${player.name}/100" class="av" alt="${player.name}">
        <div class="name-wrap">
          <strong>${player.name}</strong>
          <div class="subtext">ASIA / MM Player</div>
        </div>
      </div>

      <div class="region-text">ASIA / MM</div>

      <div class="tier-box ${tierClass}">${value}</div>
    `;

    card.addEventListener("click", () => {
      openModal(player.name, value, index + 1);
      card.classList.add("click-pop");
      setTimeout(() => card.classList.remove("click-pop"), 340);
    });

    playerList.appendChild(card);
  });
}

function openModal(name, value, rank) {
  document.getElementById("modalAvatar").src = `https://mc-heads.net/avatar/${name}/200`;
  document.getElementById("modalName").textContent = name;
  document.getElementById("modalPosition").textContent = `${rank}.`;
  document.getElementById("modalCurrentMode").textContent = currentMode.toUpperCase();
  document.getElementById("modalTier").textContent = value;
  document.getElementById("modalDiscord").href = "https://discord.gg/4bQaeDNmj6";

  playerModal.style.display = "flex";
}

function closeModal() {
  playerModal.style.display = "none";
}

function filterPlayers() {
  renderPlayers();
}

mobileMenuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  mobileMenuBtn.classList.add("click-pop");
  setTimeout(() => mobileMenuBtn.classList.remove("click-pop"), 340);
});

playerModal.addEventListener("click", (e) => {
  if (e.target === playerModal) {
    closeModal();
  }
});

document.querySelectorAll(".click-animate").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.add("click-pop");
    setTimeout(() => this.classList.remove("click-pop"), 340);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

const style = document.createElement("style");
style.innerHTML = `
  @keyframes cardIn {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

console.log("new update");