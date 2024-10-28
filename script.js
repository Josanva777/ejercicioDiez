let gananciaTotal = 0;

function iniciarSesion() {
    let usuario = prompt("Ingrese su usuario:");
    let contrasena = prompt("Ingrese su contraseña:");

    if (usuario === "johan" && contrasena === "1234") {
        console.log("Inicio de sesión exitoso");
        return true;
    } else {
        console.log("datos incorrectos. Ingrese de nuevo");
        return false;
    }
}



