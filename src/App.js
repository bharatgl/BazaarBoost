import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import "./App.css";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* This home is our childRoute*/}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
