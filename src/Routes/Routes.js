import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService";
import Blog from "../Components/Blog";
import Error from "../Components/Error";
import Home from "../Components/Home";
import MyReview from "../Components/MyReview";
import Private from "../Components/Private/Private";
import SignIn from "../Components/SignIn";
import SignUP from "../Components/SignUp";
import SingleService from "../Components/SingleService";

import Main from "../Layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
      {
        path: "/myreview",
        element: (
          <Private>
            <MyReview></MyReview>
          </Private>
        ),
      },
      {
        path: "/addservicee",
        element: <SingleService></SingleService>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: "/singleservice/:id",
        element: (
          <Private>
            <SingleService></SingleService>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://travel-site-backend.vercel.app/singleservice/${params.id}`
          ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
