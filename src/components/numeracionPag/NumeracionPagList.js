import getNumeracionPag from './getNumeracionPag.js';

class NumeracionPagLists extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const numeracionPag = getNumeracionPag();
    this.shadowRoot.innerHTML = `
    <style>
        ul {
            display: flex;
            justify-content: left;
            gap: 1rem;
        }
        

    </style>
    <ul>
      ${numeracionPag.map((numerito) => `
         <li>${numerito}</li>
      `).join('')}
    </ul>
    `;
  }
}

export default NumeracionPagLists;