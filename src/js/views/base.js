export const elements = {
    searchInput: document.querySelector('.search__input-js'),
    searchButton: document.querySelector('.search__button-js'),
    showWeather: document.querySelector('.weather'),
    showCities: document.querySelector('.cities')
};

export const removeLoader = () => {
    const loader = document.querySelector('.loader');
    if(loader) {
        loader.parentElement.removeChild(loader);
    }
}

export const renderLoader = () => {
    const markup = `
    <div class="loader">
        <img src="img/basic_clessidre.png" alt="loading icon">   
        <div class="loader__back"></div> 
    </div>
    `;

    elements.showWeather.insertAdjacentHTML('beforeend', markup);
}
