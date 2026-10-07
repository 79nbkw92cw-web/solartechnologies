function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(pageId)
            .classList.remove("hidden");
}


// LOGIN
document.getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;

        if (username && password) {

            showPage("dashboardPage");

        } else {

            alert("Please enter your username and password.");
        }
    });


// LOGOUT
function logout() {

    showPage("loginPage");

    document.getElementById("loginForm").reset();
}


// ADD EQUIPMENT
function addEquipment() {

    const name =
        document.getElementById("equipmentName").value;

    if (!name) {

        alert("Please enter the equipment name.");

        return;
    }

    alert(
        "Equipment added successfully!"
    );

    showPage("dashboardPage");
}


// GENERATE REPORT
function generateReport() {

    alert(
        "Inventory report generated successfully!"
    );
}