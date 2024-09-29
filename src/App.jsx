import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/NavTabs";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
