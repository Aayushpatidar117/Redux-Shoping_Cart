import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddedProductCard from "../components/AddedProductCard";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const navigate = useNavigate();

  const itemCart = useSelector((state) => state.cart.sliceValue);
  function totalAmountCalculator() {
    return itemCart.reduce((sum, item) => sum + item.price, 0);
  }

  return itemCart && itemCart.length === 0 ? (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-[2rem]">
      <p className="text-slate-700 text-xl font-bold">Yout Cart is Empty!</p>
      <Button
        onClick={() => navigate("/")}
        sx={{
          bgcolor: "green",
          color: "white",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "9px",
          width: "30%",
        }}
      >
        Shop Now
      </Button>
    </div>
  ) : (
    <div
      className="w-[100%] mx-auto flex flex-col lg:flex-row lg:items-start  justify-center items-center
       gap-[.2rem] mt-[7rem] mb-[2rem] "
    >
      <ToastContainer position="top-center" />
      <div className="w-[50%] flex flex-wrap justify-center items-center gap-5  ">
        {itemCart.map((product) => (
          <AddedProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="w-[50%] flex flex-col gap-[25rem] p-[2rem]">
        <div>
          <p className="text-green-900 text-lg font-bold">Your Card </p>
          <h1 className="text-green-700 text-5xl font-bold">Summary</h1>
          <p className="font-bold text-xl text-slate-800">
            Total Items: {itemCart.length}
          </p>
        </div>

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="text-lg font-bold text-slate-700">
            Total Amount: $<span>{totalAmountCalculator().toFixed(2)}</span>
          </p>
          <Button
            sx={{
              bgcolor: "green",
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem",
              padding: "9px",
              width: "70%",
            }}
          >
            Check Out Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
