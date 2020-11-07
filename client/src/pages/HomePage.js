import React from "react";
import { NavLink } from "react-router-dom";

function homePages() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="text-center">
              <h1>Welcome!</h1>
              <h4>
                Here you can search for books and save them to a small library.{" "}
              </h4>
              <h4>Please select a section below to start!</h4>
              <br/>
              <br/>
              <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                  <div className="row">
                    <a className="col-sm-4">
                      <NavLink to="/search" className="nav-link btn-danger">
                        Search
                      </NavLink>
                    </a>
                    <div className="col-sm-4"></div>
                    <a className="col-sm-4">
                      <NavLink to="/search" className="nav-link btn-danger">
                        Saved
                      </NavLink>
                    </a>
                  </div>
                </div>
                <div className="col-sm-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homePages;
