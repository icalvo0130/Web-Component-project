import getNews from "./getNews.js";

class NewsList extends HTMLElement {    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const news = getNews();
        this.shadowRoot.innerHTML = `
        <style>
        .item-news {
            width: 40%;
        }

        .news-container {
            display: flex;
            justify-content: center;
            gap: 10px;
            width: 90%;
            flex-wrap: wrap;
        }

        </style>
        <div class="news-container">
            ${news.map((news) => `
                <div class="item-news">
                    <news-element
                    miniTitulo="${news.miniTitulo}"
                    titulo="${news.titulo}" 
                    texto="${news.texto}"
                    circuloimg="${news.circuloimg}"
                    autor="${news.autor}"
                    fecha="${news.fecha}">
                    </news-element>
                </div>
            `).join('')}
        </div>
        `;
    }
}
export default NewsList;