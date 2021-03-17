// DEV IMPORTS
import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {render, fireEvent, cleanup} from '@testing-library/react';
import request from 'supertest'
// LOCAL IMPORTS
import App from './client/App.jsx'
import AllReviews from './client/AllReviews.jsx'
// import server from './server.js'

var server = require('./server.js').app

afterEach(cleanup)


Enzyme.configure({ adapter: new Adapter() })
// configure({ adapter: new Adapter() });

describe("AllReviews", () => {
  var reviews = {
    product_reviews: [
 {author: "Adalberto.Langosh", rating: 3, review: "Sed laboriosam ut quis perspiciatis. Quos officiis…olores et ut eos. Itaque aut ut atque soluta non."},
 {author: "Candido.Schumm85", rating: 4.5, review: "Quidem alias id sapiente. Earum odit deserunt dolo…caecati. Voluptatibus qui alias delectus et odit."},
 {author: "Katrine75", rating: 4.5, review: "Ut rerum aspernatur. Quod porro et ipsum at sit. Reiciendis autem repellat adipisci."}
    ],
    product_overall_rating: 3.7
    }
    const root = document.createElement("div")
    ReactDOM.render(<AllReviews reviews = {reviews}/>, root)
 it("dynamically renders productRating through passed in props from App component", () => {
  var actualProductRating = root.querySelector("#productRating").textContent
  var expectedProductRating = " Product Rating: 3.7 "
  expect(actualProductRating).toEqual(expectedProductRating)
 });

 it ("dynamically renders all reviews through passed in props from App component", () => {
  var actualReviews = root.querySelector("#allReviews").textContent
  var expectedReviews = " Rating: 3  date  Review: Sed laboriosam ut quis perspiciatis. Quos officiis…olores et ut eos. Itaque aut ut atque soluta non. Name : Adalberto.Langosh Helpful  Rating: 4.5  date  Review: Quidem alias id sapiente. Earum odit deserunt dolo…caecati. Voluptatibus qui alias delectus et odit. Name : Candido.Schumm85 Helpful  Rating: 4.5  date  Review: Ut rerum aspernatur. Quod porro et ipsum at sit. Reiciendis autem repellat adipisci. Name : Katrine75 Helpful "
  expect(actualReviews).toEqual(expectedReviews)
 })
});

describe('API supports Requests to /reviews/', function() {
  it('api responds with a render(index.html) method and status 200 ', function(done) {
    request(server)
      .get('/reviews')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/html; charset=UTF-8")
      .expect(200, done)
  });
  it('api responds with a render(index.html) method and status 200 when an id is added to URL via query params', function(done) {
    request(server)
      .get('/reviews?id=1')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/html; charset=UTF-8")
      .expect(200, done)
  });
  it('post request to /reviews?id=1 shoul respond with json and a 200 status', function(done) {
    request(server)
      .post('/reviews?id=1')
      .send({name: 'john'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        // console.log('response -> ', JSON.parse(response.text))
        var responseData = JSON.parse(response.text)
        // console.log('reviews -> ', responseData[0].product_reviews)
        console.log('rating -> ', responseData[0].product_overall_rating)
        expect(responseData[0].product_overall_rating).toEqual(3.7)

        // assert(response.body.email, 'foo@bar.com')

        done();
      })
    .catch(err => done(err))
  });
});
