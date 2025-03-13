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
                miniTitulo="${news.miniTitulo}"
                titulo="${news.titulo}" 
                texto="${news.texto}"
                circuloimg="${news.circuloimg}"
                autor="${news.autor}"
                fecha="${news.fecha}">
                </news-element>
            `).join('')}
        </ul>
        `;
    }
}
export default NewsList;