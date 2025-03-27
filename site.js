document.addEventListener("DOMContentLoaded", function () {
    let inputNombre = document.getElementById("nombre");
    let inputEmail = document.getElementById("email");
    let inputContra = document.getElementById("contra");
    let inputConfContra = document.getElementById("confContra");

    let mensajeNombre = document.getElementById("mensajeNombre");
    let mensajeEmail = document.getElementById("mensajeEmail");
    let mensajeContra = document.getElementById("mensajeContra");
    let mensajeConfContra = document.getElementById("mensajeConfContra");

    function validarNombre() {
        if (inputNombre.value.length < 3) {
            mensajeNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
            mensajeNombre.style.color = "red";
            return false;
        } else {
            mensajeNombre.textContent = "";
            return true;
        }
    }

    function validarEmail() {
        const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!patron.test(inputEmail.value)) {
            mensajeEmail.textContent = "El formato del email es inválido.";
            mensajeEmail.style.color = "red";
            return false;
        } else {
            mensajeEmail.textContent = "";
            return true;
        }
    }

    function validarContra() {
        let tieneNumero = /\d/.test(inputContra.value);
        let tieneLetra = /[a-zA-Z]/.test(inputContra.value);

        if (inputContra.value.length < 8 || !tieneNumero || !tieneLetra) {
            mensajeContra.textContent = "Debe tener al menos 8 caracteres, un número y una letra.";
            mensajeContra.style.color = "red";
            return false;
        } else {
            mensajeContra.textContent = "";
            return true;
        }
    }

    function validarConfContra() {
        if (inputConfContra.value !== inputContra.value) {
            mensajeConfContra.textContent = "Las contraseñas no coinciden.";
            mensajeConfContra.style.color = "red";
            return false;
        } else {
            mensajeConfContra.textContent = "";
            return true;
        }
    }

    inputNombre.addEventListener("input", validarNombre);
    inputEmail.addEventListener("input", validarEmail);
    inputContra.addEventListener("input", validarContra);
    inputConfContra.addEventListener("input", validarConfContra);

});
