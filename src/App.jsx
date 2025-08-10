import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
