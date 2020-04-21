import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const cleanInput = () => elements.searchInput.value = '';

export const clearWeather = () => {
    elements.showWeather.innerHTML = '';
    elements.showWeather.classList.add('weather-js');
};

export const renderWeatcher = weather => {

     const markup = `
        <div class="weather__city u-center-text u-margin-bottom-medium">
        <h2 class="weather__city-name">${weather.query}</h2>
        </div>
        <div class="weather__desc">
        <img src="${weather.weather_icons}" class="weather__desc-img" alt="desc icon">
        <div class="weather__desc-inf">${weather.weather_descriptions}</div>
        </div>
        <div class="container">
        <div class="weather__location">
            <h3 class="weather__h3">Location:</h3>
            <table class="weather__table">
                <tr>
                    <th>Name:</th>
                    <td>${weather.name}</td>
                    <td></td>
                </tr>
                <tr>
                    <th>Country:</th>
                    <td>${weather.country}</td>
                    <td></td>
                </tr>
                <tr>
                    <th>Coord:</th>
                    <td>lat: ${weather.lat}</td>
                    <td>lon: ${weather.lon}</td>
                </tr>
                <tr>
                    <th>Timezone:</th>
                    <td>${weather.timezone_id}</td>
                    <td></td>
                </tr>
                <tr>
                    <th>Local time:</th>
                    <td>${weather.localtime}</td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div class="weather__info">
            <h3 class="weather__h3">Weatcher:</h3>
            <table class="weather__table">
                <tr>
                    <th>Temperature:</th>
                    <td>${weather.temperature} &#8451;</td>
                </tr>
                <tr>
                    <th>Wind speed:</th>
                    <td>${weather.wind_speed}</td>
                </tr>
                <tr>
                    <th>Wind degree:</th>
                    <td>${weather.wind_degree}</td>
                </tr>
                <tr>
                    <th>Pressure:</th>
                    <td>${weather.pressure}</td>
                </tr>
                <tr>
                    <th>Humidity:</th>
                    <td>${weather.humidity}</td>
                </tr>
                <tr>
                    <th>Cloudcover:</th>
                    <td>${weather.cloudcover}</td>
                </tr>
                <tr>
                    <th>UV index:</th>
                    <td>${weather.uv_index}</td>
                </tr>
                <tr>
                    <th>Visibility:</th>
                    <td>${weather.visibility}</td>
                </tr>
            </table>
        </div>
        </div>
    `

    if(weather) {
        elements.showWeather.classList.remove('weather-js');
        elements.showWeather.insertAdjacentHTML('beforeend', markup);
    } else {
        console.log('Nie ma');
    }
    
};

export const renderCity = (weather, city) => {

    const markup = `
    <div class="cities__item" id="${city.id}">
        <h3>${weather.name}</h3>
        <p>${weather.temperature} &#8451;</p>
        <img src="${weather.weather_icons}" class="cities__icon" alt="desc icon">
    </div>
    `;

    elements.showCities.insertAdjacentHTML('afterbegin', markup);
};

export const renderCityOnBar = (weather, city) => {
    const markup = `
    <div class="cities__item" id="${city.id}">
        <h3>${weather.name}</h3>
        <p>${weather.temperature} &#8451;</p>
        <img src="${weather.weather_icons}" class="cities__icon" alt="desc icon">
    </div>
    `;

    document.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', markup);
};