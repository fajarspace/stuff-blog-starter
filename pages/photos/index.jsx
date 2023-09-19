import React from "react";
import RootLayout from "../layout";

const Photos = () => {
  return (
    <>
      <RootLayout>
        <h1>Photos</h1>

        <p>Here's some of my photography.</p>
        <div
          style={{
            display: "inline-block",
            maxWidth: "100%",
            overflow: "hidden",
            position: "relative",
            boxSizing: "border-box",
            margin: 0,
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              display: "block",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                maxWidth: "100%",
                display: "block",
                margin: 0,
                border: "none",
                padding: 0,
              }}
              alt=""
              aria-hidden="true"
              src="https://images.unsplash.com/photo-1693917566028-c0f204817a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            />
          </div>
        </div>
        <p>
          <a
            target="_blank"
            rel="noopener"
            href="https://unsplash.com/photos/WeYamle9fDM"
          >
            Unsplash &#8599;
          </a>
        </p>

        <ul></ul>
      </RootLayout>
    </>
  );
};

export default Photos;
