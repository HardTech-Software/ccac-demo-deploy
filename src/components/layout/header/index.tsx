"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const MenuItem = ({
  title,
  handleClick,
  itemActive,
  id,
}: {
  title: string;
  handleClick: () => void;
  itemActive: number;
  id: number;
}) => {
  const isActive = itemActive === id;
  return (
    <Box
      onClick={handleClick}
      sx={{
        color: "white",
        cursor: "pointer",
        marginRight: "30px",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <Typography
        sx={{
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
const Header = () => {
  const router = useRouter();
  const [itemActive, setItemActive] = useState(0);

  const handleChange = (id: number) => {
    setItemActive(id);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#247DEA",
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "70px",
        boxShadow: "0px 9px 28px -5px rgba(0,0,0,0.55)",
        zIndex: 999,
      }}
    >
      <Box
        sx={{
          //   backgroundColor: "green",
          flex: 1,
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="white">
          CCAC
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            handleClick={() => {
              handleChange(item.id);
              router.push(item.href);
            }}
            itemActive={itemActive}
            title={item.title}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Header;

const menuItems = [
  { id: 0, title: "Home", href: "/" },
  { id: 1, title: "¿Quienes Somos?", href: "/about" },
  { id: 2, title: "Noticias", href: "/news" },
  { id: 3, title: "Mapa", href: "/map" },
  { id: 4, title: "Biblioteca", href: "library" },
];
