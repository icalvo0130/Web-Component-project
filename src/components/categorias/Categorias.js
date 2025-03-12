class Categorias extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
    static get observedAttributes() {
        return ['textoCategoria'];
      }
      
      connectedCallback() {
        this.render();
      }
    
      render() {
        this.shadowRoot.innerHTML = `
          <style>
            .categorias {
            color: #fff;
            
            }
            button {
              background-color: #f1c40f;
              border: none;
              color: white;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              margin: 4px 2px;
              cursor: pointer;
            }
          </style>
          <div class="categorias">
          <button>${this.getAttribute('textoCategoria')}</button>
          

          </div class>
        `;
      }
    }
  
  export default Categorias;