import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./rootLayout/RootLayout";
import Home from "./pages/home/Home";
import DateAsc from "./pages/dateAsc/DateAsc";
import DateDes from "./pages/dateDes/DateDes";
import BestRate from "./pages/bestRate/BestRate";
import AtoZ from "./pages/aToZ/AToZ";
import ZtoA from "./pages/zToA/ZToA";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="date-asc" element={<DateAsc />} />
        <Route path="date-des" element={<DateDes />} />
        <Route path="bestrate" element={<BestRate />} />
        <Route path="title-asc" element={<AtoZ />} />
        <Route path="title-des" element={<ZtoA />} />
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
