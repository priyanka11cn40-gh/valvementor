import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import EngineeringPage from "./EngineeringPage";
import IndustriesPage from "./IndustriesPage";
import BlogPage from "./BlogPage";
import ResourcesPage from "./ResourcesPage";
import AboutPage from "./AboutPage";
import CareersPage from "./CareersPage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="engineering" element={<EngineeringPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="careers" element={<CareersPage />} />
          {/* Footer Routes */}
          <Route path="contact" element={<div className="section"><h1>Contact Us</h1></div>} />
          <Route path="privacy" element={<div className="section"><h1>Privacy Policy</h1></div>} />
          <Route path="legal" element={<div className="section"><h1>Legal Information</h1></div>} />
          <Route path="sitemap" element={<div className="section"><h1>Sitemap</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}