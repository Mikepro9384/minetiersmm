const allData = {
    "Overall": [
        { name: "Marvelz_", pts: 20 }, { name: "GwayPyanGy", pts: 18 }, { name: "GorgeTheGuild", pts: 17 },
        { name: "OliSteph", pts: 16 }, { name: "MikeTheClover", pts: 15 }, { name: "vemoshake", pts: 14 },
        { name: "naomigrief", pts: 13 }, { name: "Mtskillissue", pts: 12 }, { name: "Mikepool", pts: 10 },
        { name: "MashTheSigma", pts: 9 }, { name: "SlideTheBird", pts: 8 }, { name: "BaBaGyi", pts: 7 },
        { name: "xyztheplayer", pts: 6 }, { name: "zen1vs1", pts: 5 }, { name: "coffee", pts: 4 },
    ],
    "Sword": [
        { name: "Marvelz_", tier: "HT1" },{ name: "GwayPyanGy", tier: "HT2" },
        { name: "naomigrief", tier: "LT2" }, { name: "GorgeTheGuild", tier: "HT3" }, { name: "MikeTheClover", tier: "LT3" },
        { name: "Olisteph", tier: "HT3" }, { name: "vemoshake", tier: "HT4" }, { name: "MgLay", tier: "LT4" },
        { name: "slow", tier: "HT5" }, { name: "ryan", tier: "LT5" }
    ],
    "Axe": [
        { name: "Marvelz_", tier: "LT1" }, { name: "GwayPyanGy", tier: "HT2" },
        { name: "GorgeTheGuild", tier: "LT2" }, { name: "vemoshake", tier: "HT3" }, { name: "MikeTheClover", tier: "LT3" },
        { name: "Olisteph", tier: "HT3" }, { name: "naomigrief", tier: "HT4" }, { name: "Mglay", tier: "LT4" },
        { name: "babagyi", tier: "HT5" }, { name: "ryan", tier: "LT5" }
    ],
    "Mace": [
        { name: "Marvelz_", tier: "LT1" }, { name: "GwayPyanGy", tier: "HT2" },
        { name: "GorgeTheGuild", tier: "LT2" }, { name: "ryan", tier: "HT3" }, { name: "slow", tier: "LT3" },
        { name: "MiketheClover", tier: "HT4" }, { name: "vemoshake", tier: "LT4" }, { name: "OliSteph", tier: "HT5" },
        { name: "babagyi", tier: "LT5" }, { name: "Mglay", tier: "HT5" }
    ],
    "Diamond SMP": [
        { name: "Marvelz_", tier: "LT1" }, { name: "GwayPyanGy", tier: "HT2" },
        { name: "GorgeTheGuild", tier: "LT2" }, { name: "MikeTheClover", tier: "HT3" }, { name: "vemoshake", tier: "LT3" },
        { name: "Olisteph", tier: "HT4" }, { name: "naomigrief", tier: "LT4" }, { name: "ryan", tier: "HT5" },
        { name: "babayi", tier: "LT5" }, { name: "slow", tier: "HT5" }
    ],
    "Neth Pot": [
        { name: "Marvelz_", tier: "HT1" },{ name: "GwayPyanGy", tier: "HT2" },
        { name: "GorgeTheGuild", tier: "LT2" }, { name: "MikeTheClover", tier: "HT3" }, { name: "Olisteph", tier: "HT3" },
        { name: "vemoshake", tier: "LT3" }, { name: "naomigrief", tier: "HT4" }, { name: "Mglay", tier: "LT4" },
        { name: "babagyi", tier: "HT5" }, { name: "ryan", tier: "LT5" }
    ],
    "Crystal": [
        { name: "GwayPyanPyi", tier: "LT1" }, { name: "Marvelz_", tier: "HT2" },
        { name: "naomigrief", tier: "LT2" }, { name: "GorgeTheGuild", tier: "HT3" }, { name: "MikeTheClover", tier: "LT3" },
        { name: "OliSteph", tier: "HT4" }, { name: "MgLay", tier: "LT4" }, { name: "ryan", tier: "HT5" },
        { name: "vemoshake", tier: "LT5" }, { name: "slow", tier: "HT5" }
    ]
};

function enterSite() {
    const welcome = document.getElementById('welcome-screen');
    welcome.style.opacity = '0';
    setTimeout(() => {
        welcome.style.display = 'none';
        document.getElementById('main-content').style.display = 'flex';
        switchMode('Overall');
    }, 600);
}

let currentMode = "Overall";

function switchMode(mode) {
    currentMode = mode;
    document.getElementById('mode-title').innerText = mode + " Rankings";
    
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.includes(mode)) btn.classList.add('active');
    });

    renderPlayers();
}

function renderPlayers() {
    const list = document.getElementById('playerList');
    list.innerHTML = "";
    
    const players = allData[currentMode] || allData["Overall"];

    players.forEach((p, index) => {
        const val = currentMode === "Overall" ? p.pts + " Pts" : p.tier;
        const card = document.createElement('div');
        card.className = 'player-card';
        card.style.animation = `slideUp 0.4s ease forwards ${index * 0.05}s`;
        card.onclick = () => openModal(p.name, val, index + 1);
        
        card.innerHTML = `
            <div class="rank-info">
                <span class="num">${index + 1}.</span>
                <img src="https://mc-heads.net/avatar/${p.name}/100" class="av">
                <strong>${p.name}</strong>
            </div>
            <div class="region-text">ASIA / MM</div>
            <div class="tier-box ${val.includes('LT') ? 'lt' : 'ht'}">${val}</div>
        `;
        list.appendChild(card);
    });
}

function openModal(name, tier, rank) {
    document.getElementById('modalAvatar').src = `https://mc-heads.net/avatar/${name}/200`;
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalPosition').innerText = rank + ".";
    document.getElementById('modalCurrentMode').innerText = currentMode.toUpperCase();
    document.getElementById('modalTier').innerText = tier;
    document.getElementById('modalDiscord').href = `https://discord.gg/S8wdVJBp8N`; // Replace with real links if needed
    document.getElementById('playerModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('playerModal').style.display = "none";
}

function filterPlayers() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('player-card');
    for (let card of cards) {
        let name = card.querySelector('strong').innerText.toLowerCase();
        card.style.display = name.includes(input) ? "flex" : "none";
    }
}

function renderPlayers() {
    const list = document.getElementById('playerList');
    list.innerHTML = "";
    
    const players = allData[currentMode] || allData["Overall"];

    players.forEach((p, index) => {
        const val = currentMode === "Overall" ? p.pts + " Pts" : p.tier;
        const card = document.createElement('div');
        
        
        let rankClass = "";
        if (index === 0) rankClass = "rank-1"; // Gold
        else if (index === 1) rankClass = "rank-2"; // Iron
        else if (index === 2) rankClass = "rank-3"; // Bronze
        
        card.className = `player-card ${rankClass}`;
        card.style.animation = `slideUp 0.5s ease forwards ${index * 0.05}s`;
        card.onclick = () => openModal(p.name, val, index + 1);
        
        card.innerHTML = `
            <div class="rank-info">
                <span class="num" style="color: ${index < 3 ? 'white' : ''}">${index + 1}.</span>
                <img src="https://mc-heads.net/avatar/${p.name}/100" class="av">
                <strong>${p.name}</strong>
            </div>
            <div class="region-text">ASIA / MM</div>
            <div class="tier-box ${val.includes('LT') ? 'lt' : 'ht'}">${val}</div>
        `;
        list.appendChild(card);
    });
}

const sortedPlayers = allData["Overall"].sort((a, b) => b.pts - a.pts);

function openModal(name, tier, rank) {
    document.getElementById('modalAvatar').src = `https://mc-heads.net/avatar/${name}/200`;
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalPosition').innerText = rank + ".";
    document.getElementById('modalCurrentMode').innerText = currentMode.toUpperCase();
    document.getElementById('modalTier').innerText = tier;

    
    const discordInvite = "https://discord.gg/nyKYEyDN2U"; 
    document.getElementById('modalDiscordLink').href = discordInvite;

    document.getElementById('playerModal').style.display = "flex";
}