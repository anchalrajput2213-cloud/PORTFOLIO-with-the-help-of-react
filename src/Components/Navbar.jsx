import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className=" fixed top-0 left-0 w-full px-10 py-3 bg-gray-600 text-white flex justify-between items-center ">
      <h1 className="text-2xl font-bold text-white">Portfolio</h1>
      <div className="flex gap-5">
        {/* <a href="#Home" className="hover:text-black">Home </a>
        <a href="#About" className="hover:text-black">About</a>
        <a href="#Skills" className="hover:text-black">Skills</a>
        <a href="#Projects" className="hover:text-black">Projects</a>
        <a href="#Contact" className="hover:text-black">Contact</a> */}
         <Link to="/" className="hover:text-black">Home </Link>
        <Link to="/about" className="hover:text-black">About</Link>
        <Link to="/skills" className="hover:text-black">Skills</Link>
        <Link to="/projects" className="hover:text-black">Projects</Link>
        <Link to="/contact" className="hover:text-black">Contact</Link>
        <Link to="/movies" className="hover:text-black">Movies</Link>
        </div>
        </nav> 
  );
}
export default Navbar;