import Link from "next/link";
import Theme from "./Theme";

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
        <Theme />
      </div>
    </>
  );
};

export default Navbar;
