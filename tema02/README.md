Tarea 2 - Navegadores, motores y primera página interactiva

¿De qué trata la práctica?

En esta práctica he trabajado con diferentes navegadores web y sus motores de renderizado y de JavaScript.

También he creado una página con JavaScript donde hay varios botones que realizan diferentes acciones.

Archivos del proyecto:

index.html:Es la página principal. Aquí está la tabla con los diferentes navegadores, sus empresas y los motores que utilizan.
interaccion.html:Es la página donde están los botones para probar las funciones de JavaScript.
js/app.js:Es el archivo donde he escrito las funciones de JavaScript.
README.md:Es este archivo, donde explico de qué trata la práctica.

Navegadores:

En la tabla he puesto los 5 navegadores:

Chrome
Edge
Opera
Firefox
Safari

En ella se puede ver qué empresa pertenece a cada navegador, qué motor de renderizado utiliza, qué motor de JavaScript tiene y si está basado en Chromium.

JavaScript

En la página de interacción he creado cuatro botones:

Saludar: Aparece un mensaje con mi nombre.
Simular error: Nos muestra un mensaje de error en la consola.
¿Qué navegador soy?:Nos muestra la información sobre el navegador que estoy utilizando.
Despedida: Nos muestra un mesaje de despedida en la consola.

También he usado "console.log()" y "console.error()" para mostrar información en la consola del navegador.

Tecnologías que hemos utilizado:

Para hacer esta práctica he utilizado:

HTML
JavaScript
Bootstrap
Bootstrap Icons

Compatibilidad:

He tenido en cuenta que una página web puede verse en diferentes navegadores y dispositivos. 
Por eso es importante probarla en varios navegadores para comprobar que funciona correctamente.

Autor:

Giulshen Hueso Cruz



Capturas de pantalla

1. Página principal en ordenador

![Página principal en ordenador](capturas/Captura1.png)

2. Página de interacción en modo móvil

![Página de interacción en modo móvil](capturas/Captura2y3.png)

3. Consola con los tres botones (Ahora hay 4, ujno de despedida, que hemos hecho de prueba que funciona por consola)

![Consola con los tres botones](capturas/Captura2y3.png)

4. UserAgent en Firefox

![UserAgent en Firefox](capturas/Captura4.png)

5. UserAgent en Chrome

![UserAgent en Chromr](capturas/Captura5.png)

¿Quién hace qué?

Voy a explicar el tercer botón. "¿Qué navegador soy?" de "interaccion.html":

<button onclick="verNavegador()" class="btn btn-success">3.¿Qué navegador soy?</button>


HTML: con la etiqueta `<button>` creo el botón y le pongo el texto que se ve en la página. 
También uso `onclick="verNavegador()"` para decirle qué función tiene que ejecutar cuando lo pulso. 
El HTML solo pone el botón y lo conecta con JavaScript, pero no hace nada más.
Bootstrap (CSS): se encarga de cómo se ve el botón. 
Con las clases `btn` y `btn-success` el botón sale verde, con las esquinas redondeadas y con un tamaño adecuado. Además, la clase `d-grid gap-3` del contenedor hace que los cuatro botones estén uno debajo de otro y con espacio entre ellos. 
Así no he tenido que escribir CSS yo.
JavaScript: es lo que hace que el botón funcione. 
En el archivo `js/app.js` está la función `verNavegador()`, que coge `navigator.userAgent` y lo muestra en la consola con `console.log()` y también en una ventana emergente con `alert()`.

En resumen: HTML pone el botón, Bootstrap hace que se vea bien y JavaScript hace que al pulsarlo pase algo, en este caso nos sale una alerta en la cual nos pone: Estás utilizando el navegador: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36.


Comparación de los dos userAgent:

UserAgent en Chrome:

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/xxx Safari/537.36

UserAgent en Firefox:

Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:xxx) Gecko/20100101 Firefox/xxx

¿Qué partes reconozco?

Mozilla/5.0: Sale en los dos.
Windows NT 10.0; Win64; x64: Es mi sistema operativo y la arquitectura de mi portátil. También sale en los dos.Chrome/xxx y Firefox/xxx: Son el nombre del navegador y su versión.
AppleWebKit/537.36 y KHTML, like Gecko: Solamente salen en Chrome. Tienen que ver con el motor de renderizado.
Gecko/20100101: Solo sale en Firefox, y es su motor de renderizadoo.
Safari/537.36: solo sale en Chrome, aunque no sea Safari realmmente.

¿Por qué salen Mozilla, AppleWebKit o Safari aunque el navegador sea otro?

Es por motivos históricos y de compatibilidad. Al principio, algunas webs solo enviaban la página completa a los navegadores que decían ser «Mozilla». Para que sus páginas se vieran bien, los demás navegadores empezaron a poner «Mozilla» en su userAgent, y se ha quedado hasta hoy.
Con AppleWebKit y Safari pasó algo parecido. Chrome usa Blink, un motor que viene de WebKit (el de Safari), y por eso incluye esas palabras para que las webs lo traten igual de bien. Lo mismo ocurre con Edge y Opera, que también están basados en Chromium. Firefox usa su propio motor, Gecko, así que no lleva ni AppleWebKit ni Safari, pero sí conserva Mozilla/5.0.

En conclusión, el userAgent no sirve para saber con seguridad qué navegador es, porque está lleno de palabras que se han copiado entre navegadores para mantener la compatibilidad.

Fuentes consultadas

MDN Web Docs, Navigator.userAgent: https://developer.mozilla.org/es/docs/Web/API/Navigator/userAgent
MDN Web Docs, Console: https://developer.mozilla.org/es/docs/Web/API/console
Documentación de Bootstrap: https://getbootstrap.com/docs/
Bootstrap Icons: https://icons.getbootstrap.com/
Can I use, CSS Subgrid: https://caniuse.com/css-subgrid

Uso de IA

He usado Chagpt y Claude como guía para saber bien que era Boostrap y para ayudarme a la hora de redactar los apartados del README, como "¿Quién hace qué?" y la comparación de los userAgent, y para revisar errores de mi código HTML. 
Después he comprobado la información con mis propias capturas y mi código para ver si todo estaba bien, he correegido algún fallo en los html de interación y del index, ya que me faltaba algún paréntesis, punto y coma, ul class, div, y ese tipo de errores.