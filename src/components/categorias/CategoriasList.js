import getCategorias from "./getCategorias.js";

class CategoriasLists extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    
    const textoBoton = getCategorias();
    this.shadowRoot.innerHTML = `
    <ul>
      ${textoBoton.map((categorias) => `
         <categorias-element
         textoCategoria="${categorias.textoCategoria}"> 
          </categorias-element>
      `).join('')}
    </ul>
    `;
  }
}

export default CategoriasLists;