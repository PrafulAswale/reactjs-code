import React from "react";
import ThemeBtn from "../ThemeBtn";

function Header() {
  return (
    <nav className="bg-blue-500 text-white p-3">
      <div className="inline text-2xl font-semibold">React Mini Challenges</div>
      <div className="float-end">
        <ThemeBtn />
        <a href="www.github.com/prafulaswale">Source Code</a>
      </div>
    </nav>
  );
}

export default Header;
