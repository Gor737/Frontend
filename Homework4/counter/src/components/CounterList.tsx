import type { CounterType } from "../types/counterType";
import { Counter } from "./Counter";

type Props = {
  counters: CounterType[];
  removeCounter: (id: number) => void;
  completeCounter: (id: number) => void;
  resetCounter: (id: number) => void;
};

export const CounterList = ({
  counters,
  removeCounter,
  completeCounter,
  resetCounter,
}: Props) => {
  return !counters.length ? (
    <div className="mx-auto mt-10 max-w-6xl rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
      <div className="text-2xl font-bold text-gray-900">No counters yet</div>

      <div className="mt-2 text-gray-500">
        Create your first countdown timer
      </div>
    </div>
  ) : (
    <div className="mx-auto mt-10 max-w-6xl px-4">
      {/* Title */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Counter List</h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage your countdown timers
          </p>
        </div>

        <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          Total: {counters.length}
        </div>
      </div>

      {/* Table container */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            {/* Header */}
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  ID
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Start Time
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  End Time
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Completed
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Time Left
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-gray-100">
              {counters.map((counter) => (
                <Counter
                  key={counter.CounterId}
                  counter={counter}
                  removeCounter={removeCounter}
                  completeCounter={completeCounter}
                  resetCounter={resetCounter}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
