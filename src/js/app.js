import Search from './models/Search';
import Cities from './models/Cities';
import * as searchView from './views/searchView';
import { elements, removeLoader, renderLoader } from './views/base';
// data-simplebar data-simplebar-auto-hide="false"
import  SimpleBar from 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.

const state = {};
state.cities = new Cities();

/* ******************** */
// SEARCH CONTROLLER
/* ******************** */
const controlSearch = async () => {
    const query = searchView.getInput();
    

    if(query) {
        state.search = new Search(query);
        searchView.cleanInput();
        searchView.clearWeather();
        let simplebar = document.querySelector('.simplebar-content');
        renderLoader();

        try {
            await state.search.getResults();
            removeLoader();
            let citi, citiIs;
            
            if(state.search.name == undefined) {
                console.log('Jest error');
            }
            else {

                citiIs = state.cities.isCities(state.search.name);
                if(citiIs) {
                    citi = state.cities.addCitie(state.search.name);
                    if(citi) {
                        if(simplebar === null) {
                            searchView.renderCity(state.search, citi);
                            new SimpleBar(elements.showCities, { autoHide: false });
                            simplebar = document.querySelector('.simplebar-content');
                        } else {
                            searchView.renderCityOnBar(state.search, citi);
                        }
                    } else {
                        console.log('Error');
                    }
                }
                searchView.renderWeatcher(state.search);
                

               
            }
            
        } catch(err) {
            console.log(err);
            removeLoader();
        }
    }
};

/* ******************** */
// CITIES HISTORY CONTROLLER
/* ******************** */

const contronCities = async (query) => {
    if(query) {
        state.search = new Search(query);
        searchView.cleanInput();
        searchView.clearWeather();
        let simplebar = document.querySelector('.simplebar-content');
        renderLoader();

        try {
            await state.search.getResults();
            removeLoader();
            
            if(state.search.name == undefined) {
                console.log('Jest error');
            }
            else {
                searchView.renderWeatcher(state.search);
            }
            
        } catch(err) {
            console.log(err);
            removeLoader();
        }
    }
}

elements.showCities.addEventListener('click', e => {

    const element = e.target;
    let citi;
    if(element.className === 'cities__item') {
        citi = state.cities.searchCiti(Number(element.id));
    } else if (element.parentElement.className === 'cities__item') {
        
        citi = state.cities.searchCiti(Number(element.parentElement.id));
    }
    contronCities(citi);
});

elements.searchButton.addEventListener('click', () => {
    controlSearch();
});
