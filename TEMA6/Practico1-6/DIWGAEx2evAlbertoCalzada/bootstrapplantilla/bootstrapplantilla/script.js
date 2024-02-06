function validar()
{
    var nombre= document.getElementById("nombre").value;
    var email= document.getElementById("email").value;
    var mensaje= document.getElementById("mensaje").value;
    var respuesta= document.getElementById("respuesta").value;


    var errores = [];

    if(nombre.length<1)
    {
        errores.push("El nombre no puede estar vacio")
    }

    if(mensaje.length<=8)
    {
        errores.push("El mensaje no puede tener menos de 8 caracteres")
    }

    if(respuesta!=5)
    {
        errores.push("La suma es incorrecta");
    }
    
    if(errores.length>0)
    {
        alert("Error en el formulario:\n\n" + errores.join("\n"));
       
    }else{
        alert("El envío se ha realizado de forma correcta");

        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensaje").value = "";
        document.getElementById("respuesta").value = "";
        
    }

}