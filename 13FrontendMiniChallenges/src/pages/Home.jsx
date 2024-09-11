import React from "react";
import Card from "../components/Card";

function Home() {
  const challenges = [
    {
      name: "Counter",
      path: "/counter",
    },
    {
      name: "Image Gallery",
      path: "/image-gallery",
    },
  ];
  return (
    <div className="grid">
      {challenges.map((ele) => (
        <Card key={ele.name} name={ele.name} path={ele.path} />
      ))}
    </div>
  );
}

export default Home;
