class News extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['miniTitulo', 'titulo', 'texto', 'circuloimg','autor', 'fecha'];
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
          max-width: 1200px;
          margin: auto;
        
        .news-container {
        display: flex;
        justify-content: center; 
        gap: 20px;
      
      }

      .column {
        display: flex;
        flex-direction: column;
        gap: 20px; 
        flex: 1; 
        max-width: 48%; 
      }


        .miniTitulo {
          font-size: 12px;
          text-transform: uppercase;
          font-weight: bold;
          color: #666;
        }

        .titulo {
          font-size: 18px;
          font-weight: bold;
          color: #000;
          cursor: pointer;
          transition: color 0.3s ease-in-out;
        }

        .titulo:hover {
          color:rgb(0, 0, 0);
          text-decoration: underline;
        }

        .texto {
          font-size: 14px;
          color: #666;
        }

        .autor-container {
          display: flex;
          align-items: center;
          gap: 10px;
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
        }
      </style>

      <div class="news-container">
        ${`
            <div class="news-card">
              <p class="miniTitulo">${this.getAttribute("miniTitulo")}</p>
              <p class="titulo">${this.getAttribute("titulo")}</p>
              <p class="texto">${this.getAttribute("texto")}</p>
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

export default News;