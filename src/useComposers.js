import { useState, useEffect } from "react";

const API_ROOT = "https://api.openopus.org/composer/list";

function useComposers() {
  const [composers, setComposers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(loadComposers, []);

  function loadComposers(searchQuery) {
    const url = searchQuery
      ? `${API_ROOT}/search/${searchQuery}.json`
      : `${API_ROOT}/pop.json`;

    setError(false);
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setComposers(data.composers || []);
      })
      .catch(() => setError(true));
  }

  return [composers, isLoading, error, loadComposers];
}

export default useComposers;

/*import { useState, useEffect } from "react";

const BASE_URL = "https://api.openopus.org/composer/list/";

function useComposers() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadComposers = (searchQuery) => {
    const url = searchQuery
      ? `${BASE_URL}/search/${searchQuery}.json`
      : `${BASE_URL}pop.json`;
    setIsLoading(true);
    setError(false);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Oh noo");
        setIsLoading(false);
        return res.json();
      })
      .then((data) => setItems(data.composers || []))
      .catch((err) => setError(true));
  };

  useEffect(loadComposers, []);

  return [items, loadComposers, isLoading, error];
}

export default useComposers;
*/
