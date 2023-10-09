import React from "react";
import CardMolecule from "../../molecules/CardMolecule/CardMolecule";
import "./BooksOrganism.style.scss";
import useBook from "../../../CustomHooks/useBook";

const BooksOrganism = () => {
  const { books, loading } = useBook();


  return (
    <div className="book-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        books.map((book) => {
          return (
            <CardMolecule
              key={book._id}
              id={book._id}
              name={book.name}
              author={book.author}
              price={book.price}
              rating={book.rating}
              discount={book.discount}
              tag={book.tag}
              imgUrl={book.imageUrl}
            />
          );
        })
      )}
    </div>
  );
};

export default BooksOrganism;
