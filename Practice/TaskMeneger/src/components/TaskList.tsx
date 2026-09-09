import type { Task } from "../types/TaskTypes";
import { TaskItem } from "./TaskItem";

type Props = {
  tasks: Task[];
};

export const TaskList = ({ tasks }: Props) => {
  return (
    <div>
        {tasks.map((task) => <TaskItem key={task.id} task={task} />)};
    </div>
  )
};
