import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navigationbar1 from './components/Navigationbar1';
//add more navigation bars in here

import Addusers from './pages/Addusers';
import Availability from './pages/Availability';
import Shoporders from './pages/Shoporders';
import Companyorders from './pages/Companyorders';
import DynamicShoporders from './pages/DynamicShoporders';
import Reports from './pages/Reports';
import Signin from './pages/Signin';
// Import other pages as needed

function App() {
  return (
    <Router>
      <div className="app-container">

        <div className="navigation-container">
            {/* mention the navigation bars in here */}
            <Navigationbar1 />
        </div>

        <div className="content">
          <Routes>
            {/* Routes for Navigation1 */}
            <Route path="/" element={<Signin />} />
            <Route path="/Addusers" element={<Addusers />} />
            <Route path="/Availability" element={<Availability />} />
            <Route path="/Shoporders" element={<Shoporders />} />
            <Route path="/Companyorders" element={<Companyorders />} />
            <Route path="/DynamicShoporders/:orderNo" element={<DynamicShoporders />} /> {/* when dealing with dynamic web page, we need this*/}
            <Route path="/Reports" element={<Reports />} />
            {/* Add more routes for Navigation1 */}
            
            {/* Routes for Navigation2 */}
            {/* Add routes for Navigation2 */}
            
            {/* Routes for Navigation3 */}
            {/* Add routes for Navigation3 */}
            
            {/* Routes for other pages */}
            {/* Add routes for other pages with different navigation bars */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
