//Esquema para cinema
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Esquema para MovieTheater
var cinemaSchema = new Schema({
    idPelicula:String,
    cinema:movieCinema
});

//Exportar esquema
module.exports = mongoose.model('movieCinema', cinemaSchema);
