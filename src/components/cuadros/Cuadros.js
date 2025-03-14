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
      :host {
      font-family: Arial, sans-serif;
      display: block;
  }
        
     .cuadro-card {
     display: flex;
     flex-direction: column;
     gap: 10px;
     padding: 15px;
     border-radius: 8px;
     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
     background: white;
     height: 100%;

      } 

      .cuadro-img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 8px; 
      }

      .miniTitulo {
      font-size: 12px;
      text-transform: uppercase;
      font-weight: bold;
      color: #666;
      margin: 0;
      }

      .titulo {
      font-size: 18px;
      font-weight: bold;
      color: #000;
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      margin: 0;
      }

      .titulo:hover {
      color:rgb(0, 0, 0);
      text-decoration: underline;
      }

      .descripcion {
      font-size: 14px;
      color: #666;
      margin: 0;
      }

      .autor-container {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: auto;
      }

      .circuloimg {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      }

      .fecha {
      text-align: right;
      font-size: 12px;
      color: #666;
      margin:
      }

      </style>
      <div class="cuadro-container">
        ${`
            <div class="cuadro-card">
             ${this.getAttribute('imagenCuadro') !== "undefined" ? `<img class="cuadro-img" src="${this.getAttribute('imagenCuadro')}"></img>` : ''}
              <p class="miniTitulo">${this.getAttribute("miniTitulo")}</p>
              <p class="titulo">${this.getAttribute("titulo")}</p>
              <p class="descripcion">${this.getAttribute("descripcion")}</p>
              <div class="autor-container">
              <img class="circuloimg" src="${this.getAttribute("circuloimg")}" alt="Autor">
              <p>${this.getAttribute("autor")}</p>
              </div>
              <p class="fecha">${this.getAttribute("fecha")}</p>
            </div>
          `}
      </div>
    `;
  }
}


export default Cuadros;
