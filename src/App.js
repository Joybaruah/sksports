import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { KarateDetails } from "./components/KarateDetails";
import { Footer } from "./components/Footer";
import { BasketBallDetails } from "./components/BasketBallDetails";
import { BadmintonDetails } from "./components/BadmintonDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/karate" element={<KarateDetails />} />
          <Route path="/basketball" element={<BasketBallDetails />} />
          <Route path="/badminton" element={<BadmintonDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
