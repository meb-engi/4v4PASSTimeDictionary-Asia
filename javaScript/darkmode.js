let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("theme-switch")

const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
    document.getElementById("apta").src = "images/logo/APTA_LOGO.webp"; //changes logo
    document.getElementById("bglogo").src = "images/logo/APTA_LOGO.webp";  //changes logo
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
    document.getElementById("apta").src = "images/logo/APTA_LOGO_light.webp";  //changes logo
    document.getElementById("bglogo").src = "images/logo/OCE_LOGO.webp";  //changes logo
}

if (darkmode === "active") enableDarkMode() 

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})