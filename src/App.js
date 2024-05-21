import { useContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

import Sidebar from "./components/Sidebar";
import { MovieContext, ThemeContext } from "./context/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastStyles = {
  position: "top-left",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: "light",
};

function App() {
  const [cardData, setCardData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const darkModes = useContext(ThemeContext);

  return (
    <div className={` h-full w-full ${darkModes ? "dark" : ""}`}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cardData, setCardData }}>
          <Header></Header>
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar></Sidebar>
              <MovieList></MovieList>
            </div>
          </main>
          <footer className="py-6 md:py-8 mt-8">
            <div className="container mx-auto">
              <p className="text-center text-sm text-black/30 dark:text-[#EEEEE] ">
                Copyright ©2024 | All rights reserved by Learn with Sumit
              </p>
              <br />
              <p className="text-center text-sm text-black/30 dark:text-[#EEEEE] ">
                Code{" "}
                <a
                  className=" text-primary"
                  href="https://github.com/jahid-111"
                >
                  Jahid
                </a>{" "}
                with{" "}
                <a className=" text-primary" href="https://github.com/atapas">
                  Tapas{" "}
                </a>
              </p>
            </div>
          </footer>
          <ToastContainer style={toastStyles}></ToastContainer>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
