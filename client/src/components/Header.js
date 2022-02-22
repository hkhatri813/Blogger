import * as React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./authContext";
export default function Header() {
  const { currentUser, logout } = useAuth();
  console.log(currentUser);

  async function handleLogout() {
    console.log("hree");
    await logout();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          {currentUser ? (
            <li className="nav-item active">
              <Link className="nav-link" to="/create">
                Create Blog <span className="sr-only">(current)</span>
              </Link>
            </li>
          ) : (
            ""
          )}
          {currentUser ? (
            ""
          ) : (
            <>
              <li className="nav-item active">
                <Link className="nav-link" to="/Register">
                  Register<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Login">
                  Login<span className="sr-only">(current)</span>
                </Link>
              </li>
            </>
          )}
        </ul>
        {currentUser ? (
          <button className="btn btn-secondary" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
