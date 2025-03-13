class Search extends HTMLElement {
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
        search {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 1rem 0;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
        }
        icono {
          background-color: #f1c40f;
          color: white;
          padding: 0.5rem;
          border: none;
          cursor: pointer;
        }
      </style>
      <search>
      <div class="searchYlupa">
        <input type="text" placeholder="Search...">
        <icono>🔍</icono>
      </search>
    `;
    }
 }

export default Search;