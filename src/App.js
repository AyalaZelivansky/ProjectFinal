import logo from './logo.svg';
import './App.css';
// import ResponsiveAppBar from './comp/HomePage/NavTop';
import ResponsiveAppBar from './comp/HomePage/NavTop';
import Try from './comp/HomePage/try';
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <ResponsiveAppBar />
      
      <Routes>
        <Route path="Post" element={<Try />} />
      </Routes>

    </div>
  );
}

export default App;
