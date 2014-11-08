//Esquema para Movie
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Esquema para Movie
var movieSchema = new Schema({
    id:String,
    title: String,
    description: String,
    duration: String,
    urlImage:String,
    genre:String,
    format:String,
    director:String
});

//Exportar esquema
module.exports = mongoose.model('Movie', movieSchema);
