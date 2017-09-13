# MELI TEST

## Preview URL

https://meli-test.now.sh

## Development

* Clone repo
* npm install (or yarn install)
* npm run dev

## Testing

    npm test
    
## Coverage

![alt text](https://puu.sh/xyJpe/566e04a522.png) 

## Technology stack

* ReactJS 
* NextJS for server render and styled components
* NodeJS (with Express framework)
* Now for deployment

## API Endpoints

* [GET] /api/items?query=:query
* [GET] /api/items/:id
* [GET] /api/items/:id/description
* [GET] /api/breadcrumb/:id

## Components

* Autocomplete
* Breadcrumb
* CtaButton
* Header

## Pages

* index
* items (list)
* product

## External dependencies

* Production dependencies
  * "classnames": "^2.2.5",
  * "express": "^4.14.0",
  * "format-number": "^3.0.0",
  * "next": "latest",
  * "node-cache": "^4.1.1",
  * "q": "^1.5.0",
  * "react": "^15.4.2",
  * "react-dom": "^15.4.2",
  * "restler": "^3.4.0"
* Development dependencies
  * "chai": "^4.1.2",
  * "chai-http": "^3.0.0",
  * "mocha": "^3.5.3",
  * "nock": "^9.0.14"
