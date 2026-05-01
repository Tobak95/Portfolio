import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import SuspenseLoader from "./component/layout/SuspenseLoader";
import "./App.css";
import ScrollToTOp from "./component/layout/ScrollToTOp";
import WhatsappButton from "./component/WhatsappButton";

const HomePage = lazy(() => import("./Pages/HomePage"));
const AboutMe = lazy(() => import("./Pages/AboutMe"));

function App() {
  return (
    <>
      
        <Router>
          <WhatsappButton/>
          <ScrollToTOp/>
          <Suspense fallback={<SuspenseLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutMe />} />
            </Routes>
          </Suspense>
        </Router>
      
    </>
  );
}

export default App;
