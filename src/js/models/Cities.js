export default class Cities {
    constructor() {
        this.cities = [];
    }

    addCitie(citi) {
        
        let id;
        let newCiti;
        if(this.cities.length === 0) {
            id = 0; 
        } else {
            id = this.cities[this.cities.length -1].id + 1;
        }
        
        newCiti = {citi, id}
        this.cities.push(newCiti);
        return newCiti;
    
    };

    isCities(citiName) {
        let citiIs = true;
        if(this.cities.length > 0) {
            this.cities.forEach(e => {
                if(e.citi === citiName) {
                    citiIs = false;
                } 
            });
        }

        return citiIs;
    }

    searchCiti(id) {
        let citiName;
        this.cities.forEach(e => {
            if(e.id === id) {
                citiName = e.citi;
            }
        });

        return citiName;
    }
}