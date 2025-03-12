class Cuadros extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
static get observedAttributes() {
    return ['imagenCuadro', 'miniTitulo', 'titulo', 'descripcion', 'autor', 'fecha'];
  }
  
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .cuadros {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
        }
          img {
            width: 200px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
      </style>
      <div class="cuadros">
      <img src="${this.getAttribute('imagenCuadro')}"></img>
      <p>${this.getAttribute('miniTitulo')}</p>
      <p>${this.getAttribute('titulo')}</p>
      <p>${this.getAttribute('descripcion')}</p>
      <p>${this.getAttribute('autor')}</p>
      <p>${this.getAttribute('fecha')}</p>
      </div>
    `;
  }
}

export default Cuadros;
