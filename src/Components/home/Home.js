import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "../about/About";
import Contact from "../contact/Contact";
import Login from "../login/Login";
import NoPage from "../nopage/NoPage";
import Layout from "../../@shared/Layout";
import News from "../news/News";

function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/news" element={<Layout />}>
            <Route path="/news" element={<News />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default Home;
