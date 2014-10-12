// Se realizar para enlazar las operaciones sobre el recurso Movie con los métodos HTTP. 
module.exports = function(app){

    var Carne = require('../models/movie');

    //*Metodos para Movie*
    //crear nueva pelicula
    movie = function(req,res){
        var movie = new Movie({id: req.body.id, title: req.body.title, description: req.body.description,duration :req.body.duration});
        movie.save();
        res.end();
    };
    
    //Buscar todas las movies
    listMovies = function(req, res){
            Movie.find({}).select('id title -_id').exec(function(err, movie) {
            res.send(movie);
        });

    };

//Redireccionamiento peticiones
    app.post('/movie', movie);
    app.get('/movie', listMovie);


}
