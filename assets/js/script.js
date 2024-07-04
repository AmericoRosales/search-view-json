document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/data/personajes.json')
      .then(response => response.json())
      .then(data => {
        mostrarPersonajes(data);
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  
    // Función para mostrar los personajes
    function mostrarPersonajes(personajes) {
      const container = document.getElementById('characters-container');
      container.innerHTML = '';
  
      personajes.forEach(personaje => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
          <div class="card mb-4">
            <img src="${personaje.imagen}" class="card-img-top" alt="${personaje.nombre}">
            <div class="card-body">
              <h5 class="card-title">${personaje.nombre}</h5>
              <p class="card-text"><strong>Edad:</strong> ${personaje.edad}</p>
              <p class="card-text"><strong>Ocupación:</strong> ${personaje.ocupacion}</p>
              <p class="card-text"><strong>Familia:</strong> ${personaje.familia}</p>
              <p class="card-text">${personaje.descripcion}</p>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
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
          mostrarPersonajes(personajesFiltrados);
        })
        .catch(error => console.error('Error al cargar los datos:', error));
    });
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