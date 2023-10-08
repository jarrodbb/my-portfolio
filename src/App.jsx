import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

//Outlet component added to coniditionally swap between the different pages depending on the URL
//Header, Footer and Nav also included. These are fixed for each page
function App() {
  return (
    <>
      <div className="p-3 nav-background">
        <Header />
       
      </div>
      <main className="mx-3">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
