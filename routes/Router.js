// Se realizar para enlazar las operaciones sobre el recurso Movie con los métodos HTTP. 
module.exports = function(app){

    var Movie = require('../models/movie');
    var MovieCinema = require('../models/cinemaMovie');
    var MovieTheater = require('../models/movieTheater');
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
	Movie.find({id:req.params.id}).select('id title description duration urlImage genre format director stars cast urlVideo -_id').exec(function(error,movie){
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
	MovieCinema.find({idMovie:req.params.idMovie}).select('idMovie cinema -_id').exec(function(error,movie){
    	if(movie!=null){
    		res.send(movie);
    	}
    	else {
    		res.send(404,'No hay cinemas para la pelicula consultada');
    	}
    })};
	//Asociar pelicula a cinemas
    createMovieCinema=function(req,res){
        var cinemaMovie = new MovieCinema({idMovie: req.body.idMovie, cinema: req.body.cinema});
        cinemaMovie.save();
        res.end();
	};


        //Asociar funciones al teatro y cinemas
    createMovieTheater=function(req,res){
        console.log('Entro acá 2');
        var movieTheater = new MovieTheater({idMovie: req.body.idMovie, idCinemaMovie:req.body.idCinemaMovie,idMovieTheater: req.body.idMovieTheater});
        movieTheater.save();
        res.end();
    };

    //Obtiene la información asociada a una pelicula y a un cinema.
    getMovieTheater=function(req,res){
        MovieTheater.find({idMovie:req.params.idMovie,idCinemaMovie:req.params.idCinemaMovie}).select('idMovie idCinemaMovie idMovieTheater -_id').exec(function(error,movieTheater){
            if(movieTheater!=null){
                res.send(movieTheater);
            }
            else{
                res.send(404,'No hay información asociada');
            }
        })
    };

//Redireccionamiento peticiones
    app.post('/movie', createMovie);
    app.get('/movie', listMovie);
    app.get('/movie/:id', getMovie);
    app.get('/cinema/:idMovie', getMovieCinema);
    app.post('/cinema', createMovieCinema);
    app.post('/movieTheater/',createMovieTheater);
    app.get('/movieTheater/:idMovie/:idCinemaMovie',getMovieTheater);
     

}

