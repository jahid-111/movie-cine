import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar></Sidebar>
          <MovieList></MovieList>
        </div>
      </main>
      <footer class="py-6 md:py-8 mt-8">
        <div class="container mx-auto">
          <p class="text-center text-sm text-black/30 dark:text-[#EEEEE] ">
            Copyright ©2024 | All rights reserved by Learn with Sumit
          </p>
          <br />
          <p class="text-center text-sm text-black/30 dark:text-[#EEEEE] ">
            Code{" "}
            <a className=" text-primary" href="https://github.com/jahid-111">
              Jahid
            </a>{" "}
            with{" "}
            <a className=" text-primary" href="https://github.com/atapas">
              Tapas{" "}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
