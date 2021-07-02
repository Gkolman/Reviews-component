var {app} = require('./serverEndPoints.js')
var port = process.env.PORT || 8004;
// this is exported and started in a different file to support testing using supertest
// with out it, supertest will inherit the port number instead of assigning a random one;
// and api tests will fail because of a port conflict
app.listen(port, () => { console.log(`app is listening on port ${port}`)})