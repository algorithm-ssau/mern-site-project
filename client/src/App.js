import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./routes";
import "materialize-css"
import { Footer } from "./components/Footer";

function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated);
  
  if(!ready){
    return <Loader/>
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
    <Router>
      { isAuthenticated && <Navbar/>}
      <div>
        {routes}
      </div>
      { !isAuthenticated && <Footer/>}
    </Router>
    </AuthContext.Provider>

  );
}

export default App;
