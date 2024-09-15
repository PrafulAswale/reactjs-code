import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./pages/Counter.jsx";
import Home from "./pages/Home.jsx";
import ImageGallary from "./pages/ImageGallary.jsx";
import Accordion from "./pages/Accordion.jsx";
import GuessTheNumber from "./pages/GuessTheNumber.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/image-gallery",
        element: <ImageGallary />,
      },
      {
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/Guess-the-number",
        element: <GuessTheNumber />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
