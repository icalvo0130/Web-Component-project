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
    font-family: Arial, sans-serif;
    justify-content: flex-start; 
    gap: 10px; 
    list-style: none;
    padding: 10px;
    margin: 20px 0 0 0; 
    
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px; 
    height: 32px; 
    border-radius: 50%;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  li:hover {
    background-color: #f0f0f0;
  }

  li.active {
    background-color: black;
    color: white;
  }
</style>

<ul class="paginas">
  ${numeracionPag.map((num, index) => `
    <li class="${index === 0 ? 'active' : ''}" data-index="${index}">${num}</li>
  `).join('')}
</ul>
    `;

    
    const items = this.shadowRoot.querySelectorAll('li');
    items.forEach(item => {
      item.addEventListener('click', (event) => {
        items.forEach(i => i.classList.remove('active')); 
        event.target.classList.add('active'); 
      });
    });
  }
}

customElements.define('numeracionpag-element', NumeracionPagLists);
export default NumeracionPagLists;
