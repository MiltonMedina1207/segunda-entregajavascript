

// Array de zapatillas
let zapatillas = [
    { id: 1, marca: "Nike", modelo: "Air Max", precio: 12000 },
    { id: 2, marca: "Adidas", modelo: "UltraBoost", precio: 15000 },
    { id: 3, marca: "Puma", modelo: "RS-X", precio: 10000 },
    { id: 4, marca: "Reebok", modelo: "Classic", precio: 8000 },
];

// Carrito de compras
let carrito = [];

// Función para mostrar las zapatillas
function mostrarZapatillas(lista) {
    const contenedor = document.getElementById('listaZapatillas');
    contenedor.innerHTML = '';
    lista.forEach(zapatilla => {
        contenedor.innerHTML += `
            <div class="zapatilla">
                <h2>${zapatilla.marca} - ${zapatilla.modelo}</h2>
                <p>Precio: $${zapatilla.precio}</p>
                <button onclick="agregarAlCarrito(${zapatilla.id})">Agregar al carrito</button>
            </div>`;
    });
}

// Función para agregar una zapatilla al carrito
function agregarAlCarrito(id) {
    const zapatillaSeleccionada = zapatillas.find(zapatilla => zapatilla.id === id);
    carrito.push(zapatillaSeleccionada);
    alert(`${zapatillaSeleccionada.marca} ${zapatillaSeleccionada.modelo} ha sido agregada al carrito.`);
    console.log(carrito);
}

// Función para buscar zapatillas
function buscarZapatillas(termino) {
    return zapatillas.filter(zapatilla => 
        zapatilla.modelo.toLowerCase().includes(termino.toLowerCase()) ||
        zapatilla.marca.toLowerCase().includes(termino.toLowerCase())
    );
}

// Manejar el formulario de búsqueda
const formularioBusqueda = document.getElementById('formularioBusqueda');
formularioBusqueda.addEventListener('submit', (e) => {
    e.preventDefault();
    const termino = document.getElementById('buscador').value;
    const resultados = buscarZapatillas(termino);
    mostrarZapatillas(resultados);
});

// Inicialización
mostrarZapatillas(zapatillas);