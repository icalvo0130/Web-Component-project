import getCuadros from "./getCuadros.js";

class CuadrosLists extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const informacioCuadros = getCuadros();

    const primeraFila = informacioCuadros.slice(0, 2);
    const segundaFila = informacioCuadros.slice(2);
    const segundaFilaConImagen = segundaFila.filter(cuadro => cuadro.imagenCuadro);
    const segundaFilaSinImagen = segundaFila.filter(cuadro => !cuadro.imagenCuadro);

    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
        max-width: 1200px;
        margin: auto;
      }

      .fila-grande {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        width: 100%;
        padding: 20px;
        padding-bottom: 10px;
      }

      .fila-pequeña {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
        width: 100%;
        padding: 20px;
        padding-top: 10px;
      }

      .columna-central {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .cuadro-wrapper.pequeño {
        margin-bottom: 10px;
      }
    </style>
    
    <div class="fila-grande">
      ${primeraFila.map((cuadro) => `
        <cuadros-element
          ${cuadro.imagenCuadro ? `imagenCuadro="${cuadro.imagenCuadro}"` : ''}
         miniTitulo="${cuadro.miniTitulo}" 
          titulo="${cuadro.titulo}" 
          descripcion="${cuadro.descripcion}"
          ${cuadro.circuloimg ? `circuloimg="${cuadro.circuloimg}"` : ''}
          autor="${cuadro.autor}"
          fecha="${cuadro.fecha}">
        </cuadros-element>
      `).join('')}
    </div>
    
    <div class="fila-pequeña">
      <!-- Primera columna - Cuadro con imagen -->
      <div class="cuadro-cosa-pequeña">
        ${segundaFilaConImagen.length > 0 ? `
          <cuadros-element
            imagenCuadro="${segundaFilaConImagen[1].imagenCuadro}"
            miniTitulo="${segundaFilaConImagen[1].miniTitulo}"
            titulo="${segundaFilaConImagen[1].titulo}" 
            descripcion="${segundaFilaConImagen[1].descripcion.substring(0, 70)}${segundaFilaConImagen[1].descripcion.length > 70 ? '...' : ''}"
            circuloimg="${segundaFilaConImagen[1].circuloimg}"
            autor="${segundaFilaConImagen[1].autor}"
            fecha="${segundaFilaConImagen[1].fecha}"
            tamaño="pequeño">
          </cuadros-element>
        ` : ''}
      </div>
      

      <div class="columna-central">
        ${segundaFilaSinImagen.map((cuadro) => `
          <div class="cuadro-cosa-pequeña">
            <cuadros-element
            imagenCuadro= ' '
            miniTitulo="${segundaFilaConImagen[1].miniTitulo}"
            titulo="${segundaFilaConImagen[1].titulo}" 
            descripcion="${segundaFilaConImagen[1].descripcion.substring(0, 70)}${segundaFilaConImagen[1].descripcion.length > 70 ? '...' : ''}"
            circuloimg="${segundaFilaConImagen[1].circuloimg}"
            autor="${segundaFilaConImagen[1].autor}"
            fecha="${segundaFilaConImagen[1].fecha}"
            tamaño="pequeño">
            </cuadros-element>
          </div>
        `).join('')}
      </div>
      
      <div class="cuadro-cosa-pequeña">
        ${segundaFilaConImagen.length > 1 ? `
          <cuadros-element
            imagenCuadro="${segundaFilaConImagen[1].imagenCuadro}"
            miniTitulo="${segundaFilaConImagen[1].miniTitulo}"
            titulo="${segundaFilaConImagen[1].titulo}" 
            descripcion="${segundaFilaConImagen[1].descripcion.substring(0, 70)}${segundaFilaConImagen[1].descripcion.length > 70 ? '...' : ''}"
            circuloimg="${segundaFilaConImagen[1].circuloimg}"
            autor="${segundaFilaConImagen[1].autor}"
            fecha="${segundaFilaConImagen[1].fecha}"
            tamaño="pequeño">
          </cuadros-element>
        ` : ''}
      </div>
    </div>
    `;
  }
}

export default CuadrosLists;