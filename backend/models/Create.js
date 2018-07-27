const mongoose = require('mongoose')
const Schema = mongoose.Schema

const createSchema = new Schema({
  first: String,
  last: String,
  birth: String,
  death: String,
  cause: String,
  funeral: String,
  biography: String,
  pic: String,
  phone: String,
  email: String
})
  
module.exports = mongoose.model('Create', createSchema);