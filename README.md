# Reviews Component

### Description:
                Designed reviews micro-service for a service oriented full stack application. Reviews are paginated dynamically using react and are filterable based on user preference. Data is stored in mongoDb and is pulled through an api built using express that targets specific product data via url query parameters. Code Is transpiled via Webpack and Babel then bundled and can be requested via a url. End to end testing has been achieved through using mocha/chai, Jest, and enzyme for the front end and SuperTest  for the back-end API. Containerized with Docker for easy deployment and distributed testing.


### Tools used:
    React, Redux, Webpack, Express

#### Front-end:
    React-hooks, CSS
#### Back-end:
MongoDb, Mongoose, Express
#### Testing:
Jest, Enzyme, SuperTest, Mocha/Chai
#### Dev-tools:
Webpack, Docker, Babel, Javascript

  ![](/images/FecGif.gif)

### How to start?:
####  simply clone the mini-apps project copy and pasting this into your terminal and hitting enter
    git clone https://github.com/rpt26-fec-tianwen/Reviews-component.git

#### the cd into the folder via
    cd Gage-Reviews-service

#### install application dependices
    npm install
#### then start the application by running
    npm start

#### look at other reviews for items
    change the id number in the url from  http://localhost:8004/1 to  http://localhost:8004/2 or 1-100
### Improvements I would make;
    * Implement more server side rendering
    * impliment lazy loading
    * convert to next.js project