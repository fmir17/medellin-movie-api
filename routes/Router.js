// Se realizar para enlazar las operaciones sobre el recurso Movie con los métodos HTTP. 
module.exports = function(app){

    var Movie = require('../models/movie');

    //*Metodos para Movie*
    //crear nueva pelicula
    createMovie = function(req,res){
        var movie = new Movie({id: req.body.id, title: req.body.title, description: req.body.description,duration :req.body.duration, urlImage :req.body.urlImage, genre: req.body.genre, format:req.body.format,director:req.body.director});
        movie.save();
        res.end();
    };
    
    //Buscar todas las movies
    listMovie = function(req, res){
            Movie.find({}).select('id title description urlImage genre format director _id').exec(function(err, movie) {
            res.send(movie);
        });

    };

//Redireccionamiento peticiones
    app.post('/movie', createMovie);
    app.get('/movie', listMovie);


}
