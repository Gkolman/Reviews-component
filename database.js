const mongoose = require('mongoose');
var faker = require('faker');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!')
});
var customId = 0
const reviewsSchema = new mongoose.Schema({
  product_overall_rating: Number,
  product_reviews: Array,
  custom_id: Number
});

const reviews = mongoose.model('reviews', reviewsSchema);
var randomNum = (min, max) => { return Math.floor(Math.random() * (max - min)) + min }
var getLastReview = () => {return reviews.find().sort({_id:-1}).limit(1);}
var createNewProduct = (rating,allReviews) => {
  getLastReview()
  .then(data => {
    var newId;
    if (!data[0]) {
      newId = 0
    } else {
      newId = data[0].custom_id + 1
    }
    const product = new reviews({
      product_overall_rating: rating || 0,
      product_reviews: allReviews || [],
      custom_id: newId
      });
    product.save(function (err) {
    if (err) return console.error(err);
    })
})
.catch(error => console.log('error -> ', error))
}
var getReviewsForProductId = (id) => {return reviews.find({custom_id: id})}
var addReviewToProductId = (review,id) => {
  getReviewsForProductId(id)
  .then(data => {
    data[0].product_reviews.push(review)
    data[0].save()
    .then(data => console.log('working'))
  })
}
var seeding = (size) => {
  var i = 0
  console.time('while')
  while (i < size) {
    var product_reviews = []
    var ratings = 0
    var j = 0
    while (j < 9) {
      j++
      var review = {
        author : faker.internet.userName(),
        rating: randomNum(5,10) / 2,
        review: faker.lorem.paragraph()
      }
      ratings += review.rating
      product_reviews.push(review)
    }
    var product_overal_rating = ratings / product_reviews.length
    createNewProduct(product_overal_rating.toFixed(1), product_reviews)
    i++
  }
}

//
// reviews.find()
// .then(data => console.log('data in db ->', data))
// .catch(err => console.log('err  ->', err))

module.exports = {
  createNewProduct: createNewProduct,
  getReviewsForProductId: getReviewsForProductId

}