document.addEventListener('DOMContentLoaded', () => {
  const charactersPerPage = 10; // Número de personajes por página
  let currentPage = 1; // Página actual inicial

  // Función para cargar los personajes desde el JSON
  function cargarPersonajes() {
    fetch('assets/data/personajes.json')
      .then(response => response.json())
      .then(data => {
        mostrarPersonajes(data);
        actualizarPaginacion(data);
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  }

  // Función para mostrar los personajes en la página actual
  function mostrarPersonajes(personajes) {
    const container = document.getElementById('characters-container');
    container.innerHTML = '';

    // Calcular los índices de inicio y fin para la página actual
    const startIndex = (currentPage - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;

    // Filtrar los personajes para la página actual
    const currentCharacters = personajes.slice(startIndex, endIndex);

    currentCharacters.forEach(personaje => {
      const card = document.createElement('div');
      card.className = 'col-md-4 mb-4';
      card.innerHTML = `
        <div class="card">
          <img src="${personaje.imagen}" class="card-img-top" alt="${personaje.nombre}">
          <div class="card-body">
            <h5 class="card-title">${personaje.nombre}</h5>
            <p class="card-text"><strong>Edad:</strong> ${personaje.edad}</p>
            <p class="card-text"><strong>Ocupacion:</strong> ${personaje.ocupacion}</p>
            <p class="card-text"><strong>Familia:</strong> ${personaje.familia}</p>
            <p class="card-text">${personaje.descripcion}</p>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Función para actualizar la paginación
  function actualizarPaginacion(personajes) {
    // Creamos una variable que almacene el id de nuestro contenedor
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = '';

    // Realizamos una operación de logica, para mostrar correctamente los personajes en las paginas. Math Ceil te ayuda a realizar redondeos, 
    const totalPages = Math.ceil(personajes.length / charactersPerPage);

    // Creamos elementos de paginacion
    for (let i = 1; i <= totalPages; i++) {
      // Lo almacenamos en la etiqueta li
      const li = document.createElement('li');
      // Agregamos la clase active 
      li.className = `page-item ${i === currentPage ? 'active' : ''}`;
      li.innerHTML = `
        <a class="page-link" href="#" data-page="${i}">${i}</a>
      `;
      li.addEventListener('click', (e) => {
        // Evitamos el comportamiento predeterminado de navegación del enlace
        e.preventDefault();
        // Nos ayuda a 
        currentPage = i;
        mostrarPersonajes(personajes);
        actualizarPaginacion(personajes);
      });
      paginationContainer.appendChild(li);
    }
  }

  // Función de búsqueda
  document.getElementById('buscar').addEventListener('input', event => {
    const searchTerm = event.target.value.toLowerCase();
    fetch('assets/data/personajes.json')
      .then(response => response.json())
      .then(data => {
        const personajesFiltrados = data.filter(personaje =>
          personaje.nombre.toLowerCase().includes(searchTerm) ||
          personaje.descripcion.toLowerCase().includes(searchTerm)
        );
        currentPage = 1; // Resetear a la primera página después de la búsqueda
        mostrarPersonajes(personajesFiltrados);
        actualizarPaginacion(personajesFiltrados);
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  });

  // Cargar los personajes al inicio
  cargarPersonajes();
});



  

/*
//Metodo IndexOf & LastIndexOf & Includes

let frutas = ["manzana", "banana", "cereza", "durazno", "banana", "fresa", "mandarina","papaya"]; //Array que almacena elementos 

let frutaBuscada = "papaya"; //Especificamos el elemento que vamos a buscar

console.log(frutas.indexOf(frutaBuscada)); //Realiza la busqueda del elemento de izquierda a derecha e imprime su indice
console.log(frutas.lastIndexOf(frutaBuscada)); //Realiza la busqueda del elemento de derecha a izquierda e imprime su indice
console.log(frutas.lastIndexOf(frutaBuscada,2)); //Realiza la busqueda del elemento repetido e imprime su indice

console.log(frutas.includes(frutaBuscada)); //Realiza la busqueda del elemento, e imprime un valor booleano (true/false)


//Metodo map

const numbers = [1,2,3];
const multiplicacion = numbers.map(x => x * 2);

console.log(multiplicacion);

const nombres = ['rocio', 'maribel', 'jimena'];
const mayusculas = nombres.map(function(nombres){
    return nombres.toUpperCase();
});

console.log(mayusculas);

//Metodo Reduce

const n = [1,2,3,4,5];
const reducido = n.reduce(function(a,b){
    return a + b;
});

console.log(reducido);

const names = ['Deya', 'Ericka', 'Jazmin'];
const name_reduce = names.reduce(function(valor, valorActual){
    return valor + ", " + valorActual;
});

console.log(name_reduce);

//Metodo Sort

let numeros = [3, 1, 10, 35, 2, 21];
console.log(numeros.sort(function(a,b){
    return a - b;
}));

//Metodo Reverse

const a = [1,2,3,4,5,6];
a.reverse();

console.log(a);

//Metodo Split

var saludo = "Hola mundo. Cómo estas hoy?";
var fragmentado = saludo.split(" ",5);

console.log(fragmentado);

//Metodo Join

var clima = ['lluvioso', 'soleado', 'templado'];
var tiempo = clima.join();
var tiempo2 = clima.join(', ');
var tiempo3 = clima.join(' + ');

console.log(tiempo2); */


// Creación de objetos

var persona = {};

var persona = new Object();

// Añadir una key y un value
persona.nombre = "Noelia";
// Añadir una nueva key con un value 
persona["apellido"] = "Chonaca";

// Editamos la propiedad almacenada en mi key
persona.nombre = "Noa";

console.log(persona);