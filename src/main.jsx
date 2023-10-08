import ReactDOM from "react-dom/client";
//Import the pages for the router to be able to conditionally show the correct views
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AboutMePage from "./pages/AboutMePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Import required inports from react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import semantic ui css 
import "semantic-ui-css/semantic.min.css";

//Define routes. This ensures the right component responds to the right URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMePage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
      },
    ],
  },
]);

//Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
