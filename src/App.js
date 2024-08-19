import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Profile from "./component/Profile";
import Create from "./component/Create";
import Logout from "./component/Logout";
import Sign from "./component/Sign";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(()=>{
    console.log('useEffect called');
  }, [isLoggedIn]);

  return (
    <Router>
      <div className="App">
        <div className="navbar-section">
          <NavBar isLoggedIn={isLoggedIn} />
        </div>
        <div className="main-section">
          <Routes>
            <Route path="/" element={isLoggedIn ? <Home /> : <Sign />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/sign" element={<Sign />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
