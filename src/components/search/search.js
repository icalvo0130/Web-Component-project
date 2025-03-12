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
        .search {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 1rem 0;
        }
      </style>
      <div class="search"></
    `;
    }
    }

export default Search;