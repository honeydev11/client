import TaskRenderer from "@/components/TaskRenderer/TaskRenderer";
import { setTasks } from "@/redux/slices/TaskSlice";
import { RootState } from "@/redux/store";
import { useGetAllTasksQuery } from "@/services/task";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

function Home({}: Props) {
  const { data, refetch } = useGetAllTasksQuery("getAll");
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    refetch();
    if (!data) return;
    else {
      console.log("data: ", data);
      dispatch(setTasks(data));
    }
  }, [data, refetch]);

  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="text-center text-3xl font-semibold">
        Welcome {user.name}
      </h1>

      <div className="max-h-[85%] h-full overflow-hidden overflow-y-scroll">
        <TaskRenderer />
      </div>
    </div>
  );
}

export default Home;
