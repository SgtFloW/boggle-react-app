import { useCallback, useState } from "react";
import { render } from "react-dom";
import GameView from "./GameView";
import "./styles.css";
import { Game } from "./utility/types";

export default function App() {
  const wordArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  function createGame() {
    let gameArr = [];
    for (let i = 0; i < 16; i++) {
      gameArr.push(wordArray[Math.floor(Math.random() * wordArray.length)]);
    }
    const game: Game = {
      gameId: Math.floor(Math.random() * 99999),
      time: 180,
      words: gameArr,
      timerStarted: false
    };
    render(<GameView game={game} />, document.getElementById("root"));
  }

  return (
    <div className="min-h-screen flex flex-col m-16 justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
          <div className="max-w-md">
            <div className="text-center">
              <span className="text-2xl text-indigo-600 font-bold">Boggle</span>
            </div>
            <p className="mt-2 mb-8">
              Boggle is a hilarious word-making game that requires exceptional
              vocabulary. Players will have three minutes to create as many
              words as possible from a few jumbled-up letters. Try to create
              long words with more letters to score more points. At the end of
              the game, the person with the highest score will win!
            </p>
            <button
              className="inline-flex justify-center py-2 px-4 my-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => createGame()}
            >
              Create new Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
