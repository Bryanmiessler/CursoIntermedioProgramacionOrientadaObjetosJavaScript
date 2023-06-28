// Atributos que no puedan ser listados

// Definimos el objeto
const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};

Object.defineProperty(juan, "navigator", { // Creamos un nuevo atributo
	value: "Chrome",
	enumerable: false,
	writable: true,
	configurable: true,
});

console.log( // Imprimimos las llaves del objeto
	Object.keys(juan)
); // [ 'name', 'age', 'approvedCourses', 'addCourse' ]



// Atributos que no se puedan eliminar


// Definimos el objeto
const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};

Object.defineProperty(juan, "terminal", { // Creamos un nuevo atributo
	value: "WSL",
	enumerable: true,
	writable: true,
	configurable: false, // 👀
});

console.log( // Mostramos las propiedades del objeto previamente... 👁👁
	Object.keys(juan)
); // [ 'name', 'age', 'approvedCourses', 'addCourse', 'terminal' ]

delete terminal; // Intentamos eliminar ❌

console.log( // Listamos los atributos para comprobar si se eliminó `terminal` 🤔
	Object.keys(juan)
); // [ 'name', 'age', 'approvedCourses', 'addCourse', 'terminal' ] 👈 NO se eliminó


// Atributos que no se puedan sobreescribir

// Definimos el objeto
const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};

Object.defineProperty(juan, "editor", { // Creamos un nuevo atributo
	value: "VSCode",
	enumerable: true,
	writable: false,
	configurable: true,
});

console.log(juan.editor); // "VSCode"

juan.editor = "Atom"; // Intentamos sobreescribirlo

console.log(juan.editor); // "VSCode" 👈 No cambió




// Qué es Object.seal y Object.freeze

const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};

Object.seal(juan); // "Sellamos" el objeto

// Listamos para saber las llaves actuales:
console.log(Object.keys(juan)); // [ 'name', 'age', 'approvedCourses', 'addCourse' ]

delete age; // Intentamos eliminar un atributo del objeto

// Listamos para observar si hubo cambios:
console.log(Object.keys(juan)); // [ 'name', 'age', 'approvedCourses', 'addCourse' ]


Object.freeze(juan); // "Congelamos" el objeto

// Listamos para saber las llaves actuales:
console.log(Object.keys(juan)); // [ 'name', 'age', 'approvedCourses', 'addCourse' ]

delete approvedCourses; // Intentamos eliminar un atributo del objeto
juan.name = "Carlitos"; // Intentamos sobreescribir el valor de este atributo

// Listamos para observar si hubo cambios:
console.log(Object.keys(juan)); // [ 'name', 'age', 'approvedCourses', 'addCourse' ]
// Verificamos si cambió el valor de `name`:
console.log(juan.name); // "Juanito"