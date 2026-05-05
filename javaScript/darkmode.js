let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("theme-switch")

const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
    if (document.getElementById("apta")) document.getElementById("apta").src = "images/logo/APTA_LOGO.webp"; //changes logo
    if (document.getElementById("bglogo")) document.getElementById("bglogo").src = "images/logo/APTA_LOGO.webp";  //changes logo
    if (document.getElementById("throbber")) document.getElementById("throbber").src = "images/THROBBER.webp";  //changes logo
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
    if (document.getElementById("apta")) document.getElementById("apta").src = "images/logo/APTA_LOGO_light.webp";  //changes logo
    if (document.getElementById("throbber")) document.getElementById("throbber").src = "images/THROBBER_light.webp";  //changes logo
}

if (darkmode === "active") enableDarkMode() 

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})