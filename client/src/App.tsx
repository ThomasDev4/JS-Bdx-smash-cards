import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Pages/homepage/footer";
import { NavBar } from "./components/Pages/homepage/navbar";
function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
