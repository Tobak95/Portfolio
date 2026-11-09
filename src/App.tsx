import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Background from "./components/layout/Background";
import PageLoader from "./components/layout/PageLoader";
import WhatsappButton from "./components/layout/WhatsappButton";

// Each page loads only when it's visited (keeps the site fast)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const location = useLocation();

  return (
    // reducedMotion="user": animations calm down if the visitor turned motion off on their device
    <MotionConfig reducedMotion="user">
      <Background />
      <NavBar />

      <Suspense fallback={<PageLoader />}>
        {/* AnimatePresence lets the old page animate out before the new one comes in.
            onExitComplete scrolls to the top for the new page (replaces my old ScrollToTop) */}
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <Footer />
      <WhatsappButton />
    </MotionConfig>
  );
};

export default App;
