//Esquema para Movie
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Esquema para Movie
var movieSchema = new Schema({
    id:Number,
    title: String,
    description: String,
    duration: String    

});

//Exportar esquema
module.exports = mongoose.model('Movie', movieSchema);
