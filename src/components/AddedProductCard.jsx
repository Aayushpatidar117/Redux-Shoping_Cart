import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeToCart } from "../redux/slice/CartSlice";
import { toast } from "react-toastify";

const AddedProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" w-[100%] flex flex-col lg:flex-row justify-center items-center gap-[2rem] m-[1rem]">
        <div className="w-[100%] lg:w-[40%]">
          <img src={product.image} />
        </div>
        <div className=" w-[100%] lg:w-[60%] flex flex-col justify-center items-start gap-[1rem]">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <p className="text-md font-semibold">{product.description}</p>
          <div className="flex justify-between items-center w-full ">
            <p className="text-xl font-bold text-green-800">${product.price}</p>
            <button
              onClick={() => {
                dispatch(removeToCart(product));
                toast.dismiss();
                toast.success("Product is Removed From Your Cart");
              }}
              className="bg-red-300 w-[50px] h-[50px] flex 
                justify-center items-center rounded-full"
            >
              <MdDeleteForever className="text-3xl text-red-900" />
            </button>
          </div>
          <div className=" bg-black h-[1px]"></div>
        </div>
      </div>
      <div className="bg-black h-[2px]"></div>
    </div>
  );
};

export default AddedProductCard;
