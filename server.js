var express = require('express');


var app = express();
var port = process.env.PORT || 8004;
var path = require('path');
var helpers = require('./database.js')
var mongoose = require('./database.js').mongoose

app.use(express.static(path.resolve(__dirname + '/client/dist')))

require('dotenv').config();

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
  console.log('docker db connected')
  res.send('db is connected')
  })
  .catch((err) => {
    console.log('docker db not connected ', err)
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
  res.send('12:20pm')

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
  console.log('id ->',req.params.id)
  res.sendFile(__dirname + '/client/dist/index.html')
})

app.get('/:id', function (req, res) {
  console.log('id ->',req.params.id)
  res.sendFile(__dirname + '/client/dist/index.html')
})


app.post('/:id', function (req, res) {
  var id = req.params.id
  helpers.getReviewsForProductId(id)
  .then( (data) => {
    console.log('data -> ', data)
    res.send(data)
  })
  .catch( (err) => {
    console.log('err -> ', err)
    res.send(err)
  })
})

app.listen(port, () => { console.log(`app is listening on port ${port}`)})


module.exports = {
  app: app
}