class Header extends HTMLElement {
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
        header {
          background-color: #333;
          color: white;
          padding: 1rem;
          text-align: center;
        }
      </style>
      <header>
        <h1>Blog</h1>
        <p>Stay in the loop with the latest about our products</p>
      </header>
    `;
  }
}

export default Header;