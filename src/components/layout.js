export function renderHeader(header) {
  header.innerHTML = `
    <nav>
      <ul>
        <li><img src=\"./src/assets/My_Hero_Academia_Logo.png\"></li>
        <li><a href="#/">Listado de héroes</a></li>
        <li><a href="#/newHeroe">Añadir nuevo héroe</a></li>
        <li><a href="#/favourites">Favoritos</a></li>
        <li><a href="#/about">Sobre nosotros</a></li>
      </ul>
    </nav>
  `;
}

export function renderFooter(footer) {
  footer.innerHTML = `
    &copy; 2025 Todos los derechos reservados
  `;
}