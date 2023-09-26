import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./Home.css";
import Form from "../components/form/Form";
import Tasks from "../components/tasksList/Tasks";


const Home = () => {
  const [tasks, setTasks] = useState([]);



  const handleAddTasks = (task) => {
    setTasks([...tasks, { id: Date.now(), title: task, done: false }]);
  }

  return (
    <div className="d-flex flex-column home-container">
      <Navbar />
      <main className="d-flex flex-column flex-sm-row flex-lg-row justify-content-center align-items-center main-container">
        <section className="taskForm shadow col-11 col-sm-6 col-lg-6 d-flex justify-content-center align-items-center">
          <Form handleAddTasks={handleAddTasks} />
        </section>
        <section className="taskList mt-3  col-11 col-sm-6 col-lg-6">
          <Tasks tasks={tasks}/>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
