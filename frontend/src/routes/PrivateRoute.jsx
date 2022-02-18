import react, { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const inPrivatePaths = ["/Products"];

function PrivateRoute({ children }) {
  const location = useLocation();
  const current = location.pathname;
  const [userContext] = useContext(UserContext);

  const isPrivate = inPrivatePaths.includes(current);
  // const isToken = token.length !== 0;
  // console.log(isToken);

  if (isPrivate && current !== "/Login" && !userContext) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <Navigate to="/Login" state={{ from: location }} />;
  }

  return children;
}

export default PrivateRoute;
