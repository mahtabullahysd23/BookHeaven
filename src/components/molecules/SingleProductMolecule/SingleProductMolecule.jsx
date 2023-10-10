import React from "react";
import "./SingleProductMolecule.style.scss";
import Tag from "../../atoms/Tag/Tag";
import DisplayRating from "../../atoms/DisplayRating/DisplayRating";
import Quantity from "../../atoms/Quantity/Quantity";
import Button from "../../atoms/Buttons/Button";
import { useState } from "react";
import customAxios from "../../../Utils/customAxios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Store/Slices/cartSlice";
import LinearLoader from "../../atoms/LinearLoader/LinearLoader";
const SingleProductMolecule = ({ singlebook }) => {
  const dispatch = useDispatch();
  const [loadingAddtoCart, setLoadingAddtoCart] = useState(false);
  const [value, setValue] = useState(1);

  const HandleQuantity = (value) => {
    setValue(value);
    console.log(value);
  };

  const handleAddToCart = () => {
    setLoadingAddtoCart(true);
    customAxios
      .post("/cart/add", {
        book: singlebook._id,
        quantity: value,
      })
      .then((res) => {
        dispatch(addToCart(res.data.data));
        alert(res.data.message);
        setLoadingAddtoCart(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoadingAddtoCart(false);
      });
  };

  return (
    <div className="single-product-right">
      <Tag text={singlebook.tag} color="green" />
      <h2>{singlebook.name}</h2>
      <div className="rating-single-product">
        <DisplayRating rating={singlebook.rating} />
        <p>
          {`${singlebook.rating} Rating (${singlebook.reviews.length} Customer reviews)`}{" "}
        </p>
      </div>
      <p>{singlebook.description}</p>
      <div className="price-quantity">
        <div className="price-single-product">
          <p>Price :</p>
          <h2>{`$ ${singlebook.price}`}</h2>
        </div>
        <div className="quantity-single-product">
          <p>Quantity :</p>
          <Quantity
            initialValue={value}
            min={1}
            max={singlebook.stock}
            onChange={HandleQuantity}
          />
        </div>
      </div>
      <div className="btn-group-single-prouct">
        {loadingAddtoCart ? (
          <Button  className="black-button w-100" disabled={true} text={<LinearLoader />} />
        ) : (
          <Button
            text="Add To Cart"
            className="black-button w-100"
            onClick={handleAddToCart}
          />
        )}
        <Button text="Add To WishList" className="ash-button  w-100" />
      </div>

      <div className="product-info">
        <div className="single-info">
          <h5>ISBN:</h5>
          <p>{singlebook.isbn}</p>
        </div>
        <div className="single-info">
          <h5>Author:</h5>
          <p>{singlebook.author}</p>
        </div>
        <div className="single-info">
          <h5>Publisher:</h5>
          <p>{singlebook.publisher}</p>
        </div>
        <div className="single-info">
          <h5>Language:</h5>
          <p>{singlebook.language}</p>
        </div>
        <div className="single-info">
          <h5>Pages:</h5>
          <p>{singlebook.pages}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductMolecule;
