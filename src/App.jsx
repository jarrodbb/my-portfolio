import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="p-3 nav-background">
        <Header />
        <Nav />
      </div>
      <main className="mx-3">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
