import React from 'react';
import AllReviews from './AllReviews.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: window.location.href.slice(21),
      currentProductId: window.location.href.slice(33,36),
      currentProduct: ''
    }
  }
  componentWillMount() {
    console.log('url -> ', window.location.href)

    $.ajax({
      url: window.location.href,
      type: "POST",
      data: 'working',
      success: (data) =>  {
        console.log('data from request -> ', data)
        if (data[0]) {
          this.setState({currentProduct: data[0]})
        }
      },
      error: (err) => console.log('err from request -> ', err)
    })
  }
  render() {
    return (
    <div className ="main">
      <h2>Reviews </h2>
      <AllReviews reviews={this.state.currentProduct}/>
    </div>
    )
  }
}
export default App
// create your template for each review here

//