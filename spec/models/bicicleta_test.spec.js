var mongoose = require('mongoose');
var bicicleta = require('../../models/bicicleta');

describe('Testing Bicicletas', function(){
    beforeEach(function(done){
        var mongoDB = 'mongodb://localhost/testdb';
        mongoose.connect(mongoDB, {useNewUrlParser : true})

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function(){
            console.log('we are connected to the database');
            done();
        });
    });

    afterEach(function(done){
        bicicleta.deleteMany({}, function(err, success){
            if(err) console.log(err);
            done();
        });
    });

    describe('Bicicleta.Createinstance', ()=>{
        it('Crea una instancia de bicicleta', ()=> {
            var bici= bicicleta.createInstance(1, "verde", "urbana", [-34.5, -54.5]);
            expect(bici.code).toBe(1)
            expect(bici.color).toBe("verde")
            expect(bici.modelo).toBe("urbana")
            expect(bici.ubicacion[0]).toEqual(-34.5);
            expect(bici.ubicacion[1]).toEqual(-54.5);

        });
    });

    describe('Bicicleta.allBicis', () =>{
        it('comienza vacia', (done) => {
            bicicleta.allBicis(function(err, bicis){
                expect(bicis.length).toBe(0);
                done();
            });

        });
    });
});

// beforeEach(()=>{ bicicleta.allBicis = []; });

// describe('bicicleta, allBicis', () => {
//     it('comienza vacia', () => {
//         expect(bicicleta.allBicis.length).toBe(0);
//     });
// });

// describe('bicicleta.add', ()=>{
//     it('agregamos una', ()=>{
//         expect(bicicleta.allBicis.length).toBe(0);
//         var a = new bicicleta(1,'rojo', 'urbana', [-34.62522093744632, -58.391224431409206]);
//         bicicleta.add(a);
//         expect(bicicleta.allBicis.length).toBe(1);
//         expect(bicicleta.allBicis[0]).toBe(a);
//     });
// });

// describe('bicleta.findById', ()=>{
//     it('debe devolver la bici con id 1', ()=> {
//         expect(bicicleta.allBicis.length).toBe(0);
//         var aBici = new bicicleta(1, "verde", "urbana");
//         var aBici2 = new bicicleta(2, "roja", "montaña");
//         bicicleta.add(aBici);
//         bicicleta.add(aBici2);
//         var targetbici = bicicleta.findById(1);
//         expect(targetbici.id).toBe(1);
//         expect(targetbici.color).toBe(aBici.color);
//         expect(targetbici.modelo).toBe(aBici.modelo);

//     });
// });