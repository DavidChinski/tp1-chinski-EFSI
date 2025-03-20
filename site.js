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
            mensajeNombre.innerHTML = "El nombre debe tener al menos 3 caracteres.";
            
        } else {
            mensajeNombre.innerHTML = "Nombre válido";
            
        }
    }

    function validarEmail() {
        const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!patron.test(inputEmail.value)) {
            mensajeEmail.innerHTML = "El formato del email es inválido.";
           
        } else {
            mensajeEmail.innerHTML = "Email válido";
           
        }
    }

    function validarContra() {
        let tieneNumero = /\d/.test(inputContra.value);
        let tieneLetra = /[a-zA-Z]/.test(inputContra.value);

        if (inputContra.value.length < 8 || !tieneNumero || !tieneLetra) {
            mensajeContra.innerHTML = "La contraseña debe tener al menos 8 caracteres, un número y una letra.";
           
        } else {
            mensajeContra.innerHTML = "Contraseña válida";
           
        }
        validarConfContra();
    }

    function validarConfContra() {
        if (inputConfContra.value !== inputContra.value) {
            mensajeConfContra.innerHTML = "Las contraseñas no coinciden.";
           
        } else {
            mensajeConfContra.innerHTML = "Contraseñas coinciden";
         
        }
    }

    inputNombre.addEventListener("input", validarNombre);
    inputEmail.addEventListener("input", validarEmail);
    inputContra.addEventListener("input", validarContra);
    inputConfContra.addEventListener("input", validarConfContra);
});
