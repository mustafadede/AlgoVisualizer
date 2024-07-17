import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import RootLayout from "./routes/RootLayout";
import Sorting from "./routes/Sorting";
import Bubble from "./routes/Bubble";
import Selection from "./routes/Selection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sorting",
        element: <Sorting />,
        children: [
          { path: "bubble", element: <Bubble /> },
          { path: "selection", element: <Selection /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
