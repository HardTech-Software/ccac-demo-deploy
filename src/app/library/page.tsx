import React from "react";
import { Card, SearchBar } from "@/components";
import { Box } from "@mui/material";

import { Constants } from "@/utils/constants";

const Library = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "100px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <Box sx={{ maxWidth: "1000px", width: "100%" }}>
        <SearchBar />
        <Box sx={{ marginTop: "100px", marginBottom: "100px" }}>
          {Constants.documents.map((document) => (
            <Card key={document.id} {...document} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Library;
