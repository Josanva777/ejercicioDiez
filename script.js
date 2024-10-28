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

function calcularGananciaProducto(precio) {
    let ganancia;
    if (precio < 10000) {
        ganancia = precio * 0.05;
    } else if (precio >= 10000 && precio <= 50000) {
        ganancia = precio * 0.10;
    } else {
        ganancia = precio * 0.15;
    }
    return ganancia;
}

function mostrarGananciaTotal() {
    console.log("La ganancia total es: $" + gananciaTotal);
}

function controlInventario() {
    if (!iniciarSesion()) {
        return; // esto es para salir si no se inicia sesion
    }

    let continuar = true;

    while (continuar) {
        let precio = capturarPrecioProducto();

        if (precio > 0) {
            let ganancia = calcularGananciaProducto(precio);
            gananciaTotal += ganancia;
            console.log("Ganancia para el producto que vale $" + precio + " es: $" + ganancia.toFixed(2));
        }

        continuar = confirm("¿Desea ingresar otro producto?"); 
    }

    mostrarGananciaTotal(); 
}

controlInventario();





