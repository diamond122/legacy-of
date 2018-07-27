const mongoose = require('mongoose')
const express = require('express')
const geocoding = require('reverse-geocoding')
const app = express()
const bodyParser = require('body-parser')
const port = process.argv[2] || 5050

const Gallery = require('./models/Gallery')
const Shop = require('./models/Shop')
const Cart = require('./models/Cart')
const Detail = require('./models/Detail')

mongoose.connect('mongodb://localhost:27017/legacyapp')
mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
  
//UPDATE SHOP
app.post('/cart', (req, res) => {
  let cartResults = req.body
  let newCart = new Cart({
      title: cartResults.title,
      src: cartResults.src,
      price: cartResults.price
      })
  newCart.save()
    Cart.find({})
    .then(results => {
      res.send(results)
    })
  .catch(err => {
    console.log(err)
    res.status(400).json({ err })
  })
})

//NEEDS TO BE DEBUGGED

// app.get('/reverseGeocode/:address', (req, res) => {
//   const config = {
//     address: req.params.address,
//     key: 'AIzaSyCuHLfANHztaboVxc1L8OV9MIKG8sMjDDc'
//   }

//   geocoding(config, (err, data) => {
//     if(err) {
//       res.status(404).send({message: err})
//     }
//     else {
//       let convert = data['results'][0].formatted_address
//       res.send({address: convert}) 
//     }
//   })
// })

app.get('/details', (req, res) => {
  Detail.find({})
  .then(details => {
    res.json(details)
  })
  .catch(err => {
    console.log(err)
    res.status(400).json({ err })
  })
})

app.get('/gallery/photos', (req, res) => {
  Gallery.findOne({alt: 'grid'})
  .then(picObj => {
    res.json(picObj)
  })
  .catch(err => {
    console.log(err)
    res.status(400).json({ err })
  })
})

app.get('/gallery/videos', (req, res) => {
  Gallery.find({alt: 'video'})
  .then(vidObj => {
    res.json(vidObj)
  })
  .catch(err => {
    console.log(err)
    res.status(400).json({ err })
  })
})

app.get('/home', (req, res) => {
  Gallery.findOne({alt: 'background'})
  .then(bckgrnd => {
    res.json(bckgrnd)
  })
  .catch(err => {
    console.log(err)
    res.status(400).json({ err })
  })
})

app.get('/shop', (req, res) => {
  Shop.find({})
  .then(merch => {
    res.json(merch)
  })
  .catch(err => {
    res.json(err)
    res.status(400).json({ err })
  })
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to db at /legacyapp')
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})