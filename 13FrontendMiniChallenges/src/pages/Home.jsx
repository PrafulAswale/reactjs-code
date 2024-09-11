import React from "react";
import Card from "../components/Card";

function Home() {
  const challenges = [
    {
      title: "Counter",
      path: "/counter",
    },
    {
      title: "Image Gallery",
      path: "/image-gallery",
    },
    {
      title: "Accordion",
      path: "/accordion",
    },
    {
      title: "Guess the number",
      path: "/Guess-the-number",
    },
  ];
  return (
    <div className="grid gap-5 grid-cols-4 mt-8 mb-8">
      {challenges.map((ele) => (
        <Card key={ele.title} title={ele.title} path={ele.path} />
      ))}
    </div>
  );
}

export default Home;
