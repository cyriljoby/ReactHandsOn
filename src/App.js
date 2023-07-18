import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from './pages/Clients'; 
import Calls from './pages/Calls';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import Tasks from './pages/Tasks';
import SharedLayout from './components/SharedLayout';
import Contacts from './pages/Contacts.js'
import RegistrationForm from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';
import EmployeeDetails from './pages/EmployeeDetails';
import LoggedOut from './pages/LoggedOut';
import './App.css';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegistrationForm/>}/>
        <Route path="/logout" element={<LoggedOut/>}/>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/details/:id" element={<EmployeeDetails/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/employees" element={<Employees/>}/>
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/calls" element={<Calls/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/settings" element={<Settings/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
