export default class Cities {
    constructor() {
        this.cities = [];
    }

    addCitie(citi) {
        if(this.cities.indexOf(citi) === -1) {
            let id;
            if(this.cities.length === 0) {
                id = 0;
            } else {
                id = this.cities[this.cities.length -1].id + 1;
            }
            const newCiti = {citi, id}

            this.cities.push(newCiti);
            console.log(this.cities);
        }
    }
};