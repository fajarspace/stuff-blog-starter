import React from "react";

export const data = {
  name: "fajarspace",
  year: new Date().getFullYear(),
};

const Footer = () => {
  return (
    <>
      <small style={{ display: "block", marginTop: "8rem" }}>
        <time>{data.year}</time> &copy; {data.name}
        <a href="feed.html">RSS</a>
      </small>
    </>
  );
};

export default Footer;
