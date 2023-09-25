import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./Home.css";
import Form from "../components/form/Form";

const Home = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <main className="d-flex flex-column flex-sm-row flex-lg-row justify-content-center align-items-center main-container">
        <section className="taskForm border col-11 col-sm-6 col-lg-6 d-flex justify-content-center align-items-center">
          <Form />
        </section>
        <section className="taskList border col-11 col-sm-6 col-lg-6">asd</section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
