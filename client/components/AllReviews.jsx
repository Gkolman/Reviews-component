import React from 'react'
import createStars from '../StarTemplate.js'
import SortButton from './SortButton.jsx'
import sortReviews from './sortReviews.js'


class AllReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      rating: null,
      allReviews: null,
      props: null,
      orderType: ''
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      if (this.props.reviews) {
        this.setState({rating : this.props.reviews.product_overall_rating})
        var reviews = sortReviews(this.props.reviews.product_reviews)
        this.setState({allReviews : reviews})
      } else {
        this.setState({rating : 0})
        this.setState({allReviews : <div> loading reviews </div>})
      }
    }
    if (prevState.orderType !== this.state.orderType) {
      var reviews = sortReviews(this.props.reviews.product_reviews,this.state.orderType)
      this.setState({allReviews : reviews})
    }
  }

  changeOrderType(type) {
    if (type === 'mostRecent') {this.setState({orderType : type})}
    if (type === 'lowestRated') {this.setState({orderType : type})}
    if (type === 'topRated') {this.setState({orderType : type})}
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
      </div>
    )
  }
}
export default AllReviews