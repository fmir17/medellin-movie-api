//Esquema para cinema
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Esquema para MovieTheater
var movieTheaterSchema = new Schema({
    idMovie:String,
    idCinemaMovie: String,
    idMovieTheater:[{idlocation:{address:String,city:String}},
    				{function:{idFunction:String,schedule:String,format:String}}
    				]
});

//Exportar esquema
module.exports = mongoose.model('MovieTheater', movieTheaterSchema);
