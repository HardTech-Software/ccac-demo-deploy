"use client";
import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ItemList = ({ title }: { title: string }) => {
  return (
    <Typography sx={{ fontSize: "14px", marginTop: "5px", color: "#5A6983" }}>
      {title}
    </Typography>
  );
};

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "#F0F2F5",
        display: "flex",
        height: "270px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          marginTop: "40px",
          marginBottom: "40px",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            // backgroundColor: "green",
            flex: 1.3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "15px",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ marginBottom: "10px", color: "#5A6983" }}
          >
            CCAC
          </Typography>
          <Box
            sx={{
              //   backgroundColor: "red",
              display: "flex",
              width: "140px",
              justifyContent: "space-between",
            }}
          >
            <FacebookIcon sx={{ color: "#5A6983" }} fontSize="small" />
            <TwitterIcon sx={{ color: "#5A6983" }} fontSize="small" />
            <GitHubIcon sx={{ color: "#5A6983" }} fontSize="small" />
            <YouTubeIcon sx={{ color: "#5A6983" }} fontSize="small" />
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{ fontWeight: "bold", paddingBottom: "5px", color: "#5A6983" }}
          >
            Navegación
          </Typography>
          <ItemList title="¿Quienes Somos?" />
          <ItemList title="Noticias" />
          <ItemList title="Mapa" />
          <ItemList title="Biblioteca" />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{ fontWeight: "bold", paddingBottom: "5px", color: "#5A6983" }}
          >
            Ayuda y Soporte
          </Typography>
          <ItemList title="Contactanos" />
          <ItemList title="Preguntas Frecuentes" />
          <ItemList title="Centro de ayuda" />
          <ItemList title="Patrocinios" />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{ fontWeight: "bold", paddingBottom: "5px", color: "#5A6983" }}
          >
            Legal
          </Typography>
          <ItemList title="Términos y Condiciones" />
          <ItemList title="Politica de Privacidad" />
          <ItemList title="Licencias" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40px",
        }}
      >
        <Typography fontSize="13px" sx={{ color: "#5A6983" }}>
          Todos los derechos reservados. Copyright © 2023 CCAC demo by
          TerraCode.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
