import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loding from "../components/Loding";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loding, setLoding] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoding(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
        {
          <div className="w-[100%] h-[100%] flex justify-center items-center gap-[20px]">
            <h1 className="text-3xl text-red-700 font-bold text-wrap">
              Sorry We are Unable to Display the Products Due to Some Technical
              Issues
            </h1>
            <p>{err}</p>
            <ImSad />
          </div>;
        }
        setProducts([]);
      } finally {
        setLoding(false);
      }
    }
    fetchData();
  }, []);
  console.log("product display after useEffect Hook ", products);

  return (
    <Container
      sx={{
        paddingTop: "6rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
      <ToastContainer position="top-center" autoClose={3000} limit={1} />
      {loding ? (
        <Loding />
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </Container>
  );
};

export default Home;
