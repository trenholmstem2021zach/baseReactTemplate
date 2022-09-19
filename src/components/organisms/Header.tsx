import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

import { AuthButton } from "../molecules/AuthButton";
import { HomeDropDownAuth } from "../molecules/HomeDropDownAuth";
import { HomeDropDownPublic } from "../molecules/HomeDropDownPublic";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PostsList from "../templates/PostList";
export default function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              ab
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              {user === undefined || isLoading || !isAuthenticated ? (
                <HomeDropDownPublic />
              ) : (
                <HomeDropDownAuth />
              )}
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="dropdown text-end">
              <a
                href="#a"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="./favicon.ico"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                {user === undefined || isLoading || !isAuthenticated ? (
                  <></>
                ) : (
                  <>
                    <li>
                      <a className="dropdown-item" href="#a">
                        New project...
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#a">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#a">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </>
                )}
                <li>
                  <a className="dropdown-item" href="#a">
                    <AuthButton />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <PostsList />
        </div>
      </header>
    </>
  );
}
