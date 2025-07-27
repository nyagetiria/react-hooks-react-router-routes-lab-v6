import App from "./components/App"; // Add this
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "actors", element: <Actors /> },
      { path: "directors", element: <Directors /> },
      { path: "movie/:id", element: <Movie /> },
    ],
  },
];

export default routes;
