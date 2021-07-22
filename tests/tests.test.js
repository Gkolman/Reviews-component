// DEV IMPORTS
// import React from 'react'
// import ReactDOM from 'react-dom'
// import Enzyme, { shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import {render, fireEvent, cleanup} from '@testing-library/react';
// import request from 'supertest'
// // LOCAL IMPORTS
// import AllReviews from '../client/components/AllReviews.jsx'
// import ReviewPages from '../client/components/ReviewsPages.jsx'
// import { act } from "react-dom/test-utils";
// require('index.html');

var AllReviews = require('../client/components/AllReviews.jsx')

const server = require('../serverEndPoints.js').app

console.log('react -> ', react)

// import toJson from 'enzyme-to-json'; //added this line

afterEach(cleanup)
Enzyme.configure({adapter: new Adapter()})

describe("AllReviews", () => {
  var reviews = {
    product_reviews:
    [
      {author: "batman",rating: 3,review:"test review 1",
        date : "08 Sep 2018",helpFull: 21,headLine: "product is okay"
      },
      {
        author: "batman",rating: 4.5,review:"test review 2",
        date : "04 Dec 20202",helpFull: 21,headLine: "great product!"
      },
    ],
      product_overall_rating: 3.7
    }
    // create a div and mount component with provided props in top level for testing
    let allReivewsNode = document.createElement('div');
    // for some reason rendering once wasnt working

  it("dynamically renders productRating through passed in props from App component", () => {

    act(() => {
      let allReivewsNode = document.createElement('div');
      ReactDOM.render(<AllReviews reviews={reviews}/>, allReivewsNode);
      // ReactDOM.render(<AllReviews reviews={reviews}/>, allReivewsNode);
      // spyOn(instance, 'someFunction');
      var actualProductRating = allReivewsNode.querySelector("#productRating").textContent
      var expectedProductRating = " Overall Rating3.7☆☆☆☆☆Sort By"
      expect(actualProductRating).toEqual(expectedProductRating)
    });
  });

  it ("dynamically renders all reviews through passed in props from App component", () => {
    let reviewPagesNode = document.createElement('div');
  ReactDOM.render(<ReviewPages reviews={reviews.product_reviews}/>, reviewPagesNode);
  var allReviews = allReivewsNode.querySelector("#allReviews").textContent
  // slices the 'review' partthe reviews element
  var actualReview1 = allReviews.slice(76, 91)
  var expectedReview1 = 'product is okay'
  var actualReview2 = allReviews.slice(145, 159)
  var expectedReview2 = 'great product!'
  expect(actualReview1).toEqual(expectedReview1)
  expect(actualReview2).toEqual(expectedReview2)
  })
});

describe('API supports Requests to /:id', function() {
  it('api responds with index.html and status 200 ', function(done) {
    request(server)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/html; charset=UTF-8")
      .expect(200, done)
  });
  it('api handles get request to id vid /:id', function(done) {
    request(server)
      .get('/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/html; charset=UTF-8")
      .expect(200, done)
  });
  it('api handles post request to id vid /:id and responsd with db data', function(done) {
    request(server)
      .post('/1')
      // .set('Accept', 'application/json')
      .expect('Content-Type', "application/json; charset=utf-8")
      .expect(200)
      .then(response => {
        var responseData = JSON.parse(response.text)
        expect(responseData[0].product_overall_rating).toEqual(4)
        // assert(response.body.email, 'foo@bar.com')
        done();
      })
    .catch(err => done(err))
  });
});


// test to make sure that the page is updating when the arrows are hit;

// add helpful fucntionality;
// test for helpful functionality;
// test sorting algorithm;

//