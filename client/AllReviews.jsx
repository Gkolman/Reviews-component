import React from 'react'
import HelpfullButton from './HelpfulButton.jsx'
import createStars from './StarTemplate.js'

var AllReviews = (props) => {
  console.log('window ->', window.location.href)
  if (props.reviews.product_reviews) {
  var rating = props.reviews.product_overall_rating
  var reviews = props.reviews.product_reviews.map( (review,i) => {
    return (
      <div key={i}>
    {createStars(review.rating, true)}
        <div className="smallFont">  {review.date} </div>
        <div className="mediumFont" > {review.headLine} </div>
        <div className="smallFont review"> {review.review}</div>
        <div className="mediumFont author" > {review.author}</div>
        <button> <HelpfullButton/> {review.helpFull} </button>
        <hr/>
      </div>
    )})
  } else {
    var reviews = <div> loading reviews </div>
    var rating = 0
  }
  return (
      <div id ="allReviews">
        <div className="smallFont" id="productRating" > overall Rating {props.reviews.product_overall_rating} {createStars(rating)}</div>
        <hr/>
        <button className="reviewButton"> write a review </button>
        <div id = "allReviews">{reviews}</div>
      </div>
    )
}
export default AllReviews