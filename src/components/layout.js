

export function renderHeader(header) {
  header.innerHTML = `
    <nav>
      <a href="#">Listado de héroes</a>
      <a href="#">Favoritos</a>
      <a href="#">Añadir nuevo héroe</a>
      <a href="#">Sobre nosotros</a>
    </nav>
  `;
}

export function renderFooter(footer) {
  footer.innerHTML = `
    &copy; 2025 Todos los derechos reservados
  `;
}