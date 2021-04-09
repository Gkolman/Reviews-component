import React from 'react';

class SortButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    }
  }
  popUp() {
    this.setState({toggled: !this.state.toggled})
  }
  render() {
    if (this.state.toggled === false) {
      return (
        <span>
          <span className ="sortButton mediumFont" onClick={() => {this.popUp()}}>Sort By</span>
        </span>
      )
    } else {
      return (
        <span>
          <span className ="sortButton mediumFont" onClick ={() => {this.popUp()}}>Hide Sorting</span>
          <br style={{fontSize:5}}/>
          <div className ="dropDownBoax">
              <strong className="mediumFont drpDwn" onClick={() => {this.props.sortReviews('mostRecent')}}>Most recent</strong>
              <br style={{paddingTop:50}}/>
              <strong style={{paddingtop:100}}className="mediumFont drpDwn" onClick={() => {this.props.sortReviews('topRated')}} >Top rated</strong>
              <br style={{paddingBottom:5}}/>
              <strong className="mediumFont drpDwn" onClick={() => {this.props.sortReviews('lowestRated')}} >Lowest rated</strong>
            </div>
      </span>
      )
    }
  }
}
export default SortButton

