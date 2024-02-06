import './App.css';
import ResponsiveAppBar from './comp/HomePage/NavTop';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './comp/HomePage/home';
import React, { Suspense } from 'react';


function App() {
  const LazyUser = React.lazy(() => import("./comp/UsersPage/Users"))
  const LazyTodo = React.lazy(() => import("./comp/toDoPage/toDo"))
  const LazyPost = React.lazy(() => import("./comp/PostPage/post"))

  return (
    <div className="App">

      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Post" element={<Suspense fallback="lodaing.."><LazyPost /></Suspense>} />
        <Route path="Todo" element={<Suspense fallback="lodaing.."><LazyTodo /></Suspense>} />
        <Route path="Users" element={<Suspense fallback="lodaing.."><LazyUser /></Suspense>} />
      </Routes>

    </div>
  );
}

export default App;
