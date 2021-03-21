var express = require('express');
var app = express();
var port = 3000;
var path = require('path');

var helpers = require('./database.js')
app.use(express.static(path.resolve(__dirname + '/client/dist')))

app.get('/',(req,res) => {
  console.log('server connection is valid')
  res.sendFile(__dirname + '/client/dist/index.html')
})
app.get('/bundle',(req,res) => {
  console.log('server connection is valid')
  res.sendFile(__dirname + '/client/dist/bundle.js')
})
app.get('/:id', function (req, res) {
  console.log('id ->',req.params.id)
  res.sendFile(__dirname + '/client/dist/index.html')
})
app.post('/:id', function (req, res) {
  console.log('working for now')
  console.log()
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