import React from "react";
import "./App.css";
import ComposerGrid from "./components/ComposerGrid";
import useComposers from "./useComposers";
import { useState } from "react";

export default function App() {
  const [composers, isLoading, error, loadComposers] = useComposers();
  const [searchQuery, setSearchQuery] = useState("");

  /*
  useEffect(() => {
    if (!searchQuery) reset();
  }, [searchQuery]);
  */

  const onChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getContent = () => {
    if (isLoading) return <div>is Loading</div>;
    if (error) return <div>Request failed!</div>;
    if (!composers.length) return <div>No result matched your search</div>;

    return <ComposerGrid items={composers} />;
  };

  const reset = () => {
    setSearchQuery("");
    loadComposers();
  };

  return (
    <div className="container">
      <div className="titel">
        <h1>Hello Composers</h1>
      </div>
      <div className="SearchActions">
        <input
          placeholder="type at least 4 characters..."
          onChange={onChange}
          value={searchQuery}
          className="SearchInput"
          type="text"
        />{" "}
        <button
          disabled={searchQuery.length < 4}
          onClick={() => loadComposers(searchQuery)}
          className="SearchButton"
        >
          search
        </button>
        <button onClick={reset} className="SearchButton">
          reset
        </button>
      </div>
      {getContent()}
    </div>
  );
}
