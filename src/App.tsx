import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./rootLayout/RootLayout";
import Home from "./pages/home/Home";
import { useState } from "react";
import movies, { TMovie } from "../movies";
import DetailPage from "./pages/detailPage/DetailPage";

function App() {
  const [dataMovies, setDataMovies] = useState<TMovie[]>(movies);
  const [counter, setCounter] = useState<number>(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <RootLayout
            dataMovies={dataMovies}
            setDataMovies={setDataMovies}
            counter={counter}
            setCounter={setCounter}
          />
        }
      >
        <Route index element={<Home dataMovies={dataMovies} />} />
        <Route path="movies/:details" element={<DetailPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
