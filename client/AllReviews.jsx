import { json } from 'body-parser'
import React from 'react'
import HelpfullButton from './HelpfulButton.jsx'
import './dist/style.css';

var AllReviews = (props) => {

  var rating = props.reviews.product_overall_rating
  var getRatingType = (num,tenth) => {return tenth ? parseInt(num.toString().slice(2)) : Math.floor(num)}
  var wholeStars;
  var tenthStars;

  if (props.reviews.product_reviews) {
  var reviews = props.reviews.product_reviews.map( (review,i) => {
    var wholeStarRating = getRatingType(review.rating)
    var tenthStarRating = getRatingType(review.rating, true)

    if (wholeStarRating === 5) {

    } else if (wholeStarRating === 4) {

      // create spans here with star

    } else if (wholeStarRating === 3) {

    } else if (wholeStarRating === 2) {

    }

    if (tenthRating  === 5 ) {
      // create half star here
    } else {
      // return regular span
    }

    return (
      <div key={i}>
        <h3>
           Rating: {review.rating}
           </h3>
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

  var wholeRating = getRatingType(rating) || 0
  // var tenthRating = getRatingType(rating, true)

  if (wholeRating) {
    // get amount of full stars
    if (wholeRating === 5) {wholeStars = (<span className= "overal_whole_stars">★★★★★</span>)
    } else if (wholeRating === 4) {wholeStars = (<span className= "overal_whole_stars">★★★★</span>)
    } else if (wholeRating === 3) {wholeStars = (<span className= "overal_whole_stars">★★★</span>)
    } else {wholeStars = (<span className= "overal_whole_stars">★★</span>)
    }
    var tenthRating = getRatingType(rating, true)

    // calculate half star
    if (tenthRating > 0 && tenthRating < 3) {
      // quarter start
      tenthStars = (<span className='oneQuarter'> <div>★</div><div>★</div></span>)
    } else if (tenthRating > 3 && tenthRating < 7) {
      tenthStars = (<span className='half'> <div>★</div><div>★</div></span>)
      // half star
    } else if (tenthRating < 9) {
      tenthStars = (<span className='threeQuarter'> <div>★</div><div>★</div></span>)
      // 3 qaurter start
    } else {
      tenthStars = (<span></span>)
    }
  } else {
    wholeStars = (<div> loading stars </div>)
  }

  return (
      <div >
       <h2 id="productRating" > overall Rating: {props.reviews.product_overall_rating}
       {wholeStars}
       {tenthStars}
       </h2>
       <h3> write a review button goes here </h3>
        <div id = "allReviews">{reviews}</div>
      </div>
    )
}

export default AllReviews