import "./App.css";
import Header from "./Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar></Sidebar>
        </div>
      </main>
    </div>
  );
}

export default App;
