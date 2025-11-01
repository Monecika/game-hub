import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar></NavBar>
      <div className="p-3">
        <h1>Oops!</h1>
        <p>
          {isRouteErrorResponse(error) ? "Invalid route" : "Undefined error"}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
