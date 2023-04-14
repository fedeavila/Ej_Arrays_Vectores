console.log("Ola Ke Ase?");

console.log("Arrays");

var arreglo = ["juan", "rocio", 20, 89]
console.log(arreglo);

var arreglo2 = new Array("ignacio", "damian", 20, 89);
console.log(arreglo2);

console.log(arreglo2[2]);

// Cantidad de elementos del Array
console.log("Cant de elementos: " + arreglo.length);

// Arreglo de objetos
let alumnes = [
	{
		nombre: "Daniel",
		apellido: "Martinez",
		domicio: {
			calle: "Av. Santa Fe",
			numero: 599,
			ocupa: false,
		},
		materias: [
			"Analisis",
			"Algebra",
			"Calculo"
		]
	},

	{
		nombre: "Rocio",
		apellido: "Rodriguez",
		domicio: {
			calle: "Av. Siempre Viva",
			numero: 123,
			ocupa: false,
		},
		materias: [
			"Analisis 2",
			"Algebra 2",
			"Estructura de Datos"
		]
	},

	{
		nombre: "Jose",
		apellido: "Maradona",
		domicio: {
			calle: "Av. Cordoba",
			numero: 255,
			ocupa: false,
		},
		materias: [
			"POO",
			"Desarrollo Mobile",
			"Desarrollo Web"
		]
	}
]

console.log(alumnes);
console.log(alumnes[0]);

// Recorremos el Array
for (let index = 0; index < alumnes.length; index++) {
	console.log("Soy " + alumnes[index].nombre + " y vivo en " + alumnes[index].domicio.calle + " y estoy cursando: ");
	for (let j = 0; j < alumnes[index].materias.length; j++) {
		+	console.log("- " + alumnes[j].materias[j]);
	}
};

// Metodos utiles para laburar con Arrays
let puntos = [1, 8, 11, 54];
let cosas = ["word", "Word", "1 Word", "2 Words"];
console.log(cosas);

// Utilizamos metodo Sort para ordernar
// Nros primero, Letras mayus primero, Letras min despues
console.log(cosas.sort());

// Acceso al ultimo elemento del Array
let ultimoElementoDelArray = cosas[cosas.length - 1];

// Metodo Push() - Para agregar un elemento al final del Array
let nombres = ["Marcelo", "Rodrigo", "Emilia", "Martin"];
console.log(nombres);
let retorno = nombres.push("Federico");
console.log(retorno);
console.log(nombres);

// Metodo Pop() - Para quitar el ultimo elemento.
nombres.pop(nombres);
console.log(nombres);

// Metodo Unshift() - Para agregar elem al principio.
nombres.unshift("Valentinga");
console.log(nombres);

// Metodo shift() - Para eliminar primer elemento.
nombres.unshift("Valentinga");
console.log(nombres);


// Splice()
nombres.splice(1, 2) // A partir del inciden 1, borrame 2 elementos.
console.log(nombres);

// Concat()
let sectorA = ["alex", "pepe"];
let sectorB = ["maria", "valentina"];

let sectorAB = sectorA.concat(sectorB);
console.log(sectorAB);

// Slice()
let chicas = sectorAB.splice(2);
console.log(chicas);

let chicos = sectorAB.splice(0, 2);
console.log(chicos);

