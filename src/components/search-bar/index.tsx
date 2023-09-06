import { Box, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          height: "60px",
          borderRadius: "60px",
          display: "flex",
          justifyContent: "center",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "#247DEA",
          backgroundColor: "#FCFCFE",
        }}
      >
        <input className="search-input" placeholder="Buscar..." />
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: 20,
          top: 5,
        }}
      >
        <IconButton>
          <SearchIcon fontSize="large" color="primary" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBar;
