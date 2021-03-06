## About this Project
Building a client-side web app using React. This web app display photos from Flickr

search for places around a location and display the photos found for these locations. And click on an image to view more details about the project

1. A page listing locations
2. A page listing images for a location
3. A page with details for a specific image

## Create React App 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Create React apps with no build configuration.

### Quick Overview
```
npx create-react-app flickr-project
cd my-app
npm start
```

## Include React Bootstrap in your project
```
npm install react-bootstrap bootstrap
```

### Importing Components
```
import Button from 'react-bootstrap/Button';

// or less ideally
import { Button } from 'react-bootstrap';
```
### Browser globals
```
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
```
For more information on how to use React Bootstrap [click here](https://react-bootstrap.github.io)

## Installing react-router-dom
DOM bindings for React Router.

Using npm:
```
 $ npm install --save react-router-dom
```
## Flickr API
Using Flickr API you can retrieve a plethora of photographs and in turn, may create awesome applications. 

### Obtaining an API key
Get your API Key [click here](https://www.flickr.com/services/apps/create/apply)

update the .env file with your key and you ready to go


## Adding axios to the project
Promise based HTTP client for the browser and node.js

Using npm:
```
$ npm install axios
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## Running unit tests

