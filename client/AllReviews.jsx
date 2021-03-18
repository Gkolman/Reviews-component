import { json } from 'body-parser'
import React from 'react'
import HelpfullButton from './HelpfulButton.jsx'
import createStars from './StarTemplate.js'

var AllReviews = (props) => {

  console.log('props now look like -> ', props.reviews)

  if (props.reviews.product_reviews) {
  var rating = props.reviews.product_overall_rating
  var reviews = props.reviews.product_reviews.map( (review,i) => {
    return (
      <div key={i}>
    {createStars(review.rating, true)}
        <h4> date {review.date} </h4>
        <h4> headline {review.headLine} </h4>
        <h4> Review: {review.review}</h4>
        <h3> Name : {review.author}</h3>
        <button> <HelpfullButton/> {review.helpFull} </button>
        <hr/>
      </div>
    )})
  } else {
    var reviews = <div> loading reviews </div>
    var rating =  <div> loading rating </div>

  }

  return (
      <div id = "allReviewsClass">
       <h2 id="productRating" > overall Rating: {props.reviews.product_overall_rating}
       {createStars(rating)}
       </h2>
       <hr/>
       <button className="reviewButton"> write a review </button>
        <div id = "allReviews">{reviews}</div>
      </div>
    )
}

export default AllReviews