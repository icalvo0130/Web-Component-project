class NumeracionPag extends HTMLElement {
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
        .numeracion {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 1rem 0;
        }
      </style>
      <div class="numeracion"></div>
    `;
  }
}

export default NumeracionPag;