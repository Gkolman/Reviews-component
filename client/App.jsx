import React from 'react';
import ReactDOM from 'react-dom';
import AllReviews from './AllReviews.jsx'
import ClientRoutes from './ClientRoutes.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: window.location.href
    }
  }





  // on componentWillMount make a call to get all dat afrom db
  // create route path for every index in the db
  // render routes in
  // componentWillMount() {
  //   console.log('data in will mount-> ', window.location.href)

  //   $.ajax({
  //     url: window.location.href,
  //     type: "POST",
  //     data: window.location.href,
  //     success: (data) => console.log('data from request -> ', data),
  //     error: (err) => console.log('err from request -> ', err)
  //   })
  // }
  componentWillMount() {
    console.log('state -> ', this.state)

    // check state for id

    // request to the database throught the server with id




  }

  render() {

    return (
    <div>
      <h2>Reviews </h2>
      <h4> overall Rating : {this.state.rating} </h4>
      <h2> write a review  button </h2>
      <AllReviews/>
      <hr/>
    </div>
    )

    /*
    // reviews in a cool font
    overall Rating 5 star's
    */

  }
}

var root = document.getElementById('root')
var element = <h2>template</h2>

ReactDOM.render(<App/>,root)

// create your template for each review here

//