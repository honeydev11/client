import { addTask } from "@/redux/slices/TaskSlice";
import { useCreateTaskMutation } from "@/services/task";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Createtodo = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const [createTask] = useCreateTaskMutation();
  const dispatch = useDispatch();

  const handleCreateTask = async () => {
    try {
      const response = await createTask({ endpoint: "create", body: data });
      //@ts-ignore
      if (response.data) {
        navigate("/");
        //@ts-ignore
        dispatch(addTask(response.data.task));
        console.log("create", response);
      }
    } catch (error) {}
  };

  return (
    <div className=" flex-1 h-full flex flex-col justify-center items-center">
      <div className="flex flex-col  w-2/5 gap-5">
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            type="text"
            className="py-2 px-2 outline-none border rounded-md focus:border-orange-500"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Description</label>
          <textarea
            className="outline-none border rounded-md py-2 px-2 focus:border-orange-500 min-h-80"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          ></textarea>
        </div>
        <button
          onClick={handleCreateTask}
          className="bg-orange-500 rounded-lg hover:bg-orange-600 py-2 px-4 shadow-lg font-bold text-white"
        >
          Create Todo
        </button>
      </div>
    </div>
  );
};

export default Createtodo;
