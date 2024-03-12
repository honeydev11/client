import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  const verified = localStorage.getItem("token");

  useEffect(() => {
    if (verified === null) {
      navigate("/auth", { replace: true });
    }
  }, [navigate, verified]);

  return children;
}
