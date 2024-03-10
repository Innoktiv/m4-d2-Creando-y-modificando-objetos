function Paciente(nombre, edad, rut, diagnostico){
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut
    this.diagnostico = diagnostico;

    // Getters
    this.getNombre = function () {
        return this.nombre;
    };

    this.getEdad = function () {
        return this.edad;
    };

    this.getRut = function () {
        return this.rut;
    };

    this.getDiagnostico = function () {
        return this.diagnostico;
    };

    // Setters
    this.setNombre = function (nombre) {
        this.nombre = nombre;
    };

    this.setEdad = function (edad) {
        this.edad = edad;
    };

    this.setRut = function (rut) {
        this.rut = rut;
    };

    this.setDiagnostico = function (diagnostico) {
        this.diagnostico = diagnostico;
    };
}

function Consultorio(nombre, pacientes = []){
    Paciente.call(this, nombre);
    this.pacientes = pacientes;
}


const paciente1 = new Paciente("Claudio Martinez", 22, "21.345.655-9", "Gripe");
const paciente2 = new Paciente("Alfonso Cardoso", 32, "11.325.355-1", "Resfrío");

const consultorio = new Consultorio("CDI Pucón", [paciente1, paciente2]);


console.log(`\nPrimer paciente:`);
console.log(`  Nombre: ${paciente1.getNombre()}`); 
console.log(`  Edad: ${paciente1.getEdad()}`);   
paciente1.setEdad(36); // Modificar la edad
console.log(`  Nueva edad: ${paciente1.getEdad()}`);
console.log(`  RUT: ${paciente1.getRut()}`);
console.log(`  Diagnostico: ${paciente1.getDiagnostico()}`);

// Looping pacientes en consultorio.pacientes
console.log("\nTodos los pacientes:");
for (const paciente of consultorio.pacientes) {
    console.log(`  Nombre: ${paciente.getNombre()}`);
    console.log(`  Edad: ${paciente.getEdad()}`);
}


// Mostrar todos los datos con prototype

Paciente.prototype.buscarPorNombre = function (nombreABuscar) {
    if (this.nombre === nombreABuscar) {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nRUT: ${this.rut}\nDiagnostico: ${this.diagnostico}`;
    } else {
        return `No se encontró un paciente con el nombre ${nombreABuscar}`;
    }
};

// Ejemplo de uso
const resultado1 = paciente1.buscarPorNombre("Claudio Martinez");

console.log("\nTodos los pacientes con Prototype:");
console.log(resultado1);

const resultado2 = paciente2.buscarPorNombre("Ana García"); // No se encuentra
console.log(resultado2);