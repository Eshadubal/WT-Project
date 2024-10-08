const mongoose = require('mongoose');

const schema =mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  image: { type: String, required: true }, 
  ytkink:{ type: String, required: true }

   
});

module.exports = mongoose.model('Recipe', schema);


