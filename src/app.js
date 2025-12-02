function suma(a, b) {
  return a + b;
}

console.log('App lista');

// -----------------------
// NUEVO DEL PASO 3
// -----------------------
function agregarItem(texto) {
  const lista = document.getElementById('lista');
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

// Agregar evento al botón
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnAgregar');
  btn.addEventListener('click', () => {
    agregarItem('Nuevo item');
  });
});

// Exportación para los tests (Node)
module.exports = suma;
