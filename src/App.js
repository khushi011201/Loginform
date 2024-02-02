import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountInfo from './components/AccountInfo';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
          <Navbar />

    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="/account" element={<AccountInfo />} />

    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
