import { useState, useEffect } from "react";
import customAxios from "../Utils/customAxios";
import { useSelector } from "react-redux";

const useBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchQuery = useSelector((state) => state.filter.filterString);

  const callApi = () => {
    setLoading(true);
    customAxios
      .get(searchQuery)
      .then((response) => {
        setBooks(response.data.data.books);
         setLoading(false);
      })
      .catch((error) => {
        setBooks([]);
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {

    if (searchQuery === "/books") {
      callApi();
    } else {
      const timeOut = setTimeout(() => {
        callApi();
      }, 1000);
      return () => clearTimeout(timeOut);
    }
  }, [searchQuery]);

  return { books, loading };
};

export default useBook;
