import React from "react";
import CardList from "./components/CardList";
import CreateCard from "./components/CreateCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* <CreateCard /> */}
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
