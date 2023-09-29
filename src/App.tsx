import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import BusinesCase from "./components/competitions/business-case";
import PlanDesign from "./components/competitions/plan-design";
import Essay from "./components/competitions/essay";
import ProblemSolving from "./components/competitions/problem-solving";
import WorkShop from "./components/events/workshop";
// import GrandSeminar from "./components/events/grand-seminar";
// import AwardingNight from "./components/events/awarding-night";
// import Merchandise from "./components/merchandise";
import Faqs from "./components/faqs";
// import NotFound from "./components/notfound";
import Upcoming from "./components/upcoming";

function App() {
  // Scroll to top beetween pages
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="*" element={<HomePage />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/business-case" element={<BusinesCase />} />
        <Route path="/plant-design" element={<PlanDesign />} />
        <Route path="/essay" element={<Essay />} />
        <Route path="/problem-solving" element={<ProblemSolving />} />
        <Route path="/workshop" element={<WorkShop />} />
        <Route path="/grand-seminar" element={<Upcoming />} />
        <Route path="/awarding-night" element={<Upcoming />} />
        <Route path="/merchandise" element={<Upcoming />} />
        <Route path="/faq" element={<Faqs />} />
      </Routes>
    </Layout>
  );
}

export default App;
