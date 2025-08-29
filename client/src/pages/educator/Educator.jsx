import React from "react";
import { Outlet } from "react-router-dom";

const Educator = () => {
  return (
    <div>
      <h3>welcome to educator page</h3>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Educator;
