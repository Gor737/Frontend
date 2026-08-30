import { useEffect, useState } from "react";
import type { CounterType } from "../types/counterType";

type Prop = {
  counter: CounterType;
  removeCounter: (id: number) => void;
  completeCounter: (id: number) => void;
  resetCounter: (id: number) => void;
};

export const Counter = ({
  counter,
  removeCounter,
  completeCounter,
  resetCounter,
}: Prop) => {
  const [timeleft, setTimeLeft] = useState<number>(600);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  const secToTime = (sec: number): string => {
    const getMin = Math.floor(sec / 60);
    const getSec = sec - getMin * 60;

    const minutes =
      getMin.toString().length < 2
        ? "0" + getMin.toString()
        : getMin.toString();

    const seconds =
      getSec.toString().length < 2
        ? "0" + getSec.toString()
        : getSec.toString();

    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    let interval: undefined | number = undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (!prevTime) {
            completeCounter(counter.CounterId);
            setIsRunning(false);
            return prevTime;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <tr className="border-b border-gray-100 transition hover:bg-gray-50">
      {/* ID */}
      <td className="px-6 py-5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
          {counter.CounterId}
        </span>
      </td>

      {/* Start Time */}
      <td className="px-6 py-5 text-sm text-gray-600">
        {counter.StartTime.toDateString()}
      </td>

      {/* End Time */}
      <td className="px-6 py-5 text-sm text-gray-600">
        {counter.EndTime ? counter.EndTime.toDateString() : (
          <span className="text-gray-400">—</span>
        )}
      </td>

      {/* Completed */}
      <td className="px-6 py-5">
        {counter.Completed ? (
          <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Completed
          </span>
        ) : (
          <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
            Running
          </span>
        )}
      </td>

      {/* Time Left */}
      <td className="px-6 py-5">
        <span className="font-mono text-lg font-bold text-gray-900">
          {secToTime(timeleft)}
        </span>
      </td>

      {/* Pause / Play */}
      <td className="px-3 py-5">
        <button
          onClick={() => {
            if(timeleft){
              setIsRunning(prev => !prev)}
            }
          }
          className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 active:scale-95"
        >
          {!isRunning ? "▶ Play" : "Ⅱ Pause"}
        </button>

      {/* Stop */}
        <button
          onClick={() => {
            setTimeLeft(600);
            setIsRunning(true);
            resetCounter(counter.CounterId);
          }}
          className="rounded-lg bg-orange-100 px-3 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-200 active:scale-95"
        >
          ↻ Stop
        </button>

      {/* Remove */}
        <button
          onClick={() => removeCounter(counter.CounterId)}
          className="rounded-lg bg-red-100 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-200 active:scale-95"
        >
          ✕ Remove
        </button>
      </td>
    </tr>
  );
};