//Esquema para cinema
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Esquema para MovieTheater
var movieCinemaSchema = new Schema({
    id:String,
    company: String,
    place: String,
    movieTheater:[{	
	name:String,
	schedule:String
	}]
});

//Exportar esquema
module.exports = mongoose.model('movieCinema', cinemaSchema);