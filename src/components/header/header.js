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
          color: Black;
          padding: 1rem;
          font-family: 'arial', sans-serif;
          margin-left: 45px;
        }
        h1 {
          font-size: 55px;
          margin: 0;
        }
        p {
          font-size: 15px;
          margin: 10px;
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