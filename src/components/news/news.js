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
          .news {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
          }
        </style>
        <div class="news">
          <p>${this.getAttribute('miniTitulo')}</p>
          <p>${this.getAttribute('titulo')}</p>
          <p>${this.getAttribute('texto')}</p>
          <img src="${this.getAttribute('circuloimg')}"></img> 
          <p>${this.getAttribute('autor')}</p>
          <p>${this.getAttribute('fecha')}</p>
  
        </div>
      `;
    }
  }
  
  export default News;