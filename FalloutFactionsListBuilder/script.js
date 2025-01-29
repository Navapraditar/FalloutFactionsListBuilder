const factions = {
    "The Operators": [
        { name: "Boss", type: "Champion, Leader",
		stats: { 
        S: 5, P: 6, E: 5, C: 6, I: 5, A: 6, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Marksman's Handmade Rifle", points: 44 },
            { name: "Combat Rifle", points: 50 },
            { name: "Plasma Pistol and Shishkebab", points: 51 }
        ] },
        { name: "Made Man", type: "Champion",
		stats: { 
        S: 4, P: 6, E: 4, C: 4, I: 5, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Syringer", points: 31 },
            { name: "Combat Rifle", points: 33 },
            { name: "Combat Shotgun and Frag Grenades", points: 38 },
            { name: "Missle Launcher", points: 48 }
        ] },
        { name: "Psycho", type: "Grunt",
		stats: { 
        S: 4, P: 4, E: 4, C: 3, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "10mm Pistol", points: 15 },
            { name: "Combat Shotgun", points: 17 },
            { name: "10mm Pistol and Hand Weapon", points: 21 },
            { name: "10mm Pistol and Baseball Bat", points: 22 }
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 6, P: 5, E: 5, C: 5, I: 5, A: 6, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Handmade Rifle", points: 23 },
            { name: "Marksman's Handmade Rifle", points: 24 },
            { name: "Combat Rifle", points: 27 }
        ] },
        { name: "Waster", type: "Grunt",
		stats: { 
        S: 6, P: 5, E: 5, C: 5, I: 5, A: 6, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Baseball Bat", points: 10 },
            { name: "10mm Pistol and Hand Weapon", points: 13 },
            { name: "Handmade Rifle", points: 14 }
        ] }
    ],
    "The Pack": [
        { name: "Alpha", type: "Champion, Leader",
		stats: { 
        S: 5, P: 5, E: 5, C: 6, I: 6, A: 5, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sawn-off Shotgun", points: 35 },
            { name: "10mm Pistol and Deathclaw Gauntlet", points: 42 },
            { name: "Automatic Handmade Rifle and Baseball Bat", points: 48 }
        ] },
        { name: "Top Dog", type: "Champion",
		stats: { 
        S: 5, P: 4, E: 4, C: 5, I: 4, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "10mm Pistol and Baseball Bat", points: 23 },
            { name: "Handmade Rifle and Baseball Bat", points: 25 },
            { name: "Sledgehammer and Predator Grenades", points: 33 },
            { name: "Flamer", points: 36 }
        ] },
        { name: "Psycho", type: "Grunt",
		stats: { 
        S: 4, P: 4, E: 4, C: 3, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sledgehammer", points: 14 },
            { name: "Light Handmade Rifle", points: 18 },
            { name: "Pipe Revolver and Baseball Bat", points: 23 },
            { name: "10mm Pistol and Hand Weapon", points: 23 },
            { name: "10mm Pistol and Baseball Bat", points: 24 }
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 4, C: 4, I: 5, A: 3, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sawn-Off Shotgun", points: 18 },
            { name: "Handmade Rifle", points: 23 },
            { name: "Automatic Handmade Rifle", points: 27 }
        ] },
        { name: "Waster", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 3, C: 3, I: 3, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Revolver", points: 12 },
            { name: "10mm Pistol", points: 13 },
            { name: "Pipe Revolver and Hand Weapon", points: 14 },
            { name: "Light Handmade Rifle", points: 16 }
        ] }
    ],
    "The Disciples": [
        { name: "Tormentor", type: "Champion, Leader", 
		stats: { 
        S: 6, P: 5, E: 5, C: 5, I: 5, A: 6, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Handmade Rifle", points: 44 },
            { name: "Precision Hunting Rifle", points: 45 },
            { name: ".44 Pistol and Machete", points: 47 }
        ] },
        { name: "Butcher", type: "Champion",
		stats: { 
        S: 4, P: 5, E: 4, C: 4, I: 5, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
		weapons: [
            { name: "Handmade Rifle", points: 30 },
            { name: "Syringer", points: 28 },
            { name: "Marksman's Handmade Rifle", points: 30 },
            { name: "10mm Pistol and Nuka-Grenade", points: 40 }
        ] },
        { name: "Psycho", type: "Grunt",
		stats: { 
        S: 5, P: 3, E: 4, C: 4, I: 3, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Short Hunting Rifle", points: 15 },
            { name: "Light Handmade Rifle", points: 20 },
            { name: "Pipe Revolver and Hand Weapon", points: 21 },
            { name: "10mm Pistol and Machete", points: 21 }
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 4, P: 4, E: 4, C: 3, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Hunting Rifle", points: 21 },
            { name: "Handmade Rifle", points: 23 },
            { name: "Ranger's Hunting Rifle", points: 23 }
        ] },
        { name: "Waster", type: "Grunt",
		stats: { 
        S: 4, P: 3, E: 3, C: 3, I: 3, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Short Hunting Rifle", points: 10 },
            { name: "Pipe Revolver and Hand Weapon", points: 14 },
            { name: "10mm Pistol and Hand Weapon", points: 15 }
        ] }
    ]
};

// Example data for different factions
const weaponData = {
    "The Operators": [
        { weapon: "Baseball Bat", type: "Melee", test: "3S", traits: "WindUp", effect: "Suppress (1)" },
		{ weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
		{ weapon: "Shishkebab", type: "Melee", test: "4S", traits: "-", effect: "Ignite(2)" },
		{ weapon: "10mm Pistol", type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-" },
		{ weapon: "Plasma Pistol", type: "Pistol(12\")", test: "4A", traits: "CQB Fast", effect: "Meltdown" },
		{ weapon: "Combat Rifle", type: "Rifle(24\")", test: "4P", traits: "Fast", effect: "Maim" },
		{ weapon: "Combat Shotgun", type: "Rifle(10\")", test: "4P", traits: "Storm(1)", effect: "Maim" },
		{ weapon: "Handmade Rifle", type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
		{ weapon: "Marksman's Handmade Rifle", type: "Rifle(30\")", test: "2P", traits: "Aim(+3)", effect: "Suppress(3)" },
		{ weapon: "Syringer", type: "Rifle(16\")", test: "2P", traits: "Aim(+2)", effect: "Poison(3)" },
		{ weapon: "Missle Launcher", type: "Heavy(26\")", test: "5S", traits: "Area(3\") Slow", effect: "Maim" },
		{ weapon: "Frag Grenades", type: "Grenade(10\")", test: "3A", traits: "Area(1\") CQB", effect: "Suppress(2)" }

    ],
    "The Pack": [
        { weapon: "Baseball Bat", type: "Melee", test: "3S", traits: "WindUp", effect: "Suppress (1)" },
		{ weapon: "Deathclaw Gauntlet", type: "Melee", test: "5S", traits: "WindUp", effect: "Pierce" },
		{ weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
		{ weapon: "Sledgehammer", type: "Melee", test: "4S", traits: "Unwieldy(5) WindUp", effect: "Maim" },
		{ weapon: "10mm Pistol", type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-" },
		{ weapon: "Pipe Revolver", type: "Pistol(12\")", test: "3A", traits: "Aim(1\") CQB", effect: "Pierce" },
		{ weapon: "Sawn-off Shotgun", type: "Rifle(8\")", test: "4P", traits: "CQB Storm(2)", effect: "Maim" },
		{ weapon: "Light Handmade Rifle", type: "Rifle(12\")", test: "3P", traits: "Bladed Fast", effect: "Suppress(1)" },
		{ weapon: "Handmade Rifle", type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
		{ weapon: "Automatic Handmade Rifle", type: "Rifle(14\")", test: "3P", traits: "Fast Storm(2)", effect: "Suppress(2)" },
		{ weapon: "Flamer", type: "Heavy(6\")", test: "4S", traits: "Area(2\") CQB", effect: "Ignite(3)" },
		{ weapon: "Predator Grenades", type: "Grenade(8\")", test: "4A", traits: "Area(3\") CQB", effect: "Maim" }

    ],
    "The Disciples": [
        { weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
        { weapon: "Machete", type: "Melee", test: "4S", traits: "-", effect: "Maim" },
		{ weapon: ".44 Pistol", type: "Pistol(14\")", test: "4A", traits: "Aim(+1)", effect: "Pierce" },
		{ weapon: "10mm Pistol", type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-" },
		{ weapon: "Pipe Revolver", type: "Pistol(12\")", test: "3A", traits: "Aim(1\") CQB", effect: "Pierce" },
		{ weapon: "Handmade Rifle", type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
		{ weapon: "Hunting Rifle", type: "Rifle(22\")", test: "3P", traits: "Aim(+1)", effect: "Pierce" },
		{ weapon: "Light Handmade Rifle", type: "Rifle(12\")", test: "3P", traits: "Bladed Fast", effect: "Suppress(1)" },
		{ weapon: "Marksman's Handmade Rifle", type: "Rifle(30\")", test: "2P", traits: "Aim(+3)", effect: "Suppress(3)" },
		{ weapon: "Precision Hunting Rifle", type: "Rifle(24\")", test: "3P", traits: "Aim(+2)", effect: "Pierce" },
		{ weapon: "Ranger's Hunting Rifle", type: "Rifle(18\")", test: "3P", traits: "Aim(+1) Bladed", effect: "Pierce" },
		{ weapon: "Short Hunting Rifle", type: "Rifle(14\")", test: "3P", traits: "-", effect: "Pierce" },
		{ weapon: "Nuka Grenade", type: "Grenade(8\")", test: "5A", traits: "Area(2\") CQB Irradiate OneAndDone", effect: "Maim" }

    ]
};

// Function to update the table based on selected faction
function updateWeaponTable() {
    const faction = document.getElementById('faction-select').value;
    const tableBody = document.querySelector('#weaponsTable tbody');
    tableBody.innerHTML = '';  // Clear existing rows

    if (faction && weaponData[faction]) {
        weaponData[faction].forEach(weapon => {
            const row = document.createElement('tr');
            
            // Add cells to the row for each weapon property
            Object.values(weapon).forEach(val => {
                const cell = document.createElement('td');
                cell.textContent = val;
                row.appendChild(cell);
            });
            
            // Append the row to the table body
            tableBody.appendChild(row);
        });
    }
}

// Populate faction options dynamically (You can adjust this if needed)
window.onload = () => {
    const factionSelect = document.getElementById('faction-select');
    const factions = ['The Operators', 'The Pack', 'The Disciples'];
    
    factions.forEach(faction => {
        const option = document.createElement('option');
        option.value = faction;
        option.textContent = faction; // No need to modify capitalization as they are already capitalized
        factionSelect.appendChild(option);
    });
};

// Add Notes container to each unit
const addNotesToUnit = (unitId) => {
    const unitContainer = document.getElementById(`unit-container-${unitId}`); // Assuming each unit has a unique ID container
    const notesContainer = document.createElement('div');
    notesContainer.innerHTML = `
        <label for="unit-notes-${unitId}">Add Custom Notes:</label>
        <textarea id="unit-notes-${unitId}" rows="4" cols="50"></textarea>
    `;
    unitContainer.appendChild(notesContainer);
};




let selectedFaction = null;
let selectedUnit = null;
let selectedWeapon = null;
let totalPoints = 0;
let unitPoints = 0; // Keep track of unit points separately
let chemPoints = 0; // Keep track of chem points separately
let hasLeader = false;

const factionSelect = document.getElementById("faction-select");
const unitSelect = document.getElementById("unit-select");
const weaponSelect = document.getElementById("weapon-select");
const unitList = document.getElementById("unit-list");
const totalPointsDisplay = document.getElementById("total-points");
const stepUnit = document.getElementById("step-unit");
const stepWeapon = document.getElementById("step-weapon");
const stepAdd = document.getElementById("step-add");
const resetButton = document.getElementById("reset-button");

// Function to update total points display
function updateTotalPoints() {
    document.getElementById("total-points").textContent = totalPoints;
}

// Chem Points Logic
document.querySelectorAll(".chem-item").forEach(item => {
    const decreaseBtn = item.querySelector(".decrease");
    const increaseBtn = item.querySelector(".increase");
    const quantityInput = item.querySelector(".chem-quantity");
    const chemValue = parseInt(item.dataset.points, 10);

    increaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value, 10);
        quantityInput.value = currentValue + 1;
        chemPoints += chemValue; // Add chem points
        totalPoints = unitPoints + chemPoints; // Recalculate total points
        updateTotalPoints();
    });

    decreaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > 0) {
            quantityInput.value = currentValue - 1;
            chemPoints -= chemValue; // Subtract chem points
            totalPoints = unitPoints + chemPoints; // Recalculate total points
            updateTotalPoints();
        }
    });
});

factionSelect.addEventListener("change", () => {
    selectedFaction = factionSelect.value;
    hasLeader = false; // Reset leader restriction when switching factions

    // Reset points and unit list when changing factions
    unitPoints = 0; // Reset unit points only
    unitList.innerHTML = ""; // Clear the current unit list
    chemPoints = 0; // Reset chem points to avoid confusion with previous faction data
	    // Reset all chem quantities to "0"
    document.querySelectorAll(".chem-quantity").forEach(input => {
        input.value = "0"; // Reset all chem quantities to 0
    });

    // Now recalculate total points after reset
    totalPoints = unitPoints + chemPoints;
    updateTotalPoints();

    if (selectedFaction) {
        // Update the unit list header with selected faction
        unitList.innerHTML = `<h3>${selectedFaction}</h3>`;
        
        // Populate Units
        unitSelect.innerHTML = '<option value="">-- Select Unit --</option>';
        factions[selectedFaction].forEach(unit => {
            const option = document.createElement("option");
            option.value = unit.name;
            option.textContent = `${unit.name} (${unit.type})`;
            unitSelect.appendChild(option);
        });
        stepUnit.style.display = "block";
    } else {
        stepUnit.style.display = "none";
        stepWeapon.style.display = "none";
        stepAdd.style.display = "none";
    }

    // Reset the unit and weapon selections
    unitSelect.value = "";
    weaponSelect.value = "";
    stepWeapon.style.display = "none";
    stepAdd.style.display = "none";


});



unitSelect.addEventListener("change", () => {
    selectedUnit = unitSelect.value;
    const selectedUnitData = factions[selectedFaction].find(
        unit => unit.name === selectedUnit
    );

    if (selectedUnitData) {
        const isLeader = selectedUnitData.type.includes("Leader");
        if (isLeader && hasLeader) {
            alert("You can only have one Leader in your list!");
            unitSelect.value = ""; // Reset selection
            selectedUnit = null;
            return;
        }

        // Populate Weapon Sets
        weaponSelect.innerHTML = '<option value="">-- Select Weapon Set --</option>';
        selectedUnitData.weapons.forEach(weapon => {
            const option = document.createElement("option");
            option.value = weapon.points; // Store weapon points as value
            option.textContent = `${weapon.name} (${weapon.points} points)`;
            weaponSelect.appendChild(option);
        });
        stepWeapon.style.display = "block";

        // Optionally, you can reset the selected weapon in case the user changes the unit
        weaponSelect.value = ""; // Reset weapon selection
        stepAdd.style.display = "none"; // Hide the add button until weapon is selected
    } else {
        stepWeapon.style.display = "none";
        stepAdd.style.display = "none";
    }
});

weaponSelect.addEventListener("change", () => {
    selectedWeapon = weaponSelect.value;
    
    if (selectedWeapon) {
        // Add selected weapon points to unitPoints
        const weaponPoints = parseInt(selectedWeapon, 10); // Convert weapon points to integer
        unitPoints += weaponPoints; // Add the new weapon points to unitPoints

    } else {
        unitPoints = 0; // Reset unit points if no weapon selected
    }

    stepAdd.style.display = selectedWeapon ? "block" : "none"; // Show or hide the add button

    // Update total points if needed (assuming updateTotalPoints handles the display of total points)
    updateTotalPoints();
});





document.getElementById("add-unit").addEventListener("click", () => {
    if (selectedFaction && selectedUnit && selectedWeapon) {
        const selectedUnitData = factions[selectedFaction].find(
            unit => unit.name === selectedUnit
        );
        const isLeader = selectedUnitData.type.includes("Leader");
        if (isLeader) hasLeader = true; // Mark leader as selected

        const li = document.createElement("li");

        // Create formatted text for unit name and type
        const unitName = document.createElement("span");
        unitName.style.fontWeight = "bold"; // Set the unit name to bold
        unitName.textContent = `${selectedUnit} (${selectedUnitData.type})`;

        const weaponText = `${weaponSelect.options[weaponSelect.selectedIndex].text}`;

        // Construct the text for the list item
        li.appendChild(unitName);
        li.appendChild(document.createTextNode(": "));
        li.appendChild(document.createTextNode(`${weaponText}`));

        // Create a table for the SPECIALW stats
        const statsTable = document.createElement("table");
        statsTable.style.marginTop = "10px"; // Add space above the stats table
        statsTable.style.borderCollapse = "collapse";
        statsTable.style.width = "100%";
        
        const tableHeader = document.createElement("thead");
        tableHeader.innerHTML = `
            <tr>
                <th>S</th>
                <th>P</th>
                <th>E</th>
                <th>C</th>
                <th>I</th>
                <th>A</th>
                <th>L</th>
                <th>(W)</th>
            </tr>
        `;
        statsTable.appendChild(tableHeader);

        const tableBody = document.createElement("tbody");
        const statsRow = document.createElement("tr");
        statsRow.innerHTML = `
            <td>${selectedUnitData.stats.S}</td>
            <td>${selectedUnitData.stats.P}</td>
            <td>${selectedUnitData.stats.E}</td>
            <td>${selectedUnitData.stats.C}</td>
            <td>${selectedUnitData.stats.I}</td>
            <td>${selectedUnitData.stats.A}</td>
            <td>${selectedUnitData.stats.L}</td>
            <td>${selectedUnitData.stats.W}</td>
        `;
        tableBody.appendChild(statsRow);
        statsTable.appendChild(tableBody);

        li.appendChild(statsTable);

        // Create remove button for the unit
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            unitList.removeChild(li);
            totalPoints -= selectedWeapon;
            totalPointsDisplay.textContent = totalPoints;
            if (isLeader) hasLeader = false; // Allow adding a leader again
        });

        li.appendChild(removeButton);
        unitList.appendChild(li);

        // Update total points
		totalPoints += parseInt(selectedWeapon) + chemPoints;
		totalPointsDisplay.textContent = totalPoints;


        // Reset selections
        unitSelect.value = "";
        weaponSelect.value = "";
        stepWeapon.style.display = "none";
        stepAdd.style.display = "none";
    }
});




// Reset Button
resetButton.addEventListener("click", () => {
    // Reset all chem quantities to "0"
    document.querySelectorAll(".chem-quantity").forEach(input => {
        input.value = "0"; // Reset all chem quantities to 0
    });

    // Reload the page to reset everything else (like unit points and unit list)
    location.reload();
});

