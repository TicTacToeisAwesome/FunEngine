import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TicTacToeNav from './Layout/Nav/NavBar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <TicTacToeNav />
      <Home />
    </div>
  );
}

export default App;
