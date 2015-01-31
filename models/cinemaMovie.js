//Esquema para cinema
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Esquema para MovieTheater
var cinemaMovieSchema = new Schema({
    idPelicula:String,
    cinema:[{ cinemaId:String, cinemaName: String }],
});

//Exportar esquema
module.exports = mongoose.model('MovieCinema', cinemaMovieSchema);
