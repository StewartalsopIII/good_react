import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UserGreeting from './UserGreeting';
import AboutPage from './AboutPage';
import Button from './components/Button';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">Button Component Example</h1>
              <UserGreeting />
              <div className="space-x-4 mt-4">
                <Button color="blue" size="small" onClick={() => alert('Blue button clicked!')}>
                  Blue Button
                </Button>
                <Button color="green" onClick={() => alert('Green button clicked!')}>
                  Green Button
                </Button>
                <Button color="red" size="large" onClick={() => alert('Red button clicked!')}>
                  Red Button
                </Button>
              </div>
              <Link 
                to="/about" 
                className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Go to About Page
              </Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;