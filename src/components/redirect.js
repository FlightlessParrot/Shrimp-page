
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Redirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname === "/index.html" && navigate("/shrimp");
  }, [location.pathname, navigate]);
}
