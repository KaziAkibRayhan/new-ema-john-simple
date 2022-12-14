import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import "./App.css";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Shipping from "./components/shipping/shipping";
import Main from "./layouts/Main";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: (
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          ),
        },
        {
          path: "/shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        { path: "/about", element: <About></About> },
        { path: "/login", element: <Login></Login> },
        { path: "/signup", element: <SignUp></SignUp> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
