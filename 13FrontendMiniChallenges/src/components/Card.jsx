import React from "react";
import { Link } from "react-router-dom";

function Card({ name, path }) {
  return (
    <Link to={path}>
      {name}
      <div className="block max-w-sm p-6 bg-blue-900 rounded-xl text-center">
        <h5 className="text-white text-2xl font-bold">{name}</h5>
      </div>
    </Link>
  );
}

export default Card;
