import React, { useState } from "react";
import "./GameBoard.css";

const GameBoard = () => {
  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    checkWinner(newBoard);
    setPlayer(player === "X" ? "O" : "X");
  };

  const checkWinner = (board) => {
    for (const condition of winningConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (!board.includes(null)) {
      setWinner("Draw");
    }
  };

  const resetBoard = () => {
    setBoard(emptyBoard);
    setPlayer("X");
    setWinner(null);
  };

  return (
    <div className="game-board">
      <div className="status">
        {winner ? (
          winner === "Draw" ? (
            <h2>It's a draw!</h2>
          ) : (
            <h2>Player {winner} wins!</h2>
          )
        ) : (
          <h2>Player {player}'s turn</h2>
        )}
      </div>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={resetBoard}>
        Reset
      </button>
    </div>
  );
};

export default GameBoard;
