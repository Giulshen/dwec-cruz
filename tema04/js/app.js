/*
  Tarea 4 · DWEC · Giulshen Hueso Cruz · 26/27
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================
// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta algún número");
  } else if (n2 === 0) {
    mostrar("El segundo número no puede ser cero.", "danger");
    console.warn("Dividir: el segundo número es 0");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  } else if (n2 === 0) {
    mostrar("El segundo número no puede ser cero.", "danger");
    console.warn("Módulo: el segundo número es 0");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }

}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("¿Cuál es mayor?: falta algún número");
  } else if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2}`);
    console.log(`¿Cuál es mayor?: ${n1} > ${n2}`);
  } else if (n2 > n1) {
    mostrar(`${n2} es mayor que ${n1}`);
    console.log(`¿Cuál es mayor?: ${n2} > ${n1}`);
  } else {
    mostrar(`${n1} y ${n2} son iguales`);
    console.log(`¿Cuál es mayor?: ${n1} = ${n2}`);
  }
}

function parOImpar() {
  const n1 = leerNumero("numero1");

  if (Number.isNaN(n1)) {
    mostrar("Escribe el número antes de operar.", "danger");
    console.warn("¿Par o impar?: falta el número");
  } else if (n1 % 1 !== 0) {
    mostrar(`${n1} tiene decimales: no es ni par ni impar.`, "warning");
    console.warn("¿Par o impar?: el número tiene decimales");
  } else {
    const resultado = (n1 % 2 === 0) ? "par" : "impar";
    mostrar(`${n1} es ${resultado}`);
    console.log(`¿Par o impar?: ${n1} es ${resultado}`);
  }
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe un número entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn(`Bucle for: el número ${veces} no es válido`);
  } else {
    let contador = 0;

    for (let i = 1; i <= veces; i++) {
      anadirLinea(`for · repetición ${i} de ${veces}`);
      contador++;
    }

    const palabra = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${palabra}`);
    console.log(`Bucle for: total de ${contador} ${palabra}`);
  }
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe un número entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn(`Bucle while: el número ${veces} no es válido`);
  } else {
    let contador = 0;
    let i = 1;

    while (i <= veces) {
      anadirLinea(`while · repetición ${i} de ${veces}`);
      contador++;
      i++;
    }

    const palabra = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${palabra}`);
    console.log(`Bucle while: total de ${contador} ${palabra}`);
  }
}

function bucleDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe un número entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn(`Bucle do…while: el número ${veces} no es válido`);
  } else {
    let contador = 0;
    let i = 1;

    do {
      anadirLinea(`do…while · repetición ${i} de ${veces}`);
      contador++;
      i++;
    } while (i <= veces);

    const palabra = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${palabra}`);
    console.log(`Bucle do…while: total de ${contador} ${palabra}`);
  }
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe un número entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn(`Badges for: el número ${veces} no es válido`);
  } else {
    for (let i = 1; i <= veces; i++) {
      anadirBadge(i, (i % 2 === 0) ? "primary" : "success");
    }
    console.log(`Badges for: total de ${veces} badges`);
  }

}

function badgesWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe un número entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn(`Badges while: el número ${veces} no es válido`);
  } else {
    let i = 1;
    while (i <= veces) {
      anadirBadge(i, (i % 2 === 0) ? "primary" : "success");
      i++;
    }
    console.log(`Badges while: total de ${veces} badges`);
  }
}

function badgesDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe un número entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn(`Badges do…while: el número ${veces} no es válido`);
  } else {
    let i = 1;
    do {
      anadirBadge(i, (i % 2 === 0) ? "primary" : "success");
      i++;
    } while (i <= veces);
    console.log(`Badges do…while: total de ${veces} badges`);
  }
}
