var express = require('express');
var app = express();
var port = 3000;
var path = require('path');
var router = express.Router()

var helpers = require('./database.js')
app.use(express.static(path.resolve(__dirname + '/client/dist')))

app.get('/',(req,res) => {
  console.log('server connection is valid')
  console.log('dirname in initial -> ', __dirname)
  res.sendFile(__dirname + '/client/dist/index.html')
})

app.get('/reviews', function (req, res) {
  var id = req.query.id
  res.sendFile(__dirname + '/client/dist/index.html')
})
app.post('/reviews', function (req, res) {
  console.log('working for now')
  var id = req.query.id
  console.log('id ->,',id)
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