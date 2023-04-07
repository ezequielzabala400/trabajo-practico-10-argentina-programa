// 1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada.

const numerosAleatoriosContenedor = document.getElementById('numeros-aleatorios-contenedor');

const numerosAleatorios = [];

for (let i = 0; i < 10; i++) {
    let numeroRandom = Math.round(Math.random()*10);
    numerosAleatorios.push(numeroRandom);
}

numerosAleatoriosContenedor.innerHTML = numerosAleatorios.sort((a, b) => a - b).map(num => `<li>${num}</li>`).join('');

// 2. Dado el array = [1,2,3,4,5,6]
/*
a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
pantalla.
b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en
pantalla.
d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
e. Generar una copia de un array pero con todos los elementos incrementados en 1.
f. Calcular el promedio
*/
const ejercicio2A = document.getElementById('ejercicio2-a');
const numerosEjercicio2 = [1,2,3,4,5,6];

// a)

    let i = 0;
    while(i < numerosEjercicio2.length){
        ejercicio2A.innerHTML += numerosEjercicio2[i];
        i++;
    }

// B)
const ejercicio2B = document.getElementById('ejercicio2-b');

for(let i = 0; i < numerosEjercicio2.length; i++){
    ejercicio2B.innerHTML += numerosEjercicio2[i];
}

// C)

const ejercicio2C = document.getElementById('ejercicio2-c');

numerosEjercicio2.forEach(num => ejercicio2C.innerHTML += num);

// D)
const ejercicio2D = document.getElementById('ejercicio2-d');

numerosEjercicio2.forEach(num => ejercicio2D.innerHTML += num + 1);

// E)
const ejercicio2E = document.getElementById('ejercicio2-e');

const numerosEjercicio2Copia = numerosEjercicio2.map(num => num + 1);

ejercicio2E.innerHTML = numerosEjercicio2Copia.join('');

// F)
const ejercicio2F = document.getElementById('ejercicio2-f');

const totalDeNumeros = numerosEjercicio2.reduce((previous, current) => previous += current);
const promedio = totalDeNumeros / numerosEjercicio2.length;

ejercicio2F.innerHTML = 'Promedio: ' + promedio;

// 3. Dado un array de números, mostrar cómo quedaría si cada uno de los números es elevado al
//    cuadrado.

const ejercicio3Contenedor = document.getElementById('ejercicio-3');

const ejercicio3ListaNumeros = [1,2,3,4,5,6,7,8,9,10];

ejercicio3Contenedor.innerHTML = ejercicio3ListaNumeros.map(num => `<li>${num * num}</li>`).join('');

// 4. Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.

const ejercicio4Numeros = [ 1, -4, 12, 0, -3, 29, -150];

const sumaDeNumerosPositivos = ejercicio4Numeros.filter(num => num > 0).reduce((previous, current) => previous += current);

console.log('Ejercicio 4');
console.log(sumaDeNumerosPositivos);

// 5. Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].
/*
a. Obtener aquellos nombres con al menos 6 letras.
b. Obtener los nombres que comienzan con "M".
c. Ordenar alfabéticamente y mostrar por consola.
d. Generar un array que contenga solo las iniciales
e. Ejemplo: ["F", "L", "E", "M",... ].
f. Generar un array que contenga todos los nombres en mayúscula.
g. Queremos saber si alguno de estos nombres comienza con "J”
*/

const ejercicio5Nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

// A)

const nombresConAlMenos6Letras = ejercicio5Nombres.filter(nombre => nombre.length >= 6);
console.log('Ejercicio 5 A');
console.log(nombresConAlMenos6Letras);

// B)
const nombresQueEmpiecenConM = ejercicio5Nombres.filter(nombre => nombre.charAt(0) === 'M');
console.log('Ejercicio 5 B');
console.log(nombresQueEmpiecenConM);

// C)
const nombresOrdenados = ejercicio5Nombres.sort();
console.log('Ejercicio 5 C');
console.log(nombresOrdenados);

// D)
const inicialesNombres = ejercicio5Nombres.map(nombre => nombre.charAt(0));
console.log('Ejercicio 5 D');
console.log(inicialesNombres);

// F)
const nombresEnMayusculas = ejercicio5Nombres.map(nombre => nombre.toUpperCase());
console.log('Ejercicio 5 F');
console.log(nombresEnMayusculas);

// G)
console.log('Ejercicio 5 G');
console.log(ejercicio5Nombres.some(nombre => nombre.indexOf('J') === 1));

// 6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un
//    color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
console.log('Ejercicio 6');
const ejercicio6ArrayColores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
function estaElColorIngresado(colores) {
    let colorIngresado = prompt('Ingrese un color');
    if(colores.some(color => color === colorIngresado.toLowerCase().trim(''))){
        console.log(`El color ${colorIngresado} se encuentra en el array`);
    }else console.log(`El color ${colorIngresado} no se encuentra en el array`);
}

//estaElColorIngresado(ejercicio6ArrayColores)

// 7. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los
//    números pares (Recuerda que ((numero % 2) == 0) determina si un numero es par o no, si tiene
//    el resultado ==0 es par, sino es impar)


const devolverNumerosPares = (listaDeNumeros) => listaDeNumeros.filter(numero => numero % 2 === 0);
console.log('Ejercicio 7');
console.log(devolverNumerosPares(ejercicio3ListaNumeros));

// 8. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga sólo
//    las palabras que empiezan con una vocal.

const palabrasQueEmpiecenConVocal = (palabras) => {
    return palabras.filter(palabra => {
        switch (palabra.charAt(0).toUpperCase()) {
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                return palabra;
            default:
                break;
        }
    })
}
console.log('Ejercicio 8');
console.log(palabrasQueEmpiecenConVocal(['Auto','Tren','Avion','Helado','Estacion']));

// 9. Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en
//    base a sus índices
    console.log('Ejercicio 9');
    const ejercicio9Array = ['elemento1','elemento2','elemento3','elemento4','elemento5','elemento6'];

    function cambiarPosiciones(elemento1,elemento2){
        const posicionElemento1 = ejercicio9Array.findIndex((elemento) => elemento === elemento1);
        const posicionElemento2 = ejercicio9Array.findIndex((elemento) => elemento === elemento2);
        
        ejercicio9Array.splice(posicionElemento2, 1, elemento1);
        ejercicio9Array.splice(posicionElemento1, 1, elemento2);
        console.log(ejercicio9Array);
        console.log(posicionElemento1);
        console.log(posicionElemento2);
    }

    cambiarPosiciones('elemento1','elemento3');
    
// 10. Confeccionar una página que muestre una tabla con dos filas y cambiar el color de fondo cuando
//     sea presionada con el mouse.

const tablaEjercicio10 = document.querySelector('.ejercicio10__tabla');

tablaEjercicio10.addEventListener('click', (() => tablaEjercicio10.classList.toggle('ejercicio10__tabla--active')));

// 11. Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona.

const listaEjercicio11 = document.getElementById('ejercicio11__lista');

listaEjercicio11.addEventListener('click', ((e) => {
    if(e.target.classList.contains('ejercicio11__item')){
        e.target.classList.add('ejercicio11__item--ocultar')
    }
}))

/*
12. Confeccionar una página que muestre dos tablas con tres filas cada una. Cambiar el color de
fondo de cada fila de la primera tabla cuando sea presionada con el mouse (en lugar de tabla
pueden usar otra estructura que les parezca mientras siga el ejemplo)
*/

const ejercicio11Fila = document.querySelectorAll('.ejercicio12__item-fila');
const ejercicio11Tabla = document.querySelector('.ejercicio12__tabla');

ejercicio11Tabla.addEventListener('click', (() => {
    ejercicio11Fila.forEach(fila => fila.classList.add('ejercicio12__item-fila--activo'))
}))

/* 
13. Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en un div
con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que rescaten el
nombre de la clase para la descripción de la noticia y cambien su tamaño de fuente
*/ 

const noticia1 = document.querySelector('.noticia-item--1');
const noticia2 = document.querySelector('.noticia-item--2');
const noticia3 = document.querySelector('.noticia-item--3');

const btnsContenedor = document.querySelector('.btns-contenedor');

btnsContenedor.addEventListener('click', ((e) => {
    if(e.target.dataset.id === 'noticia-item--1'){
        noticia1.style.fontSize = '20px'
    }else if(e.target.dataset.id === 'noticia-item--2'){
        noticia2.style.fontSize = '20px'
    } else noticia3.style.fontSize = '20px'
}))

/* 
14. Crear una página que contenga dos tablas de 3 filas y 3 columnas cada una con un texto en cada
casillero. Luego al presionar un botón cambiar por la cadena "-" solo el contenido de la primera
tabla, dejando intacto el de la segunda.
*/

const cambiarAGuion = document.getElementById('cambiarAGuion');
const ejercicio14Filas = document.querySelectorAll('.ejercicio14__tabla__fila');

cambiarAGuion.addEventListener('click', (() => {
    ejercicio14Filas.forEach(fila => {
        const contenido = fila.querySelectorAll('td');
        contenido.forEach(item => item.textContent = '-')
    })
}))

/*
15. Definir un hipervínculo con la propiedad href con cadena vacía. Luego disponer tres botones
que permitan fijar distintos hipervínculos para la propiedad href. Además actualizar el texto del
hipervínculo.
*/

const ejercicio15Link = document.getElementById('ejercicio15-link');
const contenedorLinksBtns = document.querySelector('.contenedor-links__btns');

contenedorLinksBtns.addEventListener('click', (e) => {
    if(e.target.dataset.song === 'monster'){
        ejercicio15Link.href = 'https://www.youtube.com/watch?v=1mjlM_RnsVE&ab_channel=AtlanticRecords';
        ejercicio15Link.textContent = 'Skillet - Monster (Official Video)'
    }else if (e.target.dataset.song === 'save'){
        ejercicio15Link.href = 'https://www.youtube.com/watch?v=4RF9-efhHuE&ab_channel=Skillet';
        ejercicio15Link.textContent = 'Skillet - Save Me (Official Music Video)'
    } else if(e.target.dataset.song === 'back'){
        ejercicio15Link.href = 'https://www.youtube.com/watch?v=W44HrKFTPaE&ab_channel=Skillet';
        ejercicio15Link.textContent = 'Skillet - Back From The Dead [Official Audio]'
    }
})

// 16. Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego cuando
//     sean presionadas ocultarlas.

const ejercicio16Texto = document.getElementById('ejercicio16-texto');

const textoStrongs = ejercicio16Texto.getElementsByTagName('strong');
const textoStrongsArray = [...textoStrongs];

textoStrongsArray.forEach(strong => {
    strong.addEventListener('click', ((e) => {
        e.target.classList.add('ocultar-strong')
    }))
})

// 17. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla cuando
//     ingresamos con el mouse y dejarla con dicho color cuando retiramos la flecha.

const ejercicio17Tabla = document.getElementById('ejercicio17__tabla');

ejercicio17Tabla.addEventListener('mouseover', ((e) => {
    if(!e.target.classList.contains('ejercicio17__tabla__casilla')) return;
    e.target.classList.add('ejercicio17__tabla__casilla--activo')
}))

// 18. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla cuando
//     ingresamos con el mouse y regresar al original cuando salimos.

const ejercicio18Tabla = document.getElementById('ejercicio18__tabla');

ejercicio18Tabla.addEventListener('mouseover', ((e) => {
    if(!e.target.classList.contains('ejercicio18__tabla__casilla')) return;
    e.target.classList.add('ejercicio18__tabla__casilla--activo')
}))

ejercicio18Tabla.addEventListener('mouseout', (e) => {
    if(!e.target.classList.contains('ejercicio18__tabla__casilla')) return;
    e.target.classList.remove('ejercicio18__tabla__casilla--activo')
    
})

// 19. Disponer un div de 800 x 70 píxeles. Al hacer doble clic redimensionarlo a 250 x 250 píxeles y si
//     se hace doble clic nuevamente retornar al tamaño 800 x 70.

const ejercicio19Caja = document.querySelector('.ejercicio19-caja');

ejercicio19Caja.addEventListener('dblclick', (() => {
    ejercicio19Caja.classList.toggle('ejercicio19-caja--activo')
}))

/*
20. Hacer que un link no salga de la página al hacer click, pero mostrar el valor de la página referida
con console.log (utilicen el e.preventDefault, lo mostramos en clase varias veces, por ejemplo
para hacer que no se recargue la pagina, después tienen que traer el elemento link, el cual debe
tener un ID y lo muestran utilizando la forma “console.log(variableLinkQueGuardaron.href)”)
*/
console.log('Ejercicio 20');
const ejercicio20Link = document.getElementById('ejercicio20-link');

ejercicio20Link.addEventListener('click', e => {
    e.preventDefault();
    console.log(ejercicio20Link.href);
})

/*
21. Hacer que un formulario no se envíe al hacer click en "enviar", en lugar de eso mostrar un texto
en la página que el formulario fue enviado. (Misma función que el anterior, solo que muestren
lo que mostraron por consola en una etiqueta HTML)
*/

const ejercicio21Form = document.getElementById('ejercicio21-form');
const formEstado = document.getElementById('form-estado');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');

ejercicio21Form.addEventListener('submit', (e) => {
    e.preventDefault();
    formEstado.textContent = 'El formulario se ha enviado'
    emailInput.value = '';
    passwordInput.value = '';
})
