import { Box, Button, Card, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../redux/slice/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const cartItems = useSelector((state) => state.cart.sliceValue);
  const dispatch = useDispatch();
  console.log(cartItems);

  return (
    <Card
      sx={{
        boxShadow:
          "0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1);",
        width: "230px",
        height: "360px",
        borderRadius: "0.5rem",
        transition: "transform 500ms ease-in-out",
        "&:hover": {
          transform: "scale(1.15)",
          cursor: "pointer",
        },
        marginBottom: "20px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container>
        <div className="flex flex-col gap-[8px]">
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              fontWeight: "semibold",
              marginTop: "4px",
              width: "360px",
            }}
          >{`${product.title.slice(0, 15)}...`}</Typography>
          <Typography
            sx={{
              fontSize: "10px",
              textAlign: "left",
              textWrap: "wrap",
              color: "gray",
              width: "180px",
            }}
          >
            {`${product.description.split(" ").slice(0, 10).join(" ")}...`}
          </Typography>
        </div>

        <div className="h-[180px]  ">
          <img className="h-full w-full" src={product.image} />
        </div>
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "20px",
          width: "100%",
        }}
      >
        <Typography
          sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
          className="text-green-700"
        >
          ${product.price}
        </Typography>
        {cartItems && cartItems.some((item) => item.id === product.id) ? (
          <Button
            onClick={() => {
              dispatch(removeToCart(product));
              toast.dismiss();
              toast.success("Item Removed Sucesfully");
            }}
            sx={{
              fontSize: "0.7rem",
              padding: ".3rem",
              border: "2px",
              borderStyle: "solid",
              borderRadius: "40px",
              borderColor: "black",
              color: "black",
              fontWeight: "bold",
              transition: "all 600ms ease-in",
              "&:hover": {
                bgcolor: "black",
                color: "white",
              },
            }}
          >
            remove to card
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(addToCart(product));
              toast.dismiss();
              toast.success("Item Added Sucesfully");
            }}
            sx={{
              fontSize: "0.7rem",
              padding: ".3rem",
              border: "2px",
              borderStyle: "solid",
              borderRadius: "40px",
              borderColor: "black",
              color: "black",
              fontWeight: "bold",
              transition: "all 600ms ease-in",
              "&:hover": {
                bgcolor: "black",
                color: "white",
              },
            }}
          >
            Add to card
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default ProductCard;
