/*
  Tarea 6 · DWEC · [Tu nombre y apellidos]
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

// TODO: completa el objeto literal con tus datos: nombre, apellidos, edad y curso.
// TODO: añádele el método presentarse(), que devuelve una frase con this.nombre, this.apellidos, this.edad y this.curso.

const estudiante = {
  nombre: "Giulshen",
  apellidos: "Hueso Cruz,
  edad: 26,
  curso: "2º DAW",

  presentarse: function () {
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  }

};

function verFicha() {
  const salida = document.querySelector("#salida1");
  salida.textContent = "";

  const lista = document.createElement("ul");
  lista.classList.add("list-group");

  const claves = ["nombre", "apellidos", "edad", "curso"];
  claves.forEach(function (clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = clave + ": " + estudiante[clave];
    lista.append(li);
  });

  const parrafo = document.createElement("p");
  parrafo.classList.add("form-text");
  parrafo.textContent = estudiante.presentarse();

  salida.append(lista, parrafo);

  console.log("Ejercicio 1 - Obejeto estudiante:", estudiante);

}

function cumplirAnios() {
  estudiante.edad++;
  verFicha();
  console.log("Ejercicio 1: edad ahora", estudiante.edad);
  verFicha();

}

function quitarCurso() {
  delete estudiante.curso;
  verFicha();

  console.log("Ejercicio 1: curso eliminado: ", estudiante.curso);
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No hay colores que quitar.");
    return;
  }
  document.querySelector("#aviso2").classList.add("d-none");
  const colorQuitado = colores.pop();   // pop quita el último y lo devuelve
  mostrarColores();
  console.log("Ejercicio 2 - color quitado con pop:", colorQuitado, comoTexto(colores));

}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("No hay colores que quitar.");
    return;
  }
  document.querySelector("#aviso2").classList.add("d-none");
  const colorQuitado = colores.shift();   // shift quita el primero y lo devuelve
  mostrarColores();
  console.log("Ejercicio 2 - color quitado con shift:", colorQuitado, comoTexto(colores));
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = "Hay " + productos.length + " productos.";
  console.log("Ejercicio 3 - todos los productos:", comoTexto(productos));

}

function ordenarPorPrecio() {
  const copia = [...productos];
  copia.sort(function (a, b) {
    return a.precio - b.precio;   // de más barato a más caro
  });
  pintarProductos(copia);
  document.querySelector("#mensaje3").textContent = "Productos ordenados de más barato a más caro.";
  console.log("Ejercicio 3 - copia ordenada por precio:", comoTexto(copia));

}

function filtrarCaros() {
  const caros = productos.filter(function (producto) {
    return producto.precio > 50;
  });
  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = "Hay " + caros.length + " productos de más de 50 €.";
  console.log("Ejercicio 3 - productos de más de 50 €:", comoTexto(caros));

}

function buscarProducto() {
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");
  mensaje.textContent = "Escribe para realizar la búsqueda.";
  return;
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Giulshen",
  notas: []

  añadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  },

  media: function () {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(function (acumulador, nota) {
      return acumulador + nota;
    }, 0);
    return suma / this.notas.length;
  }
};

function mostrarNotas() {
  const listaNotas = document.querySelector("#notas");
  listaNotas.textContent = "";
  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge");

    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }
    badge.textContent = nota;
    listaNotas.append(badge);
  });
  console.log("Ejercicio 4 - notas del alumno:", comoTexto(alumno.notas), "media:", alumno.media().toFixed(2));
}

function anadirNota() {
  const casilla = document.querySelector("#nota");

  const nota = casilla.value.trim();

  const error = document.querySelector("#error4");

  if (nota === "") {
    error.textContent = "Escribe una nota antes de añadir.";
    error.classList.remove("d-none");

    return;
  }
  const notaNumero = Number(nota);

  if (!alumno.anadirNota(notaNumero)) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    return;

  } else {
    console.log("Ejercicio 4 - Nota añadida:", notaNumero, "notas ahora:", comoTexto(alumno.notas)
    );
  }
  error.classList.add("d-none");
  casilla.value = "";
  mostrarNotas();
}

function borrarNotas() {
  alumno.notas = [];
  console.log("Ejercicio 4: notas borradas");
  mostrarNotas();

  mostrarNotas();


  // ============================================================
  // Ejercicio 5 · map, filter y reduce
  // ============================================================

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function verDobles() {
    const dobles = numeros.map(function (n) {
      return n * 2;
    });
    escribirLineas("#salida5", ["map → " + comoTexto(dobles), "numeros → " + comoTexto(numeros)]);
    console.log("Ejercicio 5: dobles", comoTexto(dobles));
  }

  function verPares() {
    const pares = numeros.filter(function (n) {
      return n % 2 === 0;
    });
    escribirLineas("#salida5", ["filter → " + comoTexto(pares), "numeros → " + comoTexto(numeros)]);
    console.log("Ejercicio 5: pares", comoTexto(pares));
  }

  function verSuma() {
    const suma = numeros.reduce(function (acumulado, n) {
      return acumulado + n;
    }, 0);
    escribirLineas("#salida5", ["reduce → " + suma, "numeros → " + comoTexto(numeros)]);
    console.log("Ejercicio 5: suma", suma);
  }

  function verCadena() {
    const pares = numeros.filter(function (n) {
      return n % 2 === 0;
    });
    const dobles = pares.map(function (n) {
      return n * 2;
    });
    const suma = dobles.reduce(function (acumulado, n) {
      return acumulado + n;
    }, 0);

    escribirLineas("#salida5", [
      "1. filter → " + comoTexto(pares),
      "2. map → " + comoTexto(dobles),
      "3. reduce → " + suma
    ]);
    console.log("Ejercicio 5: cadena", suma);   // tiene que salir 60
  }

  // ============================================================
  // Ejercicio 6 · Ciudades
  // ============================================================

  const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
  let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

  function mostrarCiudades() {
    const contenidor = document.querySelector("#ciudades");
    contenidor.textContent = "";
    ciudades.forEach(function (ciudad) {
      const badge = document.createElement("span");
      badge.classList.add("badge", "text-bg-primary", "m-1");
      badge.textContent = ciudad;
      contenidor.append(badge);
    });
    console.log("Ejercicio 6: ciudades:", comoTexto(ciudades));
  }

  function verForEach() {
    const salida = document.querySelector("#salida6");
    salida.textContent = "";
    ciudades.forEach(function (ciudad, posicion) {
      const badge = document.createElement("span");
      badge.classList.add("badge", "text-bg-secondary", "m-1");
      badge.textContent = posicion + " · " + ciudad;
      salida.append(badge);
    });
  }

  function verSlice() {
    const trozo = ciudades.slice(2, 5);
    escribirLineas("#salida6", [
      "slice(2, 5) devuelve " + comoTexto(trozo),
      "ciudades sigue teniendo " + ciudades.length + " elementos: no ha cambiado"
    ]);
    console.log("Ejercicio 6: slice", comoTexto(trozo));
  }

  function hacerSplice() {
    if (ciudades.length < 3) {
      escribirLineas("#salida6", ["Quedan muy pocas ciudades: pulsa «Restaurar»."]);
      return;
    }
    const quitadas = ciudades.splice(2, 2);
    escribirLineas("#salida6", [
      "splice(2, 2) devuelve " + comoTexto(quitadas),
      "ciudades ahora tiene " + ciudades.length + " elementos: sí ha cambiado"
    ]);
    mostrarCiudades();
    console.log("Ejercicio 6: splice quitó", comoTexto(quitadas));
  }

  function restaurarCiudades() {
    ciudades = [...ciudadesOriginal];
    escribirLineas("#salida6", ["Ciudades restauradas: " + ciudades.length + " elementos."]);
    mostrarCiudades();
  }

  function buscarCiudad() {
    const nombre = document.querySelector("#buscarCiudad").value.trim();
    if (nombre === "") {
      escribirLineas("#salida6", ["Escribe el nombre de una ciudad."]);
      return;
    }
    escribirLineas("#salida6", [
      "includes(\"" + nombre + "\") → " + ciudades.includes(nombre),
      "indexOf(\"" + nombre + "\") → " + ciudades.indexOf(nombre)
    ]);
    console.log("Ejercicio 6: buscar", nombre, ciudades.indexOf(nombre));
  }
}