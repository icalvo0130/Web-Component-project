class News extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
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
          <p>${this.getAttribute('miniTitulo2')}</p>
          <p>${this.getAttribute('titulo2')}</p>
          <p>${this.getAttribute('texto')}</p>
          <img src="${this.getAttribute('circuloimg')}"></img> 
          <p>${this.getAttribute('autor2')}</p>
          <p>${this.getAttribute('fecha2')}</p>
  
        </div>
      `;
    }
  }
  
  export default News;