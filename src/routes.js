import Articles from "./Pages/Articles/Articles";
import Home from "./Pages/Home/Home";
import SinglePageMovies from "./Pages/Movie/Movie";
import MoviesForegin from "./Pages/Movies-foreign/MoviesForegin";
import MoviesIr from "./Pages/Movies-ir/MoviesIr";
import SerialForegin from "./Pages/Serial-foregin/SerialForegin";
import SerialIr from "./Pages/Serial-ir/SerialIr";
import SinglePageSerial from "./Pages/Serial/Serial";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/articles", element: <Articles /> },
  { path: "/category/movies-ir", element: <MoviesIr /> },
  { path: "/category/movies-foregin", element: <MoviesForegin /> },
  { path: "/category/serials-ir", element: <SerialIr /> },
  { path: "/category/serials-foregin", element: <SerialForegin /> },
  { path: "/movie/:movieId", element: <SinglePageMovies /> },
  { path: "/serial/:serialId", element: <SinglePageSerial /> },
];
export default routes;
