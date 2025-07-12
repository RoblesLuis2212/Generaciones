//Creacion de la clase persona
class Persona {
  //Encapsulamiento de las propiedades
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #yearNacimiento;
  #fechaNacimiento;
  constructor(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    yearNacimiento,
    fechaNacimiento
  ) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#peso = peso;
    this.#yearNacimiento = yearNacimiento;
    this.#fechaNacimiento = fechaNacimiento;
  }
  //Metodos getters y setters para acceder a las propiedades
  get getNombre() {
    return this.#nombre;
  }
  set setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get getEdad() {
    return this.#edad;
  }
  set setEdad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
  get getDni() {
    return this.#dni;
  }
  set setDni(nuevoDNI) {
    this.#dni = nuevoDNI;
  }
  get getSexo() {
    return this.#sexo;
  }
  set setSexo(nuevoSexo) {
    this.#sexo = nuevoSexo;
  }
  get getPeso() {
    return this.#peso;
  }
  set setPeso(nuevoPeso) {
    this.#peso = nuevoPeso;
  }
  get getAltura() {
    return this.#altura;
  }
  set setAltura(nuevaAltura) {
    this.#altura = nuevaAltura;
  }
  get getyearNacimiento() {
    return this.#yearNacimiento;
  }
  set setYearNacimiento(nuevoYear) {
    this.#yearNacimiento = nuevoYear;
  }
  get getfechaNacimiento() {
    return this.#fechaNacimiento;
  }
  set setFechaNacimiento(nuevaFecha) {
    this.#fechaNacimiento = nuevaFecha;
  }

  mostrarGeneracion() {
    //Comprobamos a que generacion pertenece la persona dependiendo de su año de nacimiento
    if (this.#yearNacimiento >= 1994 && this.#yearNacimiento <= 2010) {
      return alert(
        `${
          this.#nombre
        } Pertenece a la Generacion Z, su rasgo caracteristico es: IRREVERENCIA`
      );
    }
    if (this.#yearNacimiento >= 1981 && this.#yearNacimiento <= 1993) {
      return alert(
        `${
          this.#nombre
        } Pertenece a la Generacion Y millenials, su rasgo caracteristico es: FRUSTRACION`
      );
    }
    if (this.#yearNacimiento >= 1969 && this.#yearNacimiento <= 1980) {
      return alert(
        `${
          this.#nombre
        } Pertenece a la Generacion X, su rasgo caracteristico es: OBSESION POR EL EXITO`
      );
    }
    if (this.#yearNacimiento >= 1949 && this.#yearNacimiento <= 1968) {
      return alert(
        `${
          this.#nombre
        } Pertenece a la Generacion Baby boom, su rasgo caracteristico es: AMBICION`
      );
    }
    if (this.#yearNacimiento >= 1930 && this.#yearNacimiento <= 1948) {
      return alert(
        `${
          this.#nombre
        } Pertenece a la Generacion Z, su rasgo caracteristico es: Silent Generation Los niños de la post guerra`
      );
    }
  }
  esMayorEdad() {
    const hoy = new Date(); //Obtenemos la fecha actual
    const fecha_Nacimiento = new Date(this.#fechaNacimiento); //Usamos el atributo extra "fechaNacimiento"
    //Restamos el año actual y el año de nacimiento de la persona
    let edad = hoy.getFullYear() - fecha_Nacimiento.getFullYear();
    //Obtenemos los meses actuales,dias actuales y de nacimiento de persona para determinar si ya cumplio o no años, este año
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNacimiento = fecha_Nacimiento.getMonth();
    const diaNacimiento = fecha_Nacimiento.getDate();
    //Condicion para verificar si ya cumplio años
    if (
      mesActual < mesNacimiento ||
      (mesActual === mesNacimiento && diaActual < diaNacimiento)
    ) {
      edad -= 1; //Si todavia no cumplio le restamos 1
    }
    //Veficamos si la persona es mayor o menor de edad y retornamos el mensaje
    if (edad >= 18) {
      return alert(`${this.#nombre} es mayor de edad`);
    } else {
      return alert(`${this.#nombre} es menor de edad`);
    }
  }
  mostrarDatos() {
    document.writeln(`<h2>Datos Personales</h2>`);
    document.writeln(`<ul>`);
    document.writeln(`<li>Nombre: ${this.#nombre}</li>`);
    document.writeln(`<li>Edad: ${this.#edad}</li>`);
    document.writeln(`<li>DNI: ${this.#dni}</li>`);
    document.writeln(`<li>Sexo: ${this.#sexo}</li>`);
    document.writeln(`<li>Peso: ${this.#peso}</li>`);
    document.writeln(`<li>Altura: ${this.#altura}</li>`);
    document.writeln(`<li>Año de Nacimiento: ${this.#yearNacimiento}</li>`);
    document.writeln(`<li>Fecha de Nacimiento: ${this.#fechaNacimiento}</li>`);
    document.writeln(`</ul>`);
  }
  //Metodo para generar DNI aleatorio
  generarDNI() {
    let dni_Aleatorio = ""; //Se declara un string vacio
    for (let i = 0; i < 8; i++) {
      const numRandom = Math.floor(Math.random() * 10); //Generamos un numero aleatorio entre 0 y 9
      dni_Aleatorio += numRandom; //Se concatena los numeros generados con la cadena
    }
    this.#dni = dni_Aleatorio; //Asignamos el nuevo DNI al atributo
    return document.writeln(
      `<p>El nuevo DNI de ${this.#nombre} es: ${this.#dni}</p>`
    );
  }
}

//Seleccionamos todos los input del documento
const input = document.querySelectorAll(".form-control");
const select = document.querySelector(".form-select"); //Seleccionamos individualmente el select
const btnEdad = document.querySelector(".btnEdad");
//Seleccionamos el formulario
const formulario = document.querySelector(".formDatos");
let objPersona; //Incializamos una clase persona

//Agregamos un evento al formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //Evitamos que el form se envie por defecto
  //Tomamos todos los valores de los input
  const nombre = input[0].value;
  const edad = input[1].value;
  const dni = input[2].value;
  const sexo = select.value;
  const peso = input[3].value;
  const altura = input[4].value;
  const fechaNacimiento = input[5].value;
  const yearNacimiento = input[6].value;
  //Creamos un objeto y pasamos los datos obtenido
  objPersona = new Persona(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    yearNacimiento,
    fechaNacimiento
  );
  //Invocamos al metodo mostrar generacion
  objPersona.mostrarGeneracion();
});

//Se agrega evento click al boton "mayor de edad"
btnEdad.addEventListener("click", () => {
  //Se verifica si existe el objeto persona
  if (objPersona) {
    objPersona.esMayorEdad(); //Si es asi quiere decir que el formulario fue completado correctamente
  } else {
    alert("Por favor completa todos los campos"); //Caso contrario, el formulario no esta completo
  }
});
