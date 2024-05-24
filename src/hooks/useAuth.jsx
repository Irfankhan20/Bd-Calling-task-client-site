import { useContext } from "react";
import { AuthContext } from "../pages/authProvider/AuthProvider";

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;
