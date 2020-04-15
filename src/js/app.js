import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

const state = {};

/* ******************** */
// SEARCH CONTROLLER
/* ******************** */
const controlSearch = async () => {
    const query = searchView.getInput();

    if(query) {
        state.search = new Search(query);

        searchView.cleanInput();

        try {
            state.search.getResults();
        } catch(err) {
            console.log(err);
        }
    }
}

elements.searchButton.addEventListener('click', () => {
    controlSearch();
});







// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "http://api.weatherstack.com/current?access_key=b7a50426b21779f17b83e2726da3d590&query=Warsaw";

// fetch(proxyurl + url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data["request"]);
//         console.log(data["location"]);
//         console.log(data["current"]["temperature"]);
//     })
//     .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))