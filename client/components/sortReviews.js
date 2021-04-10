import createStars from '../StarTemplate.js'
import React from 'react';

var sortByDate = (reviews) => {
  var month = ['null','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep', 'Oct','Nov','Dec']
  return reviews.sort( (a,b) => {
    var aYear = a.date.slice(7,a.date.length)
    var aMonth = month.indexOf(a.date.slice(3,6)).toString()
    if (aMonth.length === 1) aMonth = '0' + aMonth
    var aDay = a.date.slice(0,2)
    var aDate = parseInt(aYear.concat(aMonth,aDay))

    var bYear = b.date.slice(7,b.date.length)
    var bMonth = month.indexOf(b.date.slice(3,6)).toString()
    if (bMonth.length === 1) bMonth = '0' + bMonth
    var bDay = b.date.slice(0,2)
    var bDate = parseInt(bYear.concat(bMonth,bDay))
    return  bDate - aDate
  })
}

var sortReviews = (reviews, type) => {

  if (type === 'mostRecent') {reviews = sortByDate(reviews)}
  if (type === 'lowestRated') {reviews = reviews.sort((a,b) => a.rating-b.rating)}
  if (type === 'topRated') {reviews = reviews.sort((a,b) => b.rating-a.rating)}

  return reviews.map((review,i) => {
    return (
      <div key={i}>
      {createStars(review.rating, true)}
        <div className="smallFont">  {review.date} </div>
        <strong className="mediumFont other" > {review.headLine} </strong>
        <div className="smallFont review"> {review.review}</div>
        <strong className="mediumFont other"  > {review.author}</strong>
        <div className="buttonContainer"><button className="helpfulButton">HELPFUL({review.helpFull})</button></div>
        <hr/>
      </div>
    )})
}
export default sortReviews