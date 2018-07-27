const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detailSchema = new Schema({
  icon: String,
  title: String,
  description: String
})
  
module.exports = mongoose.model('Detail', detailSchema);