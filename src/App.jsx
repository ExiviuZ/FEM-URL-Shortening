import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-center overflow-hidden sm:text-left">
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
