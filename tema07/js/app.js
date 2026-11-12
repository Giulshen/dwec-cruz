/*
  Tarea 7 · DWEC · [Tu nombre y apellidos]
  Funciones, flechas y clases.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · La regla de este tema:
      - declaración, function nombre() { ... }, para las funciones con nombre, como las de los botones;
      - FLECHA para todos los callbacks: forEach, map, filter, sort, reduce, find, some...;
      - nunca una flecha como método: en las clases, la forma corta media() { ... }.
  · Los resultados se pintan en la página como en los temas 5 y 6: createElement, textContent, classList y append.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================


function calcularPrecio(base, iva, descuento = 0) {
  const precioConDescuento = base - (base * descuento / 100);
  const precioFinal = precioConDescuento + (precioConDescuento * iva / 100);
  return precioFinal;

}

// Ya está hecha: 74.8 → "74.80 €"
function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  const baseTexto = document.getElementById("base").value;
  const ivaTexto = document.getElementById("iva").value;
  const descuentoTexto = document.getElementById("descuento").value;

  const error = document.getElementById("error1");

  if (baseTexto === "") {
    error.textContent = "Introduce un precio.";
    error.classList.remove("d-none");
    return;
  }

  if (Number.isNaN(iva) || iva < 0) {
    error.textContent = "Introduce un IVA que sea válido.";
    error.classList.remove("d-none");
    return;
  }


  if (Number.isNaN(descuento) || descuento < 0 || descuento > 100) {
    error.textContent = "Introduce un descuento que esté entre 0 y 100.";
    error.classList.remove("d-none");
    return;
  }

  error.classList.add("d-none");

  const precioFinal = calcularPrecio(base, iva, descuento);

  const resultado = [
    "Precio inicial: " + formatearEuros(base),
    "Descuento: " + descuento + " %",
    "IVA: " + iva + " %",
    "Precio final: " + formatearEuros(precioFinal)
  ];

  pintarLista("#salida1", resultado);

  console.log("Precio calculado;", precioFinal);


}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

// Ya está hecha: una película como texto, «Coco (2017) · 105 min»
function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

// Las cuatro funciones siguientes ya funcionan, pero sus callbacks están escritos con function, como en el tema 6.
// TODO: pasa a flecha los cuatro callbacks (map, filter, sort y reduce). Si el cuerpo es solo una expresión,
//       sin llaves ni return. Comprueba después que cada botón sigue dando lo mismo.

function verTitulos() {
  const titulos = peliculas.map(pelicula => pelicula.titulo);
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter(pelicula => pelicula.duracion > 120);
  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio);   // una copia: sort cambia el original
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

function buscarAntigua() {
  const antigua = peliculas.find(pelicula => pelicula.anio < 1990);

  if (antigua === undefined) {
    document.querySelector("#mensaje2").textContent = "No hay ninguna película anterior a 1990.";
    pintarLista("#salida2", []);
  } else {
    document.querySelector("#mensaje2").textContent = "La primera película anterior a 1990 es:";
    pintarLista("#salida2", [comoTexto(antigua)]);

  }
  console.log("Ejercicio 2: find →", antigua);


}


// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;


function transformar(lista, operacion) {
  const resultado = [];

  for (const numero of lista) {
    resultado.push(operacion(numero));

  }
  return resultado;
}

// Ya está hecha: escribe en #salida3 tu resultado, el de map y numeros
function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

// El modelo: funcionará cuando hayas escrito transformar()
function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles →", resultado);
}

function verCuadrados() {
  const resultado = transformar(numeros, (n) => n ** 2);
  mostrar3("cuadrados", resultado, numeros.map((n) => n ** 2));
  console.log("Ejercicio 3: cuadrados →", resultado);
}

function verAbsolutos() {
  const resultado = transformar(numeros, (n) => Math.abs(n));
  mostrar3("absolutos", resultado, numeros.map((n) => Math.abs(n)));
  console.log("Ejercicio 3: absolutos →", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================


function crearContador(paso = 1) {
  let cuenta = 0;

  return function () {
    cuenta = cuenta + paso;
    console.log("Contador;", cuenta);
    return cuenta;
  };

}

const contarDeUno = crearContador(1);
const contarDeCinco = crearContador(5);

// El modelo
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

function sumarCinco() {
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Ejercicio 4: de 5 en 5 →", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }
  anadirNota(nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }

    this.notas.push(nota);
    return true;

  }
  media() {
    if (this.notas.length === 0) {
      return 0;
    }

    const suma = this.notas.reduce((total, nota) => total + nota, 0);
    return suma / this.notas.length;
  }

  presentarse() {
    return `Soy ${this.nombre}, del curso ${this.curso}`;
  }
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);
    this.empresa = empresa;
  }

  presentarse() {
    return `${super.presentarse()} y hago las prácticas en ${this.empresa}`;
  }
}

const alumnos = [];
const alumno1 = new Alumno("Giulshen Hueso Cruz", "2º DAW");
alumno1.anadirNota(8);
alumno1.anadirNota(9);

const alumno2 = new AlumnoFCT("Blanca Gónzalez Moreno", "2º DAW", "NTT DATA");
alumno2.anadirNota(7);
alumno2.anadirNota(6);

alumnos.push(alumno1, alumno2);


// Ya está hecha: pinta una tarjeta por alumno en #listaAlumnos y actualiza #totalAlumnos
function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

function crearAlumno() {
  const nombre = document.querySelector("#nombre5").value.trim();
  const curso = document.querySelector("#curso5").value.trim();
  const empresa = document.querySelector("#empresa5").value.trim();
  const notasTexto = document.querySelector("#notas5").value.trim();
  const error = document.querySelector("#error5");

  if (nombre === "") {
    error.textContent = "El nombre del alumno no puede estar vacío.";
    error.classList.remove("d-none");
    return;
  }

  //alumno FCT 

  let alumno;

  if (empresa === "") {
    alumno = new Alumno(nombre, curso);

  } else {
    alumno = new AlumnoFCT(nombre, curso, empresa);

  }

  //para ver si las notas si están escritas
  if (notasTexto !== "") {
    const textosNotas = notasTexto.split(",");

    if (textosNotas.some((texto) => texto.trim() === "")) {
      error.textContent = "Las notas no pueden estar vacías.";
      error.classList.remove("d-none");
      return;
    }


    const notas = textosNotas.map((texto) => Number(texto.trim()));

    if (notas.some((nota) => Number.isNaN(nota) || nota < 0 || nota > 10)) {
      error.textContent = "Las notas tienen que ser números entre 0 y 10.";
      error.classList.remove("d-none");
      return;
    }

    notas.forEach((nota) => alumno.anadirNota(nota));
  }

  //Ahora meto el alumno en la lista

  alumnos.push(alumno);

  error.classList.add("d-none");

  //vacío el formulario

  document.querySelector("#nombre5").value = "";
  document.querySelector("#curso5").value = "";
  document.querySelector("#empresa5").value = "";
  document.querySelector("#notas5").value = "";

  pintarAlumnos();

  console.log("Ejercicio 5: alumno añadido", alumno);

}

// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const fechaObjetivo = new Date(fecha);
  fechaObjetivo.setHours(0, 0, 0, 0);

  const diferencia = fechaObjetivo - hoy;
  const dias = Math.round(diferencia / (1000 * 60 * 60 * 24));

  return dias;

}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;     // "2026-12-25", o "" si está vacía
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }

  // Ya está hecho: de "2026-12-25" a un Date. Fíjate en el mes - 1: el mes va de 0 a 11
  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);


  const dias = diasHasta(fecha);

  const fechaTexto = fecha.toLocoleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  if (dias > 0) {
    salida.textContent = `Faltan ${dias} días para el ${fechaTexto}.`;

  } else if (dias === 0) {
    salida.textContent = `¡Hoy es ${fechaTexto}!`;

  } else {
    salida.textContent = `Han pasado ${-dias} días desde el ${fechaTexto}.`;

  }

  console.log("Ejercicio 6; días hasta", días);
}



// TODO: iniciales(nombreCompleto) devuelve las iniciales en mayúsculas: «lucía martín ortega» → «LMO».
//       Encadena trim, split(" "), filter (para quitar las palabras vacías si hay espacios dobles),
//       map (la primera letra de cada palabra, en mayúscula) y join("").
function iniciales(nombreCompleto) {

}

// TODO: crearUsuario(nombreCompleto) devuelve las iniciales en minúsculas y tres cifras al azar, de 000 a 999:
//       «lmo042». Pista: Math.random, Math.floor y padStart(3, "0").
function crearUsuario(nombreCompleto) {

}

function mostrarIniciales() {
  // TODO: lee #nombre6. Si está vacío, avisa en #salida6b.
  // TODO: si no, escribe en #salida6b «Iniciales: LMO · usuario: lmo042».
}
