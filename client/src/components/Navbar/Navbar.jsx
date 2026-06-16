import React, { useEffect, useState } from "react";
import { baseUrl, storedToken, role } from "../../App";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          AccommodoApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav">
            {storedToken && role === "guest" && (
              <NavItem path="/myReservations" text="My Reservations" />
            )}
            {storedToken && role === "owner" && (
              <NavItem path="/myAccommodations" text="My Accommodations" />
            )}
            {storedToken && role === "owner" && (
              <NavItem path="/sendRequest" text="Send Request" />
            )}
            {storedToken && role === "admin" && (
              <NavItem path="/allAccommodations" text="All Accommodations" />
            )}
            {storedToken && role === "admin" && (
              <NavItem path="/allRequests" text="All Requests" />
            )}
            {storedToken && role === "admin" && (
              <NavItem path="/allUsers" text="All Users" />
            )}
            {storedToken && role === "owner" && (
              <NavItem path="/myRequests" text="My Requests" />
            )}
            {!storedToken && <NavItem path="/login" text="Login" />}
            {!storedToken && <NavItem path="/register" text="Register" />}
            {storedToken && <NavItem path="/logout" text="Logout" />}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
