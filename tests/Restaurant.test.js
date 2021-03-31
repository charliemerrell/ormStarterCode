const db = require('../src/db');
const Restaurant = require('../src/Restaurant');

describe('Basic restaurant tests', () => {
    beforeAll((done) => {
        db.run('CREATE TABLE IF NOT EXISTS Restaurant(id INTEGER PRIMARY KEY, name TEXT, image TEXT)', done);
    });
    test('can save restaurant data', (done) => {
        const restaurant = new Restaurant('Spice Merchant', 'www.unsplash/jkalsjdka');
        restaurant.save(() => {
            db.get('SELECT * FROM Restaurant WHERE name=?', 'Spice Merchant', (err, row) => {
                expect(row.image).toEqual('www.unsplash/jkalsjdka');
                expect(row.id).toEqual(1);
                done();
            });
        });
    });
});