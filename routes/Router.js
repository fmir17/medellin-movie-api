// Se realizar para enlazar las operaciones sobre el recurso Movie con los métodos HTTP. 
module.exports = function(app){

    var Movie = require('../models/movie');
    var MovieCinema = require('../models/cinemaMovie');
    //*Metodos para Movie*
    //crear nueva pelicula
    createMovie = function(req,res){
        var movie = new Movie({id: req.body.id, title: req.body.title, description: req.body.description,duration :req.body.duration, urlImage :req.body.urlImage, genre: req.body.genre, format:req.body.format,director:req.body.director,stars:req.body.stars,cast:req.body.cast,urlVideo:req.body.urlVideo});
        movie.save();
        res.end();
    };
    
    //Buscar todas las movies
    listMovie = function(req, res){
            Movie.find({}).select('id title urlImage -_id').exec(function(err, movie) {
            res.send(movie);
        });

    };

  //Obtener pelicula
    getMovie = function(req,res){
	Movie.find({id:req.params.id}).select('id title description urlImage genre format director stars cast urlVideo -_id').exec(function(error,movie){
	if(movie!=null){
		res.send(movie);
	}
	else {
		res.send(400,'Pelicula Inexistente');
	      }
	})
    };
	
	//Obtener todos los cinemas
    getMovieCinema=function(req,res){

	MovieCinema.find({idMovie:req.params.idMovie}).select('idPelicula cinema -_id').exec(function(error,movie){
	if(movie!=null){
		res.send(movie);
	}
	else {
		res.send(400,'No hay cinemas para la pelicula consultada');
	      }
	})

	};
	//Asociar pelicula a cinemas
    createMovieCinema=function(req,res){
        var movieCinema = new MovieCinema({idPelicula: req.body.idPelicula, cinema: req.body.cinema});
        movie.save();
        res.end();
	};

//Redireccionamiento peticiones
    app.post('/movie', createMovie);
    app.get('/movie', listMovie);
    app.get('/movie/:id', getMovie);
    app.get('/cinema/:idMovie', getMovieCinema);
    app.post('/cinema', createMovieCinema);

 

}
