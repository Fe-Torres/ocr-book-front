import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
