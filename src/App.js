import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TicTacToeNav from './Layout/Nav/NavBar';
import GameBoard from './GameBoard';
import UserComponent from './Users/UserComponent';

function App() {
  return (
    <div className="App">
      <TicTacToeNav />
      <div className="container mt-5">
        <GameBoard />
        <UserComponent />
      </div>
    </div>
  );
}

export default App;
