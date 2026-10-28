
console.log("app.js cargado");

// ============================================================
// Ejercicio 1 · Selectores y modificación
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";
  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");
  const tercero = document.querySelectorAll("#contenido p")[2];

  tercero.classList.add("text-danger");
  console.log("Se han aplicado los cambios a los párrafos.");

}

// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const contenido = document.getElementById("contenido");
  const aviso = document.getElementById("aviso2");

  const numero = contenido.querySelectorAll("p").length + 1;
  const nuevo = document.createElement("p");
  nuevo.textContent = "Párrafo nuevo" + numero;
  contenido.append(nuevo);

  console.log("Ejercicio 2: añadido el párrafo número" + numero);

}

function eliminarUltimo() {
  const contenido = document.getElementById("contenido");
  const aviso = document.getElementById("aviso2");
  const ultimo = contenido.lastElementChild;

  if (ultimo === null) {
    //si no queda ningún párrafo, muestra el aviso
    aviso.classsList.remove("d.none");
  } else {
    ultimo.remove();
    avisoclassList.add("d-none");
    console.log("Ejercicio 2: eliminado el último párrafo");

  }
}

// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // addEventListener("mouseenter", ...) ejecuta la función cuando el ratón entra en el párrafo.
    // Los eventos los veremos a fondo en el tema 9: de momento, copia este modelo.
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });

    console.log("Ejercicio 3: resaltado activado en " + parrafos.length + "párrafos");
  }

}

// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  const texto = document.getElementById("nuevoTexto").value.trim();
  const error = document.getElementById("error4");
  const primero = document.querySelector("#contenido p");

  if (texto === "") {
    error.classList.remove("d-none");
    console.log("Ejercicio 4: la casilla está vacía");
  }
  else if (primero === null) {
    console.log("Ejercicio 4: no hay ningún párrafo que cambiar");
  } else {
    error.classList.add("d-none");
    primero.textContent = texto;
    console.log("Ejercicio 4: primer párrafo cambiado con textContent");
  }
}

function cambiarConHtml() {
  const texto = document.getElementById("nuevoTexto").value.trim();
  const error = document.getElementById("error4");
  const primero = document.querySelector("#contenido p");

  if (texto === "") {
    error.classList.remove("d-none");
    console.log("Ejercicio 4: la casilla está vacía");
  }
  else if (primero === null) {
    console.log("Ejercicio 4: no hay ningún párrafo que cambiar");
  } else {
    error.classList.add("d-none");
    // Solo para la prueba: innerHTML interpreta el texto como HTML
    primero.innerHTML = texto;
    console.log("Ejercicio 4: primer párrafo cambiado con innerHTML");
  }
}

// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================
// Cuenta los <li> de la lista y lo escribe en el contador
function actualizarContador() {
  const lista = document.getElementById("listaTareas");
  const total = document.getElementById("totalTareas");
  total.textContent = lista.querySelectorAll("li").length;
}

function anadirTarea() {
  const input = document.getElementById("tareaInput");
  const lista = document.getElementById("listaTareas");
  const error = document.getElementById("error5");
  const texto = input.value.trim();

  if (texto === "") {
    error.textContent = "Escribe una tarea antes de añadir.";
    error.classList.remove("d-none");
    console.log("Ejercicio 5: la casilla está vacía");
    return;
  }

  error.classList.add("d-none");

  // <li class="list-group-item"> con casilla y texto
  const li = document.createElement("li");
  li.classList.add("list-group-item");

  const casilla = document.createElement("input");
  casilla.type = "checkbox";
  casilla.classList.add("form-check-input", "me-2");

  const span = document.createElement("span");
  span.textContent = texto;

  li.append(casilla);
  li.append(span);
  lista.append(li);

  input.value = "";
  actualizarContador();
  console.log("Ejercicio 5: tarea añadida → " + texto);
}

function borrarCompletadas() {
  const error = document.getElementById("error5");
  const marcadas = document.querySelectorAll("#listaTareas input:checked");

  if (marcadas.length === 0) {
    error.textContent = "No hay ninguna tarea marcada.";
    error.classList.remove("d-none");
    console.log("Ejercicio 5: no hay tareas marcadas");
    return;
  }

  error.classList.add("d-none");

  for (const casilla of marcadas) {
    // El <li> es el elemento padre de la casilla
    casilla.parentElement.remove();
  }

  actualizarContador();
  console.log("Ejercicio 5: borradas " + marcadas.length + " tareas completadas");
}

// ---------------------------------------------------------------
// EJERCICIO 6. Datos de la ventana (BOM)
// ---------------------------------------------------------------
function verDatosVentana() {
  const ancho = window.innerWidth;
  const alto = window.innerHeight;

  // Tamaño de la ventana
  document.getElementById("datoVentana").textContent = ancho + " × " + alto + " px";

  // Punto de corte de Bootstrap según el ancho de la ventana
  let punto;
  if (ancho < 576) {
    punto = "xs (menos de 576 px)";
  } else if (ancho < 768) {
    punto = "sm (de 576 a 767 px)";
  } else if (ancho < 992) {
    punto = "md (de 768 a 991 px)";
  } else if (ancho < 1200) {
    punto = "lg (de 992 a 1199 px)";
  } else if (ancho < 1400) {
    punto = "xl (de 1200 a 1399 px)";
  } else {
    punto = "xxl (desde 1400 px)";
  }
  document.getElementById("datoPunto").textContent = punto;

  // Tamaño de la pantalla
  document.getElementById("datoPantalla").textContent = screen.width + " × " + screen.height + " px";

  // URL e idioma del navegador
  document.getElementById("datoUrl").textContent = location.href;
  document.getElementById("datoIdioma").textContent = navigator.language;

  console.log("Ejercicio 6: ventana " + ancho + " × " + alto + ", punto de corte " + punto);
}