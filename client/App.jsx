import React from 'react';
import AllReviews from './components/AllReviews.jsx'
import Footer from './components/footer/Footer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: window.location.href.slice(21),
      currentProductId: window.location.href.slice(33,36),
      currentProduct: null
    }
  }
  componentWillMount() {
    console.log('url -> ', window.location.href)
    $.ajax({
      url: window.location.href,
      type: "POST",
      data: 'working',
      success: (data) =>  {
        console.log('data from request -> ', data[0])
        if (data[0]) {
          this.setState({currentProduct: data[0]})
        }
      },
      error: (err) => console.log('err from request -> ', err)
    })
  }
  render() {
    return (
    <div>
      <div className ="main">
        <AllReviews  reviews={this.state.currentProduct}/>
      </div>
      <Footer/>
    </div>
    )
  }
}
export default App
// create your template for each review here

//