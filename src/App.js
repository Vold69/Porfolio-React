import React from "react";
import Sidebar from "./Content/Sidebar";
import Home from "./Content/Home";
import Comp from "./Content/Comp";
import Project from "./Content/Project";
import Show from "./Content/Show";
import Question from "./Content/Question";
import Contact from "./Content/Contact";

function App() {
  return (
    <>
      <Home />
      <Comp />
      <Project />
      <Show />
      <Question />
      <Contact />
      <Sidebar />
    </>
  );
}

export default App;
