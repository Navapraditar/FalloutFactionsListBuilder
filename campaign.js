let currentZone = null;
let campaignData = JSON.parse(localStorage.getItem("campaignData")) || {}; 

// Function to select a zone
document.querySelectorAll(".zone").forEach(zone => {
    zone.addEventListener("click", function() {
        currentZone = this.id;

        // Show the info box
        document.getElementById("zone-info").style.display = "block";
        document.getElementById("zone-title").textContent = this.textContent;

        // Load saved data
        document.getElementById("control-points").textContent = campaignData[currentZone]?.control || 0;
        document.getElementById("scout-points").textContent = campaignData[currentZone]?.scout || 0;
        document.getElementById("zone-notes").value = campaignData[currentZone]?.notes || "";
    });
});

// Adjust Control Points
function changeControl(amount) {
    if (!currentZone) return;
    let controlElement = document.getElementById("control-points");
    let newControl = Math.max(0, parseInt(controlElement.textContent) + amount);
    controlElement.textContent = newControl;

    saveZoneData();
}

// Adjust Scout Points
function changeScout(amount) {
    if (!currentZone) return;
    let scoutElement = document.getElementById("scout-points");
    let newScout = Math.max(0, parseInt(scoutElement.textContent) + amount);
    scoutElement.textContent = newScout;

    saveZoneData();
}

// Save Notes
function saveNotes() {
    if (!currentZone) return;
    saveZoneData();
    alert("Zone data saved!");
}

// Save zone data to localStorage
function saveZoneData() {
    if (!currentZone) return;
    
    campaignData[currentZone] = {
        control: parseInt(document.getElementById("control-points").textContent),
        scout: parseInt(document.getElementById("scout-points").textContent),
        notes: document.getElementById("zone-notes").value.trim()
    };
    
    localStorage.setItem("campaignData", JSON.stringify(campaignData));
}

// Close Zone Info
function closeInfo() {
    document.getElementById("zone-info").style.display = "none";
}

// Save Campaign State
function saveCampaign() {
    let campaignName = prompt("Enter a name for this campaign:");
    if (!campaignName) return;

    let savedCampaigns = JSON.parse(localStorage.getItem("savedCampaigns")) || {};
    savedCampaigns[campaignName] = campaignData;

    localStorage.setItem("savedCampaigns", JSON.stringify(savedCampaigns));
    loadCampaignList();
}

// Load a Campaign
function loadCampaign(name) {
    let savedCampaigns = JSON.parse(localStorage.getItem("savedCampaigns")) || {};
    if (savedCampaigns[name]) {
        campaignData = savedCampaigns[name];
        localStorage.setItem("campaignData", JSON.stringify(campaignData));
        alert(`Campaign "${name}" loaded!`);
        window.location.reload();  // Reload the page to apply new data
    }
}

// Delete a Campaign
function deleteCampaign(name) {
    let savedCampaigns = JSON.parse(localStorage.getItem("savedCampaigns")) || {};
    delete savedCampaigns[name];

    localStorage.setItem("savedCampaigns", JSON.stringify(savedCampaigns));
    loadCampaignList();
}

// Load Campaign List for Selection
function loadCampaignList() {
    let savedCampaigns = JSON.parse(localStorage.getItem("savedCampaigns")) || {};
    let campaignListDiv = document.getElementById("campaign-list");
    
    campaignListDiv.innerHTML = "<h3>Saved Campaigns:</h3>";
    for (let name in savedCampaigns) {
        let btnLoad = `<button onclick="loadCampaign('${name}')">Load</button>`;
        let btnDelete = `<button onclick="deleteCampaign('${name}')">Delete</button>`;
        campaignListDiv.innerHTML += `<p>${name} ${btnLoad} ${btnDelete}</p>`;
    }
}

// Load campaign list on page load
window.onload = loadCampaignList;

function resetCampaign() {
    // Clear all saved campaign data
    campaignData = {};  
    localStorage.setItem("campaignData", JSON.stringify(campaignData));

    // Reset displayed control and scout points for all zones
    document.querySelectorAll(".zone").forEach(zone => {
        let controlElement = document.getElementById("control-points");
        let scoutElement = document.getElementById("scout-points");

        if (controlElement) controlElement.textContent = "0";
        if (scoutElement) scoutElement.textContent = "0";
    });

    // Clear the zone notes textarea
    document.getElementById("zone-notes").value = "";

    alert("Campaign reset: All control/scout points set to zero and notes cleared.");

    // Reload the page to reflect changes
    window.location.reload();
}

