import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header"
function App() {
  return (
    <>
    <div className="p-3 nav-background">
      <Header />
      <Nav />
      </div>
      <main className="mx-3">
      <Outlet />
      </main>
    </>
  );
}

export default App;
