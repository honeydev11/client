import {
  Task,
  deleteTaskRedux,
  updateTaskRedux,
} from "@/redux/slices/TaskSlice";
import { useDeleteTaskMutation, useUpdateTaskMutation } from "@/services/task";
import { X } from "lucide-react";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";

type Props = {
  task: Task;
};

const TodoCard = ({ task }: Props) => {
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const response = await deleteTask(task._id);
    dispatch(deleteTaskRedux({ id: task._id }));
    console.log(response);
  };

  const handleUpdate = async () => {
    const res = await updateTask({
      id: task._id,
      body: { ...task, isCompleted: !task.isCompleted },
    });

    //@ts-ignore
    dispatch(updateTaskRedux({ id: task._id, body: res.data.task }));
  };

  return (
    <div className="h-60 w-60 relative border rounded-xl shadow-sm hover:shadow-xl p-5 flex flex-col gap-3">
      <X
        className="absolute right-2 top-2 border rounded-full cursor-pointer p-0.5 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
        onClick={handleDelete}
      />
      <p className="text-center text-2xl text-orange-500 underline underline-offset-4">
        {task.title}
      </p>
      <p className="line-clamp-4">{task.description}</p>

      <div className="flex items-center justify-between mt-auto">
        <button
          className=" p-1 rounded-md bg-orange-500 text-white font-medium px-2 hover:bg-orange-600"
          onClick={handleUpdate}
        >
          {task.isCompleted ? "Mark as InComplete" : "Mark as Complete"}
        </button>
        <LiaCheckDoubleSolid
          color={task.isCompleted ? "green" : ""}
          size={"25px"}
        />
      </div>
    </div>
  );
};

export default TodoCard;
