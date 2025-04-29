import { AppBar, Badge, Box, Container, Typography } from "@mui/material";
import React from "react";
import logoImg from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";

const NavBar = () => {
  const items = useSelector((state) => state.cart.sliceValue);
  console.log(items);
  return (
    <AppBar sx={{ bgcolor: "#0c0a09", padding: "8px" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <img className="w-[180px]" src={logoImg} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <NavLink to={"/"}>
            <Typography
              sx={{ fontWeight: "bold", "&:hover": { color: "#00a63e" } }}
            >
              Home
            </Typography>
          </NavLink>
          <NavLink to={"/cart"}>
            <Badge
              badgeContent={items.length}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#15803D",
                  color: "white",
                  animation: items.length ? "bounce 1s infinite" : "none",
                },
                "@keyframes bounce": {
                  "0% ,100%": {
                    transform: "translateY(0)",
                  },
                  "60%": {
                    transform: "translateY(-5px)",
                  },
                },
              }}
            >
              <IoCart size={30} />
            </Badge>
          </NavLink>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBar;
