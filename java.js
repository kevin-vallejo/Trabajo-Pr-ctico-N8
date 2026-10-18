
let conductores = JSON.parse(localStorage.getItem("conductores")) || [];
let vehiculos = JSON.parse(localStorage.getItem("vehiculos")) || [];

const botonConductor = document.getElementById("RegistrarC");
const botonVehiculo = document.getElementById("RegistrarV");

const formularioConductor = document.querySelector(".CrearConductor");
const formularioVehiculo = document.querySelector(".CrearVehiculo");

// MOSTRAR U OCULTAR EL FORMULARIO DE CONDUCTORES
botonConductor.addEventListener("click", function () {
    formularioConductor.classList.toggle("activo");
    formularioVehiculo.classList.remove("activo");
});

// MOSTRAR U OCULTAR EL FORMULARIO DE VEHICULOS
botonVehiculo.addEventListener("click", function () {
    formularioVehiculo.classList.toggle("activo");
    formularioConductor.classList.remove("activo");
});


// REGISTRAR CONDUCTOR
document.getElementById("EnviarC").addEventListener("click", function () {
    let nombre = document.getElementById("nombreC").value.trim();
    let edad = document.getElementById("edadC").value;
    let carnet = document.getElementById("tipo_carnet").value;
    let seguro = document.getElementById("seguroC").value;

    if (nombre === "" || edad === "" || Number(edad) <= 0) {
        alert("Completá el nombre y una edad válida.");
        return;
    }

    let conductor = {
        nombre: nombre,
        edad: Number(edad),
        tipoCarnet: carnet,
        seguro: seguro
    };

    conductores.push(conductor);

    localStorage.setItem("conductores", JSON.stringify(conductores));

    alert("¡Conductor registrado correctamente!");
    console.log(conductores);

    document.querySelector(".CrearConductor").reset();
});


// REGISTRAR VEHICULO
document.getElementById("EnviarV").addEventListener("click", function () {
    let marca = document.getElementById("marcaV").value.trim();
    let modelo = document.getElementById("modeloV").value.trim();
    let patente = document.getElementById("patenteV").value.trim();
    let tipo = document.getElementById("tipoV").value;

    if (marca === "" || modelo === "" || patente === "") {
        alert("Completá todos los datos del vehículo.");
        return;
    }

    if (patente.length == 7) {
        let vehiculo = {
            marca: marca,
            modelo: modelo,
            patente: patente,
            tipo: tipo
        };

        vehiculos.push(vehiculo);

        localStorage.setItem("vehiculos", JSON.stringify(vehiculos));

        alert("¡Vehículo registrado correctamente!");
        console.log(vehiculos);

        document.querySelector(".CrearVehiculo").reset();
    } else {
        alert("La patente debe contener 7 caracteres");
        return;
    }
});


// MOSTRAR CONDUCTORES
document.getElementById("mostrarC").addEventListener("click", function () {
    let datos = document.getElementById("datos");
    datos.innerHTML = "<h2>Conductores registrados</h2>";

    for (let i = 0; i < conductores.length; i++) {
        datos.innerHTML += "<p>";
        datos.innerHTML += "Nombre: " + conductores[i].nombre + "<br>";
        datos.innerHTML += "Edad: " + conductores[i].edad + "<br>";
        datos.innerHTML += "Carnet: " + conductores[i].tipoCarnet + "<br>";
        datos.innerHTML += "Seguro: " + conductores[i].seguro;
        datos.innerHTML += "</p><hr>";
    }

    if (conductores.length == 0) {
        datos.innerHTML += "<p>No hay conductores registrados.</p>";
    }
});


// MOSTRAR VEHICULOS
document.getElementById("mostrarV").addEventListener("click", function () {
    let datos = document.getElementById("datos");
    datos.innerHTML = "<h2>Vehículos registrados</h2>";

    for (let i = 0; i < vehiculos.length; i++) {
        datos.innerHTML += "<p>";
        datos.innerHTML += "Marca: " + vehiculos[i].marca + "<br>";
        datos.innerHTML += "Modelo: " + vehiculos[i].modelo + "<br>";
        datos.innerHTML += "Patente: " + vehiculos[i].patente + "<br>";
        datos.innerHTML += "Tipo: " + vehiculos[i].tipo;
        datos.innerHTML += "</p><hr>";
    }

    if (vehiculos.length == 0) {
        datos.innerHTML += "<p>No hay vehículos registrados.</p>";
    }
});

// MOSTRAR EL FILTRO DE CONDUCTORES
document.getElementById("flitrarC").addEventListener("click", function () {
    document.getElementById("filtroConductores").style.display = "block";
});


// APLICAR FILTRO DE CONDUCTORES
document.getElementById("aplicarFiltroC").addEventListener("click", function () {
    let carnet = document.getElementById("carnetFiltro").value;
    let seguro = document.getElementById("seguroFiltro").value;
    let datos = document.getElementById("datos");
    let encontrados = 0;

    datos.innerHTML = "<h2>Conductores filtrados</h2>";

    for (let i = 0; i < conductores.length; i++) {
        if ((carnet == "Todos" || conductores[i].tipoCarnet == carnet) &&
            (seguro == "Todos" || conductores[i].seguro == seguro)) {

            datos.innerHTML += "Nombre: " + conductores[i].nombre + "<br>";
            datos.innerHTML += "Edad: " + conductores[i].edad + "<br>";
            datos.innerHTML += "Carnet: " + conductores[i].tipoCarnet + "<br>";
            datos.innerHTML += "Seguro: " + conductores[i].seguro + "<hr>";

            encontrados++;
        }
    }

    if (encontrados == 0) {
        datos.innerHTML += "No se encontraron conductores.";
    }
});

// MOSTRAR EL FILTRO DE VEHICULOS
document.getElementById("flitrarV").addEventListener("click", function () {
    document.getElementById("filtroVehiculos").style.display = "block";
});


// APLICAR FILTRO DE VEHICULOS
document.getElementById("aplicarFiltroV").addEventListener("click", function () {
    let marca = document.getElementById("marcaFiltro").value.trim().toLowerCase();
    let tipo = document.getElementById("tipoFiltro").value;
    let datos = document.getElementById("datos");
    let encontrados = 0;

    datos.innerHTML = "<h2>Vehículos filtrados</h2>";

    for (let i = 0; i < vehiculos.length; i++) {

        if ((marca == "" || vehiculos[i].marca.toLowerCase() == marca) &&
            (tipo == "Todos" || vehiculos[i].tipo == tipo)) {

            datos.innerHTML += "Marca: " + vehiculos[i].marca + "<br>";
            datos.innerHTML += "Modelo: " + vehiculos[i].modelo + "<br>";
            datos.innerHTML += "Patente: " + vehiculos[i].patente + "<br>";
            datos.innerHTML += "Tipo: " + vehiculos[i].tipo + "<hr>";

            encontrados++;
        }
    }

    if (encontrados == 0) {
        datos.innerHTML += "<p>No se encontraron vehículos.</p>";
    }
});


let menu = document.getElementById("menu");
let info = document.getElementById("infoC");
let filtroC = document.getElementById("filtroConductores");
let filtroV = document.getElementById("filtroVehiculos");

// MOSTRAR CONDUCTORES
document.getElementById("mostrarC").addEventListener("click", function () {
    menu.style.display = "none";
    info.style.display = "block";
    filtroC.style.display = "none";
    filtroV.style.display = "none";
});

// MOSTRAR VEHICULOS
document.getElementById("mostrarV").addEventListener("click", function () {
    menu.style.display = "none";
    info.style.display = "block";
    filtroC.style.display = "none";
    filtroV.style.display = "none";
});

// ABRIR FILTRO DE CONDUCTORES
document.getElementById("flitrarC").addEventListener("click", function () {
    menu.style.display = "none";
    info.style.display = "block";
    filtroC.style.display = "block";
    filtroV.style.display = "none";
});

// ABRIR FILTRO DE VEHICULOS
document.getElementById("flitrarV").addEventListener("click", function () {
    menu.style.display = "none";
    info.style.display = "block";
    filtroC.style.display = "none";
    filtroV.style.display = "block";
});

// VOLVER AL MENU
document.getElementById("volver").addEventListener("click", function () {
    menu.style.display = "flex";
    info.style.display = "none";
    filtroC.style.display = "none";
    filtroV.style.display = "none";

    document.getElementById("datos").innerHTML = "";
});
