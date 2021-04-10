import React from 'react'
import createStars from '../StarTemplate.js'
import SortButton from './SortButton.jsx'
import sortReviews from './sortReviews.js'
import ReviewPages from './ReviewsPages.jsx'


class AllReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      rating: null,
      allReviews: null,
      orderType: null,
      pageNumber: 1
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      if (this.props.reviews) {
        console.log('this.state.pageNumber -> ', this.state.pageNumber)
        this.setState({rating : this.props.reviews.product_overall_rating})
        this.setState({Reviews : this.props.reviews.product_reviews})
        var reviews = sortReviews(this.props.reviews.product_reviews)
        var pairedReviews = []
        for (var i = 0; i < reviews.length; i+=2) {
          if (!reviews[i+1]) {pairedReviews.push(reviews[i])}
          else {pairedReviews.push([reviews[i], reviews[i+1]])}
        }
        console.log('paired reviews ->', pairedReviews)
        this.setState({allReviews : pairedReviews[0]})
        this.setState({pairedReviews : pairedReviews})
      } else {
        this.setState({rating : 0})
        this.setState({allReviews : <div> loading reviews </div>})
      }
    }
    if (prevState.orderType !== this.state.orderType) {
      var reviews = sortReviews(this.props.reviews.product_reviews,this.state.orderType)
      var pairedReviews = []
      for (var i = 0; i < reviews.length; i+=2) {
        if (!reviews[i+1]) {pairedReviews.push(reviews[i])}
        else {pairedReviews.push([reviews[i], reviews[i+1]])}
      }
      console.log('pairedReviews -> ', pairedReviews)
      this.setState({allReviews : pairedReviews[0]})
      this.setState({pairedReviews : pairedReviews})
    }
    if (prevState.pageNumber !== this.state.pageNumber) {
      this.setState({allReviews : this.state.pairedReviews[(this.state.pageNumber-1)]})

      console.log('page number -> ', this.state.pageNumber)
    }
  }

  changeOrderType(type) {
    if (type === 'mostRecent') {this.setState({orderType : type})}
    if (type === 'lowestRated') {this.setState({orderType : type})}
    if (type === 'topRated') {this.setState({orderType : type})}
  }
  changePageNumber(e) {
    this.setState({pageNumber : e.target.innerHTML})
  }

  render() {
    return (
      <div id ="allReviews">
        <div className="smallFont" id="productRating" > Overall Rating
        <span className="rating" > {this.state.rating} {createStars(this.state.rating)}
        <SortButton sortReviews={this.changeOrderType.bind(this)}/>
        </span>
        </div>
        <hr/>
        <div className ="space"> </div>
        <button className="reviewButton"> WRITE A REVIEW </button>
        <div id = "allReviews">{this.state.allReviews}</div>
        <ReviewPages reviews={this.state.Reviews} getPage={this.changePageNumber.bind(this)}/>
      </div>
    )
  }
}
export default AllReviews