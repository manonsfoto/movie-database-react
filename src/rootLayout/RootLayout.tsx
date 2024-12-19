import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import { TMovie } from "../../movies";

interface Props {
  dataMovies: TMovie[];
  setDataMovies: React.Dispatch<React.SetStateAction<TMovie[]>>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const RootLayout: React.FC<Props> = ({
  setDataMovies,
  dataMovies,
  setCounter,
  counter,
}) => {
  return (
    <>
      <Nav
        setDataMovies={setDataMovies}
        dataMovies={dataMovies}
        setCounter={setCounter}
        counter={counter}
      />
      <Outlet />
    </>
  );
};

export default RootLayout;
