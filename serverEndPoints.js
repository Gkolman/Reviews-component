var express = require('express');

var app = express();
var path = require('path');
var helpers = require('./database.js')
var mongoose = require('./database.js').mongoose
var cors = require("cors");
app.use(cors());

require('dotenv').config();

app.use(express.static(path.resolve(__dirname + '/client/dist')))

app.use('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});




var password = process.env.mongoPassword || 'no password'
var username = process.env.mongoUsername || 'no username'

console.log('env password -> ', password)
console.log('env username -> ', username)


var mongoAtlasUrl=`mongodb+srv://${username}:${password}@cluster0.73bwo.mongodb.net/FEC?retryWrites=true&w=majority`

// console.log('here ->', mongoAtlas)

const DB_URI = "mongodb://mongo:27017/reviews-service"

app.get('/db',(req,res) => {
  mongoose.connect(mongoAtlasUrl, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
  console.log('mongo db connected')
  res.send('db is connected')
  })
  .catch((err) => {
    console.log('mongo db not connected ', err)
    res.send(`db did not connect ${err}, ${username} ${password}`)
  })
})
app.get('/',(req,res) => {
  console.log('server connection is valid')
  res.sendFile(__dirname + '/client/dist/index.html')
})
app.get('/time',(req,res) => {
  console.log('server connection is valid')
  // var data = `username -> ${username} , password -> ${password}`
  res.send(Date.now())

})
app.get('/data',(req,res) => {
  console.log('server connection is valid')
  helpers.reviews.find()
  .then(data => {
    console.log('data in db ->', data)
    res.send(data)
  })
  .catch(err => {
    console.log('err  ->', err)
    res.send(`error getting data from db ${err}` )
  })
})
app.get('/bundle',(req,res) => {
  console.log('server connection is valid')
  res.sendFile(__dirname + '/client/dist/bundle.js')
})

app.get('/:id', function (req, res) {
  var id = parseInt(req.params.id)
  res.sendFile(__dirname + '/client/dist/index.html')
})

app.post('/:id', function (req, res) {
  var id = parseInt(req.params.id).toString()
  if (id === 'NaN') {
    console.log('id was NaN')
    res.end()
  }
  else {
    console.log('id in post request -> ', id)
    helpers.getReviewsForProductId(id)
    .then( (data) => {
      res.send(data)
    })
    .catch( (err) => {
      console.log(`err getting data for id ${id}-> `, err)
      res.send(err)
    })
  }
})
// app.listen(port, () => { console.log(`app is listening on port ${port}`)})
module.exports = {
  app: app
}