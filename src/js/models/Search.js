import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const key = `b7a50426b21779f17b83e2726da3d590`
        const proxyurl = `https://cors-anywhere.herokuapp.com/`;
        const url = `http://api.weatherstack.com/current?access_key=${key}&query=${this.query}`;

        try {
            const res = await axios(url);
            this.result = res.data;
            console.log(this.result);
        } catch(error) {
            console.log(error);
        }
    }
}