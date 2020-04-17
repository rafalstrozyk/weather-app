import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const key = `8f4f11e3724b4e4addca016973b56bfd`
        const proxyurl = `https://cors-anywhere.herokuapp.com/`;
        const url = `http://api.weatherstack.com/current?access_key=${key}&query=${this.query}`;

        try {
            const res = await axios(url);

            this.query = res.data.request.query;

            this.name = res.data.location.name;
            this.country = res.data.location.country;
            this.lat = res.data.location.lat;
            this.lon = res.data.location.lon;
            this.timezone_id = res.data.location.timezone_id;
            this.localtime = res.data.location.localtime;

            this.temperature = res.data.current.temperature;
            this.weather_icons = res.data.current.weather_icons;
            this.weather_descriptions = res.data.current.weather_descriptions;
            this.wind_speed = res.data.current.wind_speed;
            this.wind_degree = res.data.current.wind_degree;
            this.pressure = res.data.current.pressure;
            this.humidity = res.data.current.humidity;
            this.cloudcover = res.data.current.cloudcover;
            this.uv_index = res.data.current.uv_index;
            this.visibility = res.data.current.visibility;
        } catch(error) {
            console.log(error);
        }
    }
}