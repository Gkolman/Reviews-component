import { json } from 'body-parser'
import React from 'react'
import HelpfullButton from './HelpfulButton.jsx'
import './style.css';
import createStars from './StarTemplate.js'


var AllReviews = (props) => {


  var rating = props.reviews.product_overall_rating
  if (props.reviews.product_reviews) {
  var reviews = props.reviews.product_reviews.map( (review,i) => {
    return (
      <div key={i}>
    {createStars(review.rating, true)}
        <h4> date </h4>
        <h4> headline </h4>
        <h4> Review: {review.review}</h4>
        <h3> Name : {review.author}</h3>
        <HelpfullButton/>
        <hr/>
      </div>
    )})
  } else {
    var reviews = <div> loading </div>
    var rating

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