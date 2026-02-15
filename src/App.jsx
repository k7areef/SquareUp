// React Router DOM:
import { Routes, Route } from "react-router-dom";
// Pages:
import AboutPage from "@pages/AboutPage";
import CareersPage from "@pages/CareersPage";
import ContactPage from "@pages/ContactPage";
import HomePage from "@pages/HomePage";
import ProcessPage from "@pages/ProcessPage";
import ServicesPage from "@pages/ServicesPage";
import WorksPage from "@pages/WorksPage";
// Common Components:
import NavigraitonBar from "@components/layout/NavigationBar";
import Footer from "@components/layout/Footer";

function App() {
  return (
    <div className="App bg-grey-10 text-white min-h-screen">
      {/* Navigation Bar */}
      <NavigraitonBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;