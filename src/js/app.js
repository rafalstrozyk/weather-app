import Search from './models/Search';
import Cities from './models/Cities';
import * as searchView from './views/searchView';
import { elements } from './views/base';
// data-simplebar data-simplebar-auto-hide="false"
import  SimpleBar from 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.

const state = {};

/* ******************** */
// SEARCH CONTROLLER
/* ******************** */
const controlSearch = async () => {
    const query = searchView.getInput();
    

    if(query) {
        state.search = new Search(query);
        state.cities = new Cities();
        searchView.cleanInput();
        let simplebar = document.querySelector('.simplebar-content');

        try {
            await state.search.getResults();

            console.log(state.search);

            searchView.clearWeather();
            if(state.search.name == undefined) {
                console.log('Jest error');
            }
            else {
                searchView.renderWeatcher(state.search);

                // state.cities.addCitie(state.search.name);//y
                if(simplebar === null) {
                    searchView.renderCity(state.search);
                    new SimpleBar(elements.showCities, { autoHide: false });
                    simplebar = document.querySelector('.simplebar-content');
                } else {
                    searchView.renderCityOnBar(state.search);
                }
            }
            
        } catch(err) {
            console.log(err);
        }
    }
};

elements.showCities.addEventListener('click', e => {

    const element = e.target;
    if(element.className === 'cities__item') {
        console.log('Ten item');
    } else if (element.parentElement.className === 'cities__item') {
        console.log('ten item 2');
    }
});

elements.searchButton.addEventListener('click', () => {
    controlSearch();
});
