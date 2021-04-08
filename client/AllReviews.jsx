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
        <strong className="mediumFont" > {review.headLine} </strong>
        <div className="smallFont review"> {review.review}</div>
        <strong className="mediumFont" > {review.author}</strong>
        <div className="buttonContainer"><button className="helpfulButton">HELPFUL({review.helpFull})</button></div>
        <hr/>
      </div>
    )})
  } else {
    var reviews = <div> loading reviews </div>
    var rating = 0
  }
  return (
      <div id ="allReviews">
        <div className="smallFont" id="productRating" > Overall Rating
        <span className="rating" > {props.reviews.product_overall_rating} {createStars(rating)} </span>
        </div>
        <hr/>
        <div className ="space"> </div>
        <button className="reviewButton"> WRITE A REVIEW </button>
        <div id = "allReviews">{reviews}</div>
      </div>
    )
}
export default AllReviews