var bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

bicicleta.prototype.toString = function(){
    return 'id: ' + this.id + ' | color: ' + this.color;
}

bicicleta.allBicis = [];
bicicleta.add = function (aBici){
    bicicleta.allBicis.push(aBici);
}

bicicleta.findById = function(aBiciId){
    var aBici = bicicleta.allBicis.find(x => x.id== aBiciId);
    if(aBici)
        return aBici
    else
        throw new Error('no existe una bicicleta con el id ${aBiciId}');
}

bicicleta.removeById = function(aBiciId){
    for(var i = 0; i < bicicleta.allBicis.length; i ++){
        if(bicicleta.allBicis[i].id == aBiciId){
            bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}


var a = new bicicleta(1,'rojo', 'urbana', [-34.62522093744632, -58.391224431409206]);
var b = new bicicleta(2,'verde', 'terreno', [-34.62671341867947, -58.395174895773]);

bicicleta.add(a);
bicicleta.add(b);

module.exports = bicicleta;