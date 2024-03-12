import AuthHeader from "@/components/Headers/AuthHeader";
import { Link, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();

  return (
    <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <AuthHeader />
      <div className="w-5/6 md:w-3/4 lg:w-3/5  xl:w-1/4 rounded-xl flex items-center justify-center bg-opacity-20 backdrop-blur-[50px] shadow-xl border">
        <div className="flex flex-col items-center my-10 justify-center w-3/4">
          <Outlet />
        </div>
      </div>
      {!location.pathname.includes("register") && (
        <p className="text-sm text-secondary">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="underline underline-offset-8 hover:font-bold cursor-pointer"
          >
            Sign up
          </Link>{" "}
        </p>
      )}
    </div>
  );
};

export default AuthLayout;
