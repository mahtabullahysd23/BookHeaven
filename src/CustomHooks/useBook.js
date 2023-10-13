import { useState, useEffect } from "react";
import customAxios from "../Utils/customAxios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const useBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchQuery = useSelector((state) => state.filter.filterString);
  const deletedBook = useSelector((state) => state.book.allBooks);

  const callApi = () => {
    setLoading(true);
    customAxios
      .get(searchQuery)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setBooks([]);
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (searchQuery.includes("Search")) {
      const timeOut = setTimeout(() => {
        callApi();
      }, 1000);
      return () => clearTimeout(timeOut);
    } else {
      callApi();
    }
  }, [searchQuery,deletedBook]);

  return { books, loading };
};

export default useBook;
