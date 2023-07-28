import React from "react";
import ProductCard from "./ProductCard";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const productList = [
    {
      name: "MacBook",
      price: 12000,
      imgSrc:
        "https://idestiny.in/wp-content/uploads/2021/10/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__en-IN.jpg",
      id: "asdasdasd",
    },
    {
      name: "Black Shoes",
      price: 480,
      imgSrc:
        "https://www.campusshoes.com/cdn/shop/products/CG-569-G-GRY-BLK-1.jpg?v=1670325815&width=720",
      id: "asdwerzxc",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({
      type: "addToCart",
      payload: options,
    });
    dispatch({
      type: "calculatePrice",
    });
    toast.success("Added to cart");
  };

  return (
    <div className="home">
      {productList.map((item, index) => (
        <ProductCard
          key={index}
          name={item.name}
          id={item.id}
          price={item.price}
          imgSrc={item.imgSrc}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Home;
