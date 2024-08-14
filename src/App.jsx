import { useState } from 'react'
import './App.css'
import Navigation from './components/NAVIGATION/Navigation';
import HeroSection from './components/HEROSECTION/HeroSection';
function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <HeroSection/>
    </>
  )
}

export default App;
