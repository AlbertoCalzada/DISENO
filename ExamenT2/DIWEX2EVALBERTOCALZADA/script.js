function tieneNombreApellido(nombre) {

    for (let i = 0; i < nombre.length; i++) {
        // Si encontramos un espacio
        if (nombre[i] === ' ') {
            return true;
        }
    }

    return false;
}

function validar() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var errores = [];

    var bool = tieneNombreApellido(nombre);


    if (nombre.length < 1 || bool == false) {
        errores.push("El nombre no puede estar vacio y deben de ser dos palabras.")
    }



    if (mensaje.length <= 8) {
        errores.push("El mensaje no puede tener menos de 8 caracteres")
    }

    if (!regexEmail.test(email)) {
        errores.push("El email no es valido");
    }


    if (errores.length > 0) {
        alert("Error en el formulario:\n\n" + errores.join("\n"));

    } else {
        alert("El envío se ha realizado de forma correcta");

        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensaje").value = "";


    
      

        localStorage.setItem('nombre', nombre);
        localStorage.setItem('email', email);
        localStorage.setItem('mensaje', mensaje);

       
        

    }

}