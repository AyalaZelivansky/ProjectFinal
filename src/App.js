import logo from './logo.svg';
import './App.css';
// import ResponsiveAppBar from './comp/HomePage/NavTop';
import ResponsiveAppBar from './comp/HomePage/NavTop';
import Try from './comp/HomePage/try';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './comp/HomePage/home';
import ToDo from './comp/toDoPage/toDo';


function App() {
  return (
    <div className="App">

      <ResponsiveAppBar />
      {/* <Home /> */}
      <Routes>
        <Route path="Post" element={<Try />} />
        <Route path="/" element={<Home />} />
        <Route path="Todo" element={<ToDo />} />


      
      </Routes>

    </div>
  );
}

export default App;
