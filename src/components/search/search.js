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
      .search-container {
      right: 20px; 
      top: 50%; 
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 5px 10px;
      width: 200px;
      background-color: #f8f9fa;
      transition: border 0.3s ease;
    }

    .search-container:hover {
      border: 1px solid #8893a0; 
    }

    .search-icon {
      font-size: 16px;
      color: #666;
      margin-right: 5px;
    }

    .search-input {
      border: none;
      outline: none;
      background: transparent;
      width: 100%;
      font-size: 14px;
      color: #333;
    }

          </style>
          <search>
          <div class="search-container">
      <span class="search-icon">🔍</span>
      <input type="text" class="search-input" placeholder="Search...">
    </div>
          </search>
    `;
    }
 }

export default Search;