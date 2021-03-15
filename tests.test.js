import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
// import TestHook from '../test_hook.js';
import {render, fireEvent, cleanup} from '@testing-library/react';

import App from './client/App.jsx'
import AllReviews from './client/AllReviews.jsx'

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


//  it("renders correctly", () => {
//   mount(<AllReviews />);
// });


//  it("should update state on click", () => {
//    console.log('location ->', window.location.href)
//   // const changeSize = jest.fn();
//   // const wrapper = mount(<App onClick={changeSize} />);
//   // const handleClick = jest.spyOn(React, "useState");
//   // handleClick.mockImplementation(size => [size, changeSize]);

//   // wrapper.find("#para1").simulate("click");
//   // expect(changeSize).toBeTruthy();
// });
});

