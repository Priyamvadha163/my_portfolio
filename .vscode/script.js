document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if dark mode was enabled before
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    // Toggle dark mode
    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });

    console.log("Portfolio Loaded Successfully!");
});
