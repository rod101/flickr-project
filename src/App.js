import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Compnavbar from './component/layout/Compnavbar';
import Location from './component/pages/Locations';
import Photos from './component/pages/Photos';
import Photosdetails from './component/pages/PhotosDetails';

function App() {
  return (
    <Router>
    <div>
      <Compnavbar /> 
      {/* <Testpage /> */}
      <Route exact path="/" component={Location} />
      <Route path="/photos" component={Photos} />
      <Route path="/photodetails/:id" component={Photosdetails} />

    </div>
    </Router>
  );
}

export default App;
