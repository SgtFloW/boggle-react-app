import { useState } from "react";
import { Game } from "./utility/types";

type Props = {
  game: Game;
};

export default function GameView(props: Props) {
  let [time, setTime] = useState(props.game.time);
  const [timeState, setTimeState] = useState("Press 'Start' to play!");

  function timeHanlder() {
    if (!props.game.timerStarted) {
      let ticker = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        setTimeState(minutes + ":" + seconds);

        if (time-- > 0) {
          setTime(time);
        } else {
          setTimeState("Game over!");
          clearInterval(ticker);
        }
      }, 1000);
      props.game.timerStarted = true;
    }
  }

  return (
    <div className="min-h-screen flex flex-col m-16 justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
          <div className="max-w-md select-none">
            <div className="text-center mb-4">
              <span className="text-2xl text-indigo-600 font-bold">Boggle</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-md font-bold text-gray-600">
                Time left: <span className="text-orange-500">{timeState}</span>
              </span>
              <button
                className={
                  "inline-flex justify-center py-2 px-4 my-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                }
                onClick={() => timeHanlder()}
                id="startButton"
              >
                Start
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-3">
              {props.game.timerStarted &&
                props.game.words.map((entity, index) => {
                  return (
                    <div
                      key={index}
                      className="p-2 bg-gray-50 border border-gray-800 text-center w-sm rounded-md"
                    >
                      {entity}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
