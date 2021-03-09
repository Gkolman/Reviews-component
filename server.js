var express = require('express');
var app = express();
var port = 3000;
var path = require('path');

var helpers = require('./database.js')
app.use(express.static(path.resolve(__dirname + '/client/dist')))
app.get('/',(req,res) => {
  console.log('server connection is valid')
  res.send('working')
})

// app.use('/', function (req, res, next) {
//   console.dir(req.originalUrl) // '/admin/new?sort=desc'
//   console.dir(req.baseUrl) // '/admin'
//   console.dir(req.path) // '/new'
//   console.dir(req.route) // '/new'
//   // sned current url to client somehow
//   // res.send(req.path.slice(1))
//   res.send(req.path.slice(1))
//   // next()
// })


app.get('/:id', function (req, res) {
  console.log('path -> ', req.path)
  console.log('id ->', req.params.id)
  res.sendFile(__dirname + '/client/dist/index.html')
})

app.listen(port, () => { console.log(`app is listening on port ${port}`)})