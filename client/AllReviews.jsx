import React from 'react'
import HelpfullButton from './HelpfulButton.jsx'
var AllReviews = (props) => {



  // querry database and look for product id within db
  // once item is found populate data from db into template
  // add button to each review
  return (
      <div>
       <h4> stars count </h4>
       <h4> date </h4>
       <h4> review quote </h4>
       <h4> Author </h4>
       <HelpfullButton/>
      </div>
    )
}

export default AllReviews