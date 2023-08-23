import React from "react";
import ProductCard from "./ProductCard";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const productList = [
    {
      name: "MacBook",
      price: 79990,
      imgSrc:
        "https://idestiny.in/wp-content/uploads/2021/10/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__en-IN.jpg",
      id: "a1",
    },
    {
      name: "Air Max Sc Running Shoe",
      price: 5095,
      imgSrc:
        "https://www.campusshoes.com/cdn/shop/products/CG-569-G-GRY-BLK-1.jpg?v=1670325815&width=720",
      id: "a2",
    },
    {
      name: "Black Shoes",
      price: 5120,
      imgSrc: "https://m.media-amazon.com/images/I/71FtUvpfI5L._UX675_.jpg",
      id: "a3",
    },
    {
      name: "Men Casual Cargo Jogger",
      price: 849,
      imgSrc: "https://m.media-amazon.com/images/I/71o0o7xx7RL._UX569_.jpg",
      id: "a4",
    },
    {
      name: "Hawaiian Printed Shirt",
      price: 1199,
      imgSrc: "https://m.media-amazon.com/images/I/71UnBVsO2qL._UY741_.jpg",
      id: "a5",
    },
    {
      name: "P.P. Plain Oversized",
      price: 397,
      imgSrc: "https://m.media-amazon.com/images/I/41mlIDlG8wL.jpg",
      id: "a6",
    },
    {
      name: "Nivea Men Body Wash",
      price: 329,
      imgSrc:
        "https://m.media-amazon.com/images/I/41qgX3KHu6L._SX300_SY300_QL70_FMwebp_.jpg",
      id: "a7",
    },
    {
      name: "Creatine Monohydrate",
      price: 999,
      imgSrc:
        "https://cdn.nutrabay.com/wp-content/uploads/2022/11/NB-GNC-1046-01-01.jpg",
      id: "a8",
    },
    {
      name: "CBUM Shaker",
      price: 299,
      imgSrc:
        "https://healthfarmnutrition.com/cdn/shop/products/bumshakercopy.jpg?v=1673948995&width=750",
      id: "a9",
    },
    {
      name: "Muscletech Nitrotech",
      price: 5450,
      imgSrc: "https://gmcsupplements.com/wp-content/uploads/2022/01/1.jpg",
      id: "a10",
    },
    {
      name: "Peanut Butter",
      price: 545,
      imgSrc:
        "https://asitisnutrition.com/cdn/shop/products/ProductImage1_1024x1024.jpg?v=1648120766",
      id: "a11",
    },
    {
      name: "APPLE iPhone 12",
      price: 53999,
      imgSrc:
        "https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dkyh2zgrh.jpeg?q=70",
      id: "a12",
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
