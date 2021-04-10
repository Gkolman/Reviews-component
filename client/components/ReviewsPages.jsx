import React from 'react';

var ReviewPages = (props) => {
  if (props.reviews) {
    console.log('props reviews ->', props.reviews)
    var groupedReviews = []
    for (var i = props.reviews.length /2 - 1; i >= 0; i-=1) {
      groupedReviews.push(
        <span key={i} className ="pageNumber" onClick={(e) => {props.getPage(e)}}> {i+1}</span>
      )
    }
    return (
      groupedReviews
    )
  } else {
    return (<div> loading review pages </div>)
  }
}
export default ReviewPages