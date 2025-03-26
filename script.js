const colorModeBtn = document.getElementById("color-mode-btn");
const themeIcon = document.getElementById("theme-icon");

function updateThemeIcon() {
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.src = "/insta/assets/btn-to-light.png";
    } else {
        themeIcon.src = "/insta/assets/btn-to-dark.png";
    }
}

if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    updateThemeIcon();
}

colorModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.src = "/insta/assets/btn-to-light.png";
        localStorage.setItem("dark-mode", "enabled");
    } else {
        themeIcon.src = "/insta/assets/btn-to-dark.png";
        localStorage.setItem("dark-mode", "disabled");
    }
});
