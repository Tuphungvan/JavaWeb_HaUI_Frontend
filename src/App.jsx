/* eslint-disable */
import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import DetailProduct from "./pages/product/DetailProduct/DetailProduct";
import Search from "./pages/product/search/Search";
import FollowingProducts from "./pages/followingProducts/FollowingProducts";
import CategoryAdminPage from "./pages/admin/CategoryAdminPage";
import ContactPage from "./pages/contact/ContactPage";
import MarketSystemPage from "./pages/market-system/MarketSystemPage";
import BlogList from "./components/blog/BlogList";
import BlogDetail from "./components/blog/BlogDetail";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Thời gian hiệu ứng (ms)
      once: true, // Chỉ chạy một lần khi cuộn
    });
  }, []);

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product/:id",
      element: <DetailProduct />,
    },
    {
      path: "/followingProducts",
      element: <FollowingProducts />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/market-system",
      element: <MarketSystemPage />,
    },
    {
      path: "/blog",
      element: <BlogList />,
    },
    {
      path: "/blog/:slug",
      element: <BlogDetail />,
    },
    {
      path: "/admin/categories",
      element: <CategoryAdminPage />,
    },
  ]);
  return (
    <>
      <ToastContainer />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 980,
        }}
        limit={10}
      />
      {routes}
    </>
  );
};

export default App;
