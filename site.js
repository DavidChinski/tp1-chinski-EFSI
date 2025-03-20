let inputEmail = document.getElementById('email');
let inputNombre = document.getElementById('nombre');
let inputContra = document.getElementById('contra');
let inputConfContra = document.getElementById('confContra');
let mensaje = document.getElementById('mensaje')



function validarNombre(inputNombre){

    console.log(inputNombre.value)
    if(inputNombre < 3){
        
        mensaje.innerHTML = "El nombre es inválido"
        console.log("invalido")
    }
}


function validarMail(inputEmail){

    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   
    if (!patron.test(inputEmail)) {
        
        mensaje.innerHTML = "El formato del mail es inválido"
    } 
}

function validarContra(inputContra){

    if(inputContra.value >= 8 && inputContra.value.includes)
}
    
