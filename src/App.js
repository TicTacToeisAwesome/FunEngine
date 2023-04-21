import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TicTacToeNav from "./Layout/Nav/NavBar";
import GameBoard from "./GameBoard";
import UserComponent from "./Users/UserComponent";
import LoginForm from "./Auth/LoginForm";
import RegistrationForm from "./Auth/RegistrationForm";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (authStatus) => {
    setIsAuthenticated(authStatus);
  };

  return (
    <div className="App">
      <TicTacToeNav />
      <div className="container mt-5">
        <GameBoard />
        {!isAuthenticated && (
          <div className="auth-container">
            <LoginForm onAuthenticate={handleAuthentication} />
            <RegistrationForm />
          </div>
        )}
        {isAuthenticated && <UserComponent />}
      </div>
    </div>
  );
}

export default App;
