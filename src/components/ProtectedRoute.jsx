import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  // isAuthenticated but page is loading
  const token = localStorage.getItem("token");
  if (!isAuthenticated && !token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
