import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Layout from './Layout';
import ColorChanger from './ColorChanger';
function App() {
  // console.log("Hello")
  return (
    <Router>
      <Routes>
       
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  
  );
}

export default App;
