 
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  
    fName: { type: String},
    caption: { type: String, required: true },
    image: { type: String}
});

module.exports = mongoose.model('posts', postSchema);