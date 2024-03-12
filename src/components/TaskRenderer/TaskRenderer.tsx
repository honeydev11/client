import { useSelector } from "react-redux";
import TodoCard from "../Cards/TodoCard";
import { RootState } from "@/redux/store";

type Props = {};

const TaskRenderer = (props: Props) => {
  const tasks = useSelector((state: RootState) => state.task);

  console.log("in render: ", tasks);
  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {tasks.map((task) => (
        <TodoCard task={task} />
      ))}
    </div>
  );
};

export default TaskRenderer;
