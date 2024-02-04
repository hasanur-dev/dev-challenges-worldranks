import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Country, { countryLoader } from "./pages/Country";
import Countries, { countriesLoader } from "./components/Countries";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Countries />,
            loader: countriesLoader,
          },
        ],
      },
      {
        path: "/country/:countryName",
        element: <Country />,
        loader: countryLoader,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
