import { createBrowserRouter } from "react-router-dom";
import { Home } from '../components/Home';
import { ExampleOnChange } from '../components/ExampleOnChange';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "onChange",
    element: <ExampleOnChange/>,
  }
]);