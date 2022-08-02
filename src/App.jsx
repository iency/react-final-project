import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home />}></Route>
        <Route path=':id' element={<Games />}></Route> */}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
