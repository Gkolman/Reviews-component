const mongoose = require('mongoose');
var faker = require('faker');
require('dotenv').config();

var pass = process.env.mongoPassword || 'no username'
var user = process.env.mongoUsername || 'no password'
var mongoAtlasUrl=`mongodb+srv://${user}:${pass}@cluster0.73bwo.mongodb.net/FEC?retryWrites=true&w=majority`
const DB_URI = "mongodb://127.0.0.1:27017/reviews-service"
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
console.log('mongo db connected')
})
.catch((err) => {
  console.log('mongo db not connected ', err)
})

const db = mongoose.connection;
const reviewsSchema = new mongoose.Schema({
  product_overall_rating: Number,
  product_reviews: Array,
  custom_id: Number
});
const reviews = mongoose.model('reviews', reviewsSchema);
var randomNum = (min, max) => { return Math.floor(Math.random() * (max - min)) + min }
var getReviewsForProductId = (id) => {return reviews.find({custom_id: id})}

var makeDate = () => {
  var months = ['Dec', 'Jan', 'Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
  var day = randomNum(1,30);
  var month = months[randomNum(0,11)]
  var year = randomNum(2017,2021)
  if(day < 10) day = `0${day}`
  return `${day} ${month} ${year}`
}

var createNewProduct = async (rating,allReviews, id) => {
  const product = new reviews({
    product_overall_rating: rating || 0,
    product_reviews: allReviews || [],
    custom_id: id
    });
  await product.save(function (err) {if (err) return console.error(err)})
}

var addFakeProductToDb = (id) => {
    var product_reviews = []
    var ratings = 0
    // i = number of reviews per product
    for ( i = 0; i < 10; i++ ) {
      var review = {
        rating: randomNum(5,10) / 2,
        date: makeDate(),
        headLine: faker.lorem.sentence(),
        review: faker.lorem.paragraph(),
        author : faker.internet.userName(),
        helpFull: randomNum(0,100)
      }
      ratings += review.rating
      product_reviews.push(review)
    }
    var product_overal_rating = ratings / product_reviews.length
    createNewProduct(product_overal_rating.toFixed(1), product_reviews, id)
}
var seedDb = (size) => {
  if (!size) return
  if (typeof(size) !== 'number') return
  if (size < 1) return
  for (var i = 1; i <= size; i++) {addFakeProductToDb(i)}
}

getReviewsForProductId(1)
.then((reviews) => {
  if (!reviews[0]) {seedDb()}
})
.catch((error) => {console.log('could not get reviews for id ->', error)})

// seedDb(100)


// invoke seedDb(num) num being the amount of fake products to create in db
// seedDb(100)

// reviews.find()
// .then(data => console.log('data in db ->', data))
// .catch(err => console.log('err  ->', err))

module.exports = {
  reviews: reviews,
  createNewProduct: createNewProduct,
  getReviewsForProductId: getReviewsForProductId,
  mongoose : mongoose
}