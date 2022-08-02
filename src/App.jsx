import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar />
      <div className="app__body">
        <Routes>
          {/* <Route path='/games' element={<Games />}></Route> */}
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
