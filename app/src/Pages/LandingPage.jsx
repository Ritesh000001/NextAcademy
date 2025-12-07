import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Head from "../Components/Head.jsx";
import Feature from "../Components/Feature.jsx";
import About from "../Components/About.jsx";
import ExploreCourses from "../Components/ExploreCourses.jsx";
import Categories from "../Components/Categories.jsx";
import Courses from "../Components/Courses.jsx";
import FAQ from "../Components/FAQ.jsx";
import Footer from "../Components/Footer.jsx";

const LandingPage = () => {
  return (
    <section id='home'>
        <Navbar />
        <Head />
        <Feature/>
        <About />
        <ExploreCourses />
        <Categories />
        <Courses />
        <FAQ />
        <Footer />
    </section>
  )
}

export default LandingPage