import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './Components/App';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Testimonials from './Pages/Testimonials';
import MovementArchive from './Pages/MovementArchive';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='testimonials' element={<Testimonials />} />
          <Route path='movement-archive' element={<MovementArchive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
