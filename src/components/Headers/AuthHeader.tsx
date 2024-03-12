import { Book } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    setIsLogin(path !== "register");
  }, [location]);

  const handleClick = () => {
    setIsLogin(!isLogin);
    navigate(isLogin ? "/auth/register" : "/auth/login");
  };

  return (
    <div className="absolute top-0 w-full max-w-6xl flex justify-between items-center px-8 py-4 ">
      <div className="flex items-center gap-2">
        <Book color="orange" size={"40px"} />
        <p className="text-lg font-bold text-orange-400">To do</p>
      </div>
      <div className="flex gap-5 items-center">
        <p className="hidden md:block">
          {isLogin ? "Already have an account?" : "Don't have an account?"}{" "}
        </p>
        <button
          onClick={handleClick}
          className="bg-orange-500 rounded-lg hover:bg-orange-600 py-2 px-4 shadow-lg font-bold text-white"
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthHeader;
