var Usuario = require('../models/usuario');
var Token = require('../models/token');
const usuario = require('../models/usuario');

module.exports = {
    confirmation_get: function(req, res, next){
        Token.findOne({ token: req.params.token}, function( err, token){
            if(!token) return res.status(400).send({type : 'not-verified', msg: 'No encontramos usuario con este token, quizás haya expirado'});
            Usuario.findById(token._userID, function(err, usuario){
                if(!usuario) return res.status(400).send({ msg: "no encontramos un usuario con este Token"});
                if(usuario.verificado) return res.redirect('/usuarios');
                usuario.verificado = true;
                usuario.save(function(err){
                    if (err) {return res.status(500).send({msg: err.message}); }
                    res.redirect('/');
                });
            });            
        });
    },
}