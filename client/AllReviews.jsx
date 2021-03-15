import React from 'react'
import HelpfullButton from './HelpfulButton.jsx'
var AllReviews = (props) => {
  if (props.reviews.product_reviews) {
  var reviews = props.reviews.product_reviews.map( (review,i) => {
    return (
      <div key={i}>
        <h3> Rating: {review.rating} </h3>
        <h4> date </h4>
        <h4> Review: {review.review}</h4>
        <h3> Name : {review.author}</h3>
        <HelpfullButton/>
        <hr/>
      </div>
    )})
  } else {
    var reviews = <div> loading </div>
  }
  return (
      <div >
       <h2 id="productRating" > Product Rating: {props.reviews.product_overall_rating} </h2>
        <div id = "allReviews">{reviews}</div>
      </div>
    )
}

export default AllReviews