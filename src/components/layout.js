export function renderHeader(header) {
  header.innerHTML = `
    <nav>
      <ul>
        <li><img src=\"src/assets/My_Hero_Academia_Logo.png\"></li>
        <li><a href="/index.html">Listado de héroes</a></li>
        <li><a href="#">Añadir nuevo héroe</a></li>
        <li><a href="#">Favoritos</a></li>
        <li><a href="#">Sobre nosotros</a></li>
      </ul>
    </nav>
  `;
}

export function renderFooter(footer) {
  footer.innerHTML = `
    &copy; 2025 Todos los derechos reservados
  `;
}