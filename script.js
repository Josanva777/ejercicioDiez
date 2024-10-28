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

function capturarPrecioProducto() {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (precio <= 0) {
        console.log("ingrese un precio válido.");
        return 0; 
    }
    
    return precio;
}




