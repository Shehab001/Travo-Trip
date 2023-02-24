import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/bkub",
        element: <Home></Home>,
      },
      //   {
      //     path: "/login",
      //     element: <LogIn></LogIn>,
      //   },

      //   {
      //     path: "/signin",
      //     element: <SignIn></SignIn>,
      //   },
      //   {
      //     path: "/allservices",
      //     element: <AllServices></AllServices>,
      //   },
      //   {
      //     path: "/loading",
      //     element: <Loader></Loader>,
      //   },
      //   {
      //     path: "/myreview",
      //     element: (
      //       <Private>
      //         <Myreview></Myreview>
      //       </Private>
      //     ),
      //   },
      //   {
      //     path: "/blogs",
      //     element: <Blog></Blog>,
      //   },
      //   {
      //     path: "/addservice",
      //     element: <Addservice></Addservice>,
      //   },
      //   {
      //     path: "/singleservice/:id",
      //     element: <SingleService></SingleService>,
      //     loader: ({ params }) =>
      //       fetch(
      //         `https://travel-site-backend.vercel.app/singleservice/${params.id}`
      //       ),
      //   },
      //   {
      //     path: "*",
      //     element: <h1 className="text-6xl text-center m-20">404 Not Found</h1>,
      //   },
    ],
  },
]);

export default router;
