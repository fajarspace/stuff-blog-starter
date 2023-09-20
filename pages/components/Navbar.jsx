import Link from "next/link";
import Theme from "./Theme";
import { config } from "@/theme.config";

const Navbar = () => {
  const navItems = config.filter((item) => item.type === "navbar");
  return (
    <>
      {/* <h1>Your Name</h1> */}
      <div className="nav-line">
        {navItems.map((item, index) => (
          <Link key={index} className="nav-link" href={item.url}>
            {item.title}
          </Link>
        ))}
        <Theme />
      </div>
    </>
  );
};

export default Navbar;
