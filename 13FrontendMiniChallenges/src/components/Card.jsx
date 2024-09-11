import React from "react";
import { Link } from "react-router-dom";

function Card({ title, path }) {
  return (
    <Link to={path}>
      <div className="block w-full p-6 bg-blue-900 rounded-xl text-center">
        <h5 className="text-white text-2xl font-bold">{title}</h5>
      </div>
    </Link>
  );
}

export default Card;
