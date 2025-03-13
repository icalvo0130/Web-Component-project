import getCuadros from "./getCuadros.js";

class CuadrosLists extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    
    const informacioCuadros = getCuadros();
    this.shadowRoot.innerHTML = `
    <ul>
      ${informacioCuadros.map((cuadro) => `
         <cuadros-element
         imagenCuadro="${cuadro.imagenCuadro}"
         miniTitulo="${cuadro.miniTitulo}"
         titulo="${cuadro.titulo}" 
         descripcion="${cuadro.descripcion}"
         autor="${cuadro.autor}"
         fecha="${cuadro.fecha}">
          </cuadros-element>
  
      `).join('')}
    </ul>
    `;
  }
}

export default CuadrosLists;