
import './App.css';

import React from 'react';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import RespondentTravelProfile from './RespondentTravelProfile';
import RespondentTravelProfile from './Homepage';
import MyComponent from './page2';


function App() {
  return (
    
    <BrowserRouter>
    
      <div>
        
        
        <Routes>
          <Route path="/" element={<RespondentTravelProfile/>}  /> 
          <Route path="/page2" element={<MyComponent />} exact />
           

        </Routes>
      </div>
      </BrowserRouter>
  
  );
}

export default App;
