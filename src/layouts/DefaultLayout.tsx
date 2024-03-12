import MainHeader from "@/components/Headers/MainHeader";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="w-full h-screen  max-w-7xl mx-auto overflow-hidden">
      <MainHeader />
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
