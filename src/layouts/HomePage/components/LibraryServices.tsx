import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const LibraryServices = () => {
  const { authState } = useOktaAuth();
  return (
    <div className="container my-5">
      <div className="row p-4 align-items-center border shadow-lg">
        <div className="col-lg-7 p-3">
          <h1 className="display-4 fw-bold">
            Cant'find what you are looking for?
          </h1>
          <p className="lead">Lorem ipsum dolor sit amet.</p>

          {authState?.isAuthenticated ? (
            <Link
              type="button"
              className="btn main-color btn-lg text-white"
              to="serch"
            >
              Explore top books
            </Link>
          ) : (
            <Link className="btn main-color btn-lg text-white" to="/login">
              Sign up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
