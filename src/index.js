import Header from './components/header/header.js';
import CategoriasList from './components/categorias/CategoriasList.js';
import Search from './components/search/Search.js';
import CuadrosList from './components/cuadros/CuadrosList.js';
import Cuadros from './components/cuadros/Cuadros.js';
import News from './components/news/News.js';
import NewsList from './components/news/NewsList.js';
import NumeracionPag from './components/numeracionPag/NumeracionPagList.js';

customElements.define('header-element', Header);

customElements.define('categorias-list', CategoriasList);

customElements.define('search-element', Search);

customElements.define('cuadros-list', CuadrosList);

customElements.define('cuadros-element', Cuadros);

customElements.define('news-element', News);

customElements.define('news-list', NewsList);

customElements.define('numeracionpag-element', NumeracionPag);



