var bicicleta = require('../../models/bicicleta');
var request = require('request');
var server = require('../../bin/www');

describe('bicicleta API', ()=>{
    describe('GET BICICLETAS /', ()=>{
        it('Status 200', ()=>{
            expect(bicicleta.allBicis.length).toBe(0);
            var a = new bicicleta(1,'rojo', 'urbana', [-34.62522093744632, -58.391224431409206]);
            bicicleta.add(a);

            request.get('http://localhost:3000/api/bicicletas', function(error, response, body){
                expect(response.statusCode).toBe(200);
            });
        });
    });

    describe('POST BICICLETAS /create', ()=>{
        it('STATUS 200', (done)=>{
            var headers = {'content-type': 'aplication/json'};
            var aBici = '{"id": 10, "color": "rojo", "modelo": "urbano", "lat": -34, "lng": -54 }';

            request.post({
                headers: headers,
                url: 'http://localhost:3000/api/bicicletas/create',
                body: aBici
                }, function(error, response, body){
                expect(response.statusCode).toBe(200);
                expect(bicicleta.findById(10).color).toBe("rojo");
                done();
            });
        });
    });

});