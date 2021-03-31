const db = require('./db');

class Restaurant {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    save(cb) {
        db.run("INSERT INTO Restaurant(name, image) VALUES(?, ?)", [this.name, this.image], cb);
    }
}

module.exports = Restaurant;