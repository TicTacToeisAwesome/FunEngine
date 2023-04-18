import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TicTacToeNav from './Layout/Nav/NavBar';
import UserComponent from './Users/UserComponent';

function App() {
  return (
    <div className="App">
      <TicTacToeNav />
      <UserComponent />
    </div>
  );
}

export default App;
