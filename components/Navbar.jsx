import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <h1>Your Name</h1> */}
      <div className="nav-line">
        <Link className="nav-link" href="/">
          About
        </Link>
        <Link className="nav-link" href="/photos">
          Photos
        </Link>
        <Link className="nav-link" href="/posts">
          Posts
        </Link>
      </div>
    </>
  );
};

export default Navbar;
