// -----------------------
// Función suma (para tests)
// -----------------------
export function suma(a, b) {
  return a + b;
}

// Mensaje en consola
console.log('App lista');

// -----------------------
// Función para UI (solo navegador)
// -----------------------
export function agregarItem(texto) {
  // Si NO existe document (Node), no ejecuta DOM
  if (typeof document === 'undefined') return;

  const lista = document.getElementById('lista');
  if (!lista) return;

  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

// -----------------------
// EventListener DOM — SOLO navegador
// -----------------------
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnAgregar');
    if (btn) {
      btn.addEventListener('click', () => {
        agregarItem('Nuevo item');
      });
    }
  });
}
