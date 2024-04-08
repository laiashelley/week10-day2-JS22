// 1- Tienes el siguiente objeto:

const ordenador1 = {
    marca: "HP",
    procesador: "i7",
    ram: "16Gb",
    hd: "1Tb",
    precio: 1500,
    extras: ["cámara HD", "microfono stereo", "disco de acceso rápido"],
    maletin: true,
}

// - Escribe una frase que diga "mi ordenador es un HP, con procesador i7 y 16Gb de RAM"

console.log("mi ordenador es un " + ordenador1.marca + ", con procesador " + ordenador1.procesador + " y " + ordenador1.ram + " de RAM.");

// - Recorre todos los valores con un bucle for in

for (let x in ordenador1){
    console.log(x + ":");
    console.log(ordenador1[x]);
}

// - Muestra el tercer extra del ordenador

console.log(ordenador1.extras[2]);

// 2- Tenemos un objeto del super:
const galletas = {
    marca: "Artiach",
    nombre: "Chiquilín",
    descripción: "galletas de mantequilla",
    precio: 2.75,
    hayExistencias: true
};


// Sobre este objeto:
// - Añadir una característica: oferta (Boolean)  -C-

galletas.oferta = "Pack 5 unidades a 2,00€";

// - Modificar una característica: descripción  -U-

galletas.descripción = "galletas de vainilla";

// - Borrar una característica  -D-

delete galletas.hayExistencias;

// - Mostrar el objeto antes y después  -R-

for (let x in galletas){
    console.log(x + ":");
    console.log(galletas[x]);
}

// - Probar a mostrar solo valores (values) y solo propiedades (keys)

console.log(Object.keys(galletas));

console.log(Object.values(galletas));


// 3- Crear objetos que sean coches con sus características: marca, modelo, potencia, precio, etc

const coches = {
    marca: "Kia",
    modelo: "Stonic",
    potencia: "",
    Precio: "Desde 17.400€",
}

const coches1 = {
    marca: "Kia",
    modelo: "Rio",
    potencia: "",
    Precio: "Desde 10.400€",
}

const coches2 = {
    marca: "Kia",
    modelo: "Creed",
    potencia: "",
    Precio: "Desde 20.400€",
}

// - Con esos objetos, crear un array de objetos (concesionario)

concesionario = [coches, coches1, coches2];

// - Con ese array de objetos, mostrar por ejemplo, todos los modelos. (opción preguntar al usuario
// qué quiere mostrar: marca, modelo, potencia, precio )

console.log(coches[1].modelo);