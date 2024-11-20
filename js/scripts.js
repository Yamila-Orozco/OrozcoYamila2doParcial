document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "mel" && password === "123") {
        const url = `admin.html?user=${username}`;
        window.location.href = url;
    } else {
        document.getElementById("errorMessage").innerText = "Usuario incorrecto";
    }
});

// Parámetros de la URL para mostrar el mensaje de bienvenidaa
const params = new URLSearchParams(window.location.search);
const user = params.get("user");

if (user) {
    document.body.insertAdjacentHTML(
        "afterbegin",
        `<div id="welcomeMessage">¡Bienvenido/a ${user}!</div>`
    );
}

// Funciones para manejar el pop-up
const headerBtn = document.getElementById("headerBtn");
const loginPopup = document.getElementById("loginPopup");
const overlay = document.getElementById("overlay");

// Mostrar el pop-up
headerBtn.addEventListener("click", () => {
    loginPopup.style.display = "block";
    overlay.style.display = "block";
});

// Cerrar el pop-up
overlay.addEventListener("click", () => {
    loginPopup.style.display = "none";
    overlay.style.display = "none";
});

//para ir al capitulo
function goToChapter(choice) {
    const Url = `${choice}.html`;
    console.log(`Redirigiendo a: ${Url}`);
    window.location.href = Url;
}

function startGame() {
    window.location.href = "librojuego.html";
}

