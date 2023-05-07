import React, { useState, useEffect, useCallback } from "react";
import gameService from "../Api/GameService";
import "./GameBoard.css";

const GameBoard = () => {
  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [playVsAI, setPlayVsAI] = useState(false);

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
    setPlayer(player === "X" ? "O" : "X");
    const result = checkWinner(newBoard);
    if (result) {
      gameService.newGame(result)
      setWinner(result);
    }
  };

  const checkWinner = (board) => {
    for (const condition of winningConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (!board.includes(null)) {
      return "Draw";
    }
    return null;
  };

  const resetBoard = () => {
    setBoard(emptyBoard);
    setPlayer("X");
    setWinner(null);
  };

  const minimax = (board, depth, isMaximizing) => {
    const winner = checkWinner(board);
    if (winner) {
      if (winner === "Draw") {
        return 0;
      } else if (winner === "X") {
        return -10 + depth;
      } else {
        return 10 - depth;
      }
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          const newBoard = [...board];
          newBoard[i] = "O";
          const score = minimax(newBoard, depth + 1, false);
          bestScore = Math.max(bestScore, score);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          const newBoard = [...board];
          newBoard[i] = "X";
          const score = minimax(newBoard, depth + 1, true);
          bestScore = Math.min(bestScore, score);
        }
      }
      return bestScore;
    }
  };

  const makeAiMove = useCallback(() => {
    if (playVsAI && !winner && player === "O") {
      let bestScore = -Infinity;
      let bestMove = null;

      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          const newBoard = [...board];
          newBoard[i] = "O";
          const score = minimax(newBoard, 0, false);
          if (score > bestScore) {
            bestScore = score;
            bestMove = i;
          }
        }
      }

      if (bestMove !== null) {
        handleClick(bestMove);
      }
    }
  }, [board, playVsAI, winner, player]);

  useEffect(() => {
    makeAiMove();
  }, [makeAiMove, player]);

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
      <div className="options">
        <button className="reset-button" onClick={resetBoard}>
          Reset
        </button>
        <div className="game-mode">
          <label htmlFor="aiMode">Play vs AI:</label>
          <input
            type="checkbox"
            id="aiMode"
            checked={playVsAI}
            onChange={(e) => setPlayVsAI(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
