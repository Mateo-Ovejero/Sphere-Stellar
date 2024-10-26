document.addEventListener("DOMContentLoaded", function() {
    const newFechaUTC = dias => {
        let fecha = new Date();
        fecha.setTime(fecha.getTime() + dias * 1000 * 60 * 60 * 24);
        return fecha.toUTCString();
    }

    const creaCookie = (name, value, dias) => {
        let expires = newFechaUTC(dias);
        document.cookie = `${name}=${value};expires=${expires};path=/`;
    }

    const obtenerCookie = cookieName => {
        let cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            let [name, value] = cookie.split("=");
            if (name === cookieName) {
                return value;
            }
        }
        return "No hay cookies con ese nombre";
    }

    console.log(obtenerCookie("usuario"));

    if (obtenerCookie("acceptedCookies") !== "SI") {
        document.querySelector(".bg-modal").style.zIndex = "10000";
        document.querySelector(".bg-modal").style.opacity = "1";
        document.body.style.overflow = "hidden"; // Deshabilita el scroll

        document.getElementById("aceptar").addEventListener("click", () => {
            creaCookie("acceptedCookies", "SI", 30);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(() => {
                document.querySelector(".bg-modal").style.display = "none";
                document.body.style.overflow = ""; // Rehabilitar el scroll
            }, 1000);
        });

        document.getElementById("denegar").addEventListener("click", () => {
            creaCookie("acceptedCookies", "NO", 30);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(() => {
                document.querySelector(".bg-modal").style.display = "none";
                document.body.style.overflow = ""; // Rehabilitar el scroll
            }, 1000);
        });
    } else {
        document.querySelector(".bg-modal").style.display = "none";
    }
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
