'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema); //por lo general mongose pone el nombre de la entidad (Project) en minusculas y en plural de tal forma que quedaria (projects)