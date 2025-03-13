import getNews from "./getNews.js";

class NewsList extends HTMLElement {    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const news = getNews();
        this.shadowRoot.innerHTML = `
        <ul>
            ${news.map((news) => `
                <news-element
                miniTitulo2="${news.miniTitulo2}"
                titulo2="${news.titulo2}" 
                texto="${news.texto}"
                circuloimg="${news.circuloimg}"
                autor2="${news.autor2}"
                fecha2="${news.fecha2}">
                </news-element>
            `).join('')}
        </ul>
        `;
    }
}
export default NewsList;