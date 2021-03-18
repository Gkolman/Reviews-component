import React from 'react';
import ReactDOM from 'react-dom';
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
    // console.log('an -> ', this.state.currentUrl.slice(0,8) )
    if (this.state.currentUrl.slice(0,8) === '/reviews') {
      if (typeof(parseInt(this.state.currentProductId) === 'number')) {
        // console.log('here ->', this.state.currentProductId)
        if (parseInt(this.state.currentProductId) <= 100) {
            $.ajax({
              url: this.state.currentUrl,
              type: "POST",
              data: 'working',
              success: (data) =>  {
                //  console.log('data from request -> ', data)
                 if (data[0]) {
                   this.setState({currentProduct: data[0]})
                  //  console.log('data -> ', data[0])
                 }
              },
              error: (err) => console.log('err from request -> ', err)
            })
        } else {
          console.log('id is greater than 100 no records avalable')
        }
      }
    }
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