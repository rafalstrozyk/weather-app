import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

const state = {};

/* ******************** */
// SEARCH CONTROLLER
/* ******************** */
const controlSearch = async () => {
    const query = searchView.getInput();
    let data;

    if(query) {
        state.search = new Search(query);

        searchView.cleanInput();

        try {
            await state.search.getResults();
            searchView.clearWeather();
            searchView.renderWeatcher(state.search);
        } catch(err) {
            console.log(err);//ergreger
        }
    }
}

elements.searchButton.addEventListener('click', () => {
    controlSearch();
});
