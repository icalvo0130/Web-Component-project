import getCategorias from "./getCategorias.js";

class CategoriasLists extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const categorias = getCategorias();

    this.shadowRoot.innerHTML = `
    <style>
      ul {
        display: flex;
        padding: 0;
        list-style: none;
      }

      il {
      display: inline-block;
      margin: 5px;
      }

      button {
      border: transparent;
      background-color: transparent;
      padding: 10px 18px;
      border-radius: 999px;
      font-size: 12px;
      font-family: 'arial', sans-serif;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      }

      button:hover {
      background-color: #f3f4f6;

      }

      button.selected {
      border: 2px solid rgb(208, 216, 232);
      padding: 10px 18px;
      background-color:rgb(232, 240, 254);
      }

      button.selected:hover {
      background-color: rgb(255, 255, 255);
      }

      div {
        display: flex;
        items-align: center;
      }
      
    </style>
    
    <div>

      <ul>
        ${categorias.map((categoria, index) => `
          <li>
          <button class="${index === 0 ? "selected" : ""}">${categoria.textoCategoria}</button>
            </li>
        `).join(" ")}
      </ul>
      <search-element></search-element>
    </div>
    `;

    this.addEventListeners();
  }

  addEventListeners() {
    const buttons = this.shadowRoot.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
      });
    });
  }
}

export default CategoriasLists;