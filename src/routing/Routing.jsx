import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ToDo from '../components/ToDo';
import Nav from '../components/Navbar.jsx/Nav';
import TodoUpdate from '../components/TodoUpdate';
import TodoView from '../components/TodoView';

const Routing = () => {
  return (
    <>
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<ToDo/>}></Route>
          <Route path='todo-update/:id' element={<TodoUpdate/>}></Route>
          <Route path='todo-view/:id' element={<TodoView/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing