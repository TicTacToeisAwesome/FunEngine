import logo from './TicTacToeLogo.png'

function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} alt="Logo" height="50" width="50"/>
      <a class="navbar-brand" href="/">TicTacToe</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/game">Game</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profile">Profile</a>
          </li>
        </ul>
      </div>
      </nav>
    </>


  );
}

export default Nav;