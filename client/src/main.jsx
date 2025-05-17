import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "@fontsource/alata";
import Brands from "./pages/Brands";
import Discover from "./pages/Discover";
import Promos from "./pages/Promos";
import Header from "./components/Header.jsx";
import InstaPage from "./components/InstaPage.jsx";
import Footer from "./components/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/beaute",
        element: <App />,
      },
      {
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/discover",
        element: <Discover />,
      },
      {
        path: "/promotionals",
        element: <Promos />,
      },
      {
        path: "/instagram",
        element: <InstaPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
