import React, { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (query: string) => {
    if (query === "") {
      return alert("Please, enter a text!");
    }
    setQuery(query);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery query={query} />
    </div>
  );
};

export default App;
