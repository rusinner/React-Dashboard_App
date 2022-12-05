import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="tetx-gray-400">{category}</p>
      <p className="tetx-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default Header;
