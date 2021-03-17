
import React from 'react';
var Stars = (rating, mini) => {
  if (!rating) return (<div>loading rating</div>)
  if (mini) {
    if (rating === 5) {
      return (
      <div className = 'smallStars'>
        <span className="starSet">
          <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
          <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
          <span className="star-icon full small">☆</span>
        </span>
      </div>
    )
    } else if (rating < 5 && rating > 4.6) {
      return (
        <div className = 'smallStars'>
          <span className="starSet">
            <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
            <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
            <span className="star-icon threeQuarter small">☆</span>
          </span>
        </div>

      )
    } else if (rating <= 4.6 && rating >= 4.4) {
      return (
    <div className = 'smallStars'>
      <span className="starSet">
        <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
        <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
        <span className="star-icon half small">☆</span>
      </span>
    </div>

      )
    } else if (rating <= 4.3 && rating >= 4.1) {
      return (
  <div className = 'smallStars'>
    <span className="starSet">
      <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
      <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
      <span className="star-icon quarter small">☆</span>
    </span>
  </div>
      )
    } else if (rating === 4) {
      return (
        <div className = 'smallStars'>
          <span className="starSet">
            <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
            <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
            <span className="star-icon small">☆</span>
          </span>
        </div>
      )
    } else if (rating < 4 && rating > 3.6) {
      return (
      <div className = 'smallStars'>
        <span className="starSet">
          <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
          <span className="star-icon full small">☆</span><span className="star-icon threeQuarter small">☆</span>
          <span className="star-icon small">☆</span>
        </span>
      </div>
      )
    } else if (rating <= 3.6 && rating >= 3.4) {
      return (
    <div className = 'smallStars'>
      <span className="starSet">
        <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
        <span className="star-icon full small">☆</span><span className="star-icon half small">☆</span>
        <span className="star-icon small">☆</span>
      </span>
    </div>
      )
    } else if (rating <= 3.3 && rating >= 3.1) {
      return (
    <div className = 'smallStars'>
      <span className="starSet">
        <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
        <span className="star-icon full small">☆</span><span className="star-icon qaurter small">☆</span>
        <span className="star-icon small">☆</span>
      </span>
    </div>
      )
    } else if (rating === 3) {
      return (
    <div className = 'smallStars'>
      <span className="starSet">
        <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
        <span className="star-icon full small">☆</span><span className="star-icon small">☆</span>
        <span className="star-icon small">☆</span>
      </span>
    </div>
      )
    } else if (rating < 3 && rating > 2.6) {
      return (
        <div className = 'smallStars'>
          <span className="starSet">
            <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
            <span className="star-icon threeQuarter small">☆</span><span className="star-icon small">☆</span>
            <span className="star-icon small">☆</span>
          </span>
        </div>
      )
    } else if (rating <= 2.6 && rating >= 2.4) {
      return (
    <div className = 'smallStars'>
      <span className="starSet">
        <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
        <span className="star-icon half small">☆</span><span className="star-icon small">☆</span>
        <span className="star-icon small">☆</span>
      </span>
    </div>
      )
    } else if (rating <= 2.3 && rating >= 2.1) {
      return (
    <div className = 'smallStars'>
      <span className="starSet">
        <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
        <span className="star-icon qaurter small">☆</span><span className="star-icon small">☆</span>
        <span className="star-icon small">☆</span>
      </span>
    </div>
      )
    } else if (rating === 2) {
      return (
    <div className = 'smallStars'>
      <span className="starSet">
        <span className="star-icon full small">☆</span><span className="star-icon full small">☆</span>
        <span className="star-icon small">☆</span><span className="star-icon small">☆</span>
        <span className="star-icon small">☆</span>
      </span>
    </div>
      )
    } else if (rating < 2 && rating > 1.6) {
      return (
        <div className = 'smallStars'>
          <span className="starSet">
            <span className="star-icon full small">☆</span><span className="star-icon threeQuarter small">☆</span>
            <span className="star-icon small">☆</span><span className="star-icon small">☆</span>
            <span className="star-icon small">☆</span>
          </span>
        </div>
      )
    } else if (rating <= 1.6 && rating >= 1.4) {
      return (
    <div className = 'smallStars'>
      <span className="starSet">
        <span className="star-icon full small">☆</span><span className="star-icon half small">☆</span>
        <span className="star-icon small">☆</span><span className="star-icon small">☆</span>
        <span className="star-icon small">☆</span>
      </span>
    </div>
      )
    } else if (rating <= 1.3 && rating >= 1.1) {
      return (
    <div className = 'smallStars'>
      <span className="starSet">
        <span className="star-icon full small">☆</span><span className="star-icon qaurter small">☆</span>
        <span className="star-icon small">☆</span><span className="star-icon small">☆</span>
        <span className="star-icon small">☆</span>
      </span>
    </div>
      )
    } else if (rating === 1) {
      return (
    <div className = 'smallStars'>
      <span className="starSet">
        <span className="star-icon full small">☆</span><span className="star-icon small">☆</span>
        <span className="star-icon small">☆</span><span className="star-icon small">☆</span>
        <span className="star-icon small">☆</span>
      </span>
    </div>
      )
    }
  } else {
    if (rating === 5) {
      console.log('entering')
      return (
        <span className="starSet">
          <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
          <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
          <span className="star-icon full ">☆</span>
        </span>
    )
    } else if (rating < 5 && rating > 4.6) {
      return (
          <span className="starSet">
            <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
            <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
            <span className="star-icon threeQuarter ">☆</span>
          </span>
      )
    } else if (rating <= 4.6 && rating >= 4.4) {
      return (
      <span className="starSet">
        <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
        <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
        <span className="star-icon half ">☆</span>
      </span>
      )
    } else if (rating <= 4.3 && rating >= 4.1) {
      return (
    <span className="starSet">
      <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
      <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
      <span className="star-icon quarter ">☆</span>
    </span>
      )
    } else if (rating === 4) {
      return (
          <span className="starSet">
            <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
            <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
            <span className="star-icon ">☆</span>
          </span>
      )
    } else if (rating < 4 && rating > 3.6) {
      return (
          <span className="starSet">
            <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
            <span className="star-icon full ">☆</span><span className="star-icon threeQuarter ">☆</span>
            <span className="star-icon ">☆</span>

          </span>
      )
    } else if (rating <= 3.6 && rating >= 3.4) {
      return (
      <span className="starSet">
        <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
        <span className="star-icon full ">☆</span><span className="star-icon half ">☆</span>
        <span className="star-icon small">☆</span>
      </span>
      )
    } else if (rating <= 3.3 && rating >= 3.1) {
      return (
      <span className="starSet">
        <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
        <span className="star-icon full ">☆</span><span className="star-icon qaurter ">☆</span>
        <span className="star-icon small">☆</span>
      </span>
      )
    } else if (rating === 3) {
      return (
      <span className="starSet">
        <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
        <span className="star-icon full ">☆</span><span className="star-icon ">☆</span>
        <span className="star-icon ">☆</span>
      </span>
      )
    } else if (rating < 3 && rating > 2.6) {
      console.log('entering')

      return (
          <span className="starSet">
            <span className="star-icon full">☆</span><span className="star-icon full ">☆</span>
            <span className="star-icon threeQuarter">☆</span><span className="star-icon ">☆</span>
            <span className="star-icon ">☆</span>
          </span>
      )
    } else if (rating <= 2.6 && rating >= 2.4) {
      return (
      <span className="starSet">
        <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
        <span className="star-icon half ">☆</span><span className="star-icon ">☆</span>
        <span className="star-icon ">☆</span>
      </span>
      )
    } else if (rating <= 2.3 && rating >= 2.1) {
      return (
      <span className="starSet">
        <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
        <span className="star-icon qaurter ">☆</span><span className="star-icon ">☆</span>
        <span className="star-icon ">☆</span>
      </span>
      )
    } else if (rating === 2) {
      return (
      <span className="starSet">
        <span className="star-icon full ">☆</span><span className="star-icon full ">☆</span>
        <span className="star-icon ">☆</span><span className="star-icon ">☆</span>
        <span className="star-icon ">☆</span>
      </span>
      )
    } else if (rating < 2 && rating > 1.6) {
      return (
          <span className="starSet">
            <span className="star-icon full ">☆</span><span className="star-icon threeQuarter ">☆</span>
            <span className="star-icon ">☆</span><span className="star-icon ">☆</span>
            <span className="star-icon ">☆</span>
          </span>
      )
    } else if (rating <= 1.6 && rating >= 1.4) {
      return (
      <span className="starSet">
        <span className="star-icon full ">☆</span><span className="star-icon half small">☆</span>
        <span className="star-icon ">☆</span><span className="star-icon small">☆</span>
        <span className="star-icon ">☆</span>
      </span>
      )
    } else if (rating <= 1.3 && rating >= 1.1) {
      return (
      <span className="starSet">
        <span className="star-icon full ">☆</span><span className="star-icon qaurter ">☆</span>
        <span className="star-icon ">☆</span><span className="star-icon ">☆</span>
        <span className="star-icon ">☆</span>
      </span>
      )
    } else if (rating === 1) {
      return (
      <span className="starSet">
        <span className="star-icon full ">☆</span><span className="star-icon ">☆</span>
        <span className="star-icon ">☆</span><span className="star-icon ">☆</span>
        <span className="star-icon ">☆</span>
      </span>
      )
    }
  }
}

export default Stars
