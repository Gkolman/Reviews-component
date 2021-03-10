import React from 'react'
import HelpfullButton from './HelpfulButton.jsx'
var AllReviews = (props) => {
  if (props.reviews.product_reviews) {
  var reviews = props.reviews.product_reviews.map( (review,i) => {
    return (
      <div key={i}>
        <h3> Rating: {review.rating} </h3>
        <h4> Review: {review.review}</h4>
        <h3> Name : {review.author}</h3>
        <HelpfullButton/>
      </div>
    )})
  } else {
    var reviews = <div> loading </div>
  }
  // iterate through all reviews and return a template of how each review should look
  return (
      <div>
       <h2> Product Rating: {props.reviews.product_overall_rating} </h2>
        {reviews}
      </div>
    )
}

export default AllReviews