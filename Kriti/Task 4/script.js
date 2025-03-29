const apiURL = "https://api.restful-api.dev/objects";
const objectList = document.getElementById("objectList");
const searchInput = document.getElementById("searchInput");

let allObjects = [];
async function fetchObjects() {
    try {
        const response = await fetch(apiURL);
        allObjects = await response.json(); 
        displayObjects(allObjects); 
    } catch (error) {
        console.error("Error fetching objects:", error);
    }
}

// Display Objects
function displayObjects(objects) {
    objectList.innerHTML = "";
    objects.forEach(obj => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${obj.name}</strong> 
            <br> Color: ${obj.data?.color || "N/A"}
            <br> Capacity: ${obj.data?.capacity || "N/A"}
            <br>
            <button onclick="updateObject('${obj.id}')">✏️ Edit</button>
            <button onclick="deleteObject('${obj.id}')">🗑️ Delete</button>
        `;
        objectList.appendChild(li);
    });
}

// Add New Object (POST)
async function addObject() {
    const newObject = {
        name: document.getElementById("nameInput").value,
        data: {
            color: document.getElementById("colorInput").value,
            capacity: document.getElementById("capacityInput").value
        }
    };

    try {
        const response = await fetch(apiURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newObject)
        });
        const data = await response.json();
        console.log("Object Added:", data);
        fetchObjects(); 
    } catch (error) {
        console.error("Error adding object:", error);
    }
}

// Update Object (PUT)
async function updateObject(id) {
    const updatedObject = {
        name: prompt("Enter new name:"),
        data: {
            color: prompt("Enter new color:"),
            capacity: prompt("Enter new capacity:")
        }
    };

    try {
        const response = await fetch(`${apiURL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedObject)
        });
        const data = await response.json();
        console.log("Object Updated:", data);
        fetchObjects(); 
    } catch (error) {
        console.error("Error updating object:", error);
    }
}

// Delete Object (DELETE)
async function deleteObject(id) {
    try {
        await fetch(`${apiURL}/${id}`, { method: "DELETE" });
        console.log(`Object ${id} Deleted`);
        fetchObjects(); 
    } catch (error) {
        console.error("Error deleting object:", error);
    }
}

// Search Objects
searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    const filteredObjects = allObjects.filter(obj =>
        obj.name.toLowerCase().includes(searchText)
    );
    displayObjects(filteredObjects); // Show filtered data
});

// Load initial objects
fetchObjects();
