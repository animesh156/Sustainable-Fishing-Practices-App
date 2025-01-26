import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Community from './pages/Community'
import FishingImpact from './pages/FishingImpact'
import SeaFoodGuide from './pages/SeaFoodGuide'
import Features from './pages/Features'
import MapGuide from './pages/MapGuide'
import Gear from './pages/Gear'


function App() {
 

  return (
    <>

   <Router>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/guide" element={<SeaFoodGuide />} />
      <Route path="/impact" element={<FishingImpact />} />
      <Route path="/feature" element={<Features />} />
      <Route path="/map" element={<MapGuide />} />
      <Route path="/gear" element={<Gear />} />

    </Routes>

   </Router>
   
     
    </>
  )
}

export default App
