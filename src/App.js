// This file is for rendering react components. 
// Uses react router to apply page routes.
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TicTacToeNav from "./Layout/Nav/NavBar";
import GameBoard from "./Pages/GameBoard";
import UserComponent from "./Users/UserComponent";
import Home from './Pages/Home.js'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <div className="App">
      <TicTacToeNav />
      <div className="container mt-5">
        <Routes>
          <Route path="/game" element={<GameBoard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<UserComponent />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
