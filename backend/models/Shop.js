const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopSchema = new Schema({
  title: String,
  src: String,
  price: Number
})
  
module.exports = mongoose.model('Shop', shopSchema);