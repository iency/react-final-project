import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import Games from './Games';

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar />
      <div className="app__body">
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/games' element={<Games />}></Route>
          </Routes>
          
      </div>
    </div>
    </Router>
  );
}

export default App;
