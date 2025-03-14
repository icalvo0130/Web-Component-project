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
      position: absolute;
      right: 0;
      display: flex;
      align-items: right;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 5px 10px;
      width: 200px;
      background-color: #f8f9fa;
      transition: border 0.3s ease;
      margin-right: 135px;
  
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
      flex-grow: 1;
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