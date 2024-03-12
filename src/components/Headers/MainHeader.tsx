import { Book } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-full flex justify-between items-center px-5 py-5 ">
      <div className="flex items-center gap-2">
        <Book color="orange" size={"40px"} />
        <p className="text-lg font-bold text-orange-400">Home</p>
      </div>
      <div className="flex gap-5 items-center">
        <p className="hidden md:block"></p>
        <button
          onClick={() => navigate("create")}
          className="bg-orange-500 rounded-lg hover:bg-orange-600 py-2 px-4 shadow-lg font-bold text-white"
        >
          Create Todo
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
