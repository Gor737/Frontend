import { useState } from "react";
import { CounterList } from "./components/CounterList";
import type { CounterType } from "./types/counterType";

const App = () => {
  const [counters, setCounters] = useState<CounterType[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const createCounter = () => {
    setCounters((prevCounters) => {
      return [
        ...prevCounters,
        {
          CounterId: nextId,
          StartTime: new Date(),
          EndTime: null,
          Completed: false,
        },
      ];
    });
    setNextId(prevId => prevId + 1);
  };

  const removeCounter = (id: number): void => {
    setCounters((prevCounters) =>
      prevCounters.filter((counter) => counter.CounterId !== id),
    );
  };

  const completeCounter = (id: number): void => {
    setCounters((prevCounters) => {
      const changed = prevCounters.map((counter) => {
        if (counter.CounterId === id) {
          return {
            ...counter,
            EndTime: new Date(),
            Completed: true,
          };
        } else return counter;
      });
      return changed;
    });
  };

  const resetCounter = (id: number): void => {
    setCounters((prevCounts) => {
      const chnaged = prevCounts.map((counter) => {
        if (counter.CounterId === id) {
          return {
            ...counter,
            StartTime: new Date(),
            EndTime: null,
            Completed: false,
          };
        } else return counter;
      });
      return chnaged;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Countdown Counters
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Create and manage your countdown timers
            </p>
          </div>

          <button
            onClick={createCounter}
            className="rounded-xl bg-black px-5 py-3 font-medium text-white shadow-sm transition hover:bg-gray-800 active:scale-95"
          >
            + Add Counter
          </button>
        </div>

        <CounterList
          counters={counters}
          removeCounter={removeCounter}
          completeCounter={completeCounter}
          resetCounter={resetCounter}
        />
      </main>
    </div>
  );
};

export default App;
