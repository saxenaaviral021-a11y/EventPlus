import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Get user safely from localStorage
  const getStoredUser = () => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser || storedUser === "undefined" || storedUser === "null") {
      return null;
    }
    try {
      return JSON.parse(storedUser);
    } catch (error) {
      console.error("Error parsing user from localStorage", error);
      return null;
    }
  };

  const user = getStoredUser();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Navbar items
  const navItems = [
    !user && { label: "Home", path: "/" },
    !user && { label: "Login", path: "/login" },
    !user && { label: "Signup", path: "/signup" },
    user && { label: "Dashboard", path: "/dashboard" },
    user && { label: "Event Details", path: "/event/1" }, // Example
  ].filter(Boolean);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer text-white transition-transform duration-300 transform hover:scale-110"
          onClick={() => navigate(user ? "/dashboard" : "/")}
        >
          EventPulse
        </div>

        {/* Signed in info */}
        {user && (
          <span className="hidden md:block text-white font-medium">
            Signed in as {user.username || user.email}
          </span>
        )}

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop nav items */}
        <ul className="hidden md:flex space-x-6 text-white font-medium items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`transition-transform duration-300 transform hover:scale-110 hover:text-yellow-300 inline-block ${
                  location.pathname === item.path ? "text-yellow-300" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-#d54ea5 transition text-white"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden mt-4 space-y-2 font-medium overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {user && <p className="text-white">Signed in as {user.username || user.email}</p>}
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`block text-white transition-transform duration-300 transform hover:scale-110 hover:text-yellow-300 ${
              location.pathname === item.path ? "text-yellow-300" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        {user && (
          <button
            onClick={() => {
              setIsOpen(false);
              handleLogout();
            }}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition w-full text-left text-white"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

