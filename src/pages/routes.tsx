import { createBrowserRouter } from "react-router-dom";
import Read from "./read";
import HowToUse from "./how-to-use";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Read />,
  },
  {
    path: "/how-to-use",
    element: <HowToUse />,
  },
]);
