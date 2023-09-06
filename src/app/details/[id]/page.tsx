import { Constants } from "@/utils/constants";
import { Box, Link, Typography, CardMedia } from "@mui/material";
import React from "react";

interface IListItem {
  title: string;
  value: string;
}

const ListItem = ({ title, value }: IListItem) => {
  return (
    <Box sx={{ display: "flex", marginTop: "10px" }}>
      <Typography fontWeight="bold">{title}:</Typography>
      <Typography sx={{ marginLeft: "3px" }}>{value}</Typography>
    </Box>
  );
};

const DetailsDocument = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const document = Constants.documents.filter((doc) => doc.id === id)[0];
  const { title, description, author, year, category, links } = document;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingLeft: "20px",
        paddingRight: "20px",
        marginBottom: "100px",
      }}
    >
      <Box sx={{ maxWidth: "1000px", width: "100%" }}>
        <Box
          sx={{
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">{title}</Typography>
        </Box>
        <Box sx={{ display: "flex", marginTop: "50px" }}>
          <Box
            sx={{
              flex: 1,
              paddingTop: "20px",
            }}
          >
            <ListItem title="Autor" value={author} />
            <ListItem title="Año" value={year} />
            <ListItem title="Categoria" value={category} />
            <Typography
              sx={{
                marginTop: "20px",
                marginBottom: "20px",
                paddingRight: "40px",
              }}
            >
              {description}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {links.map((link, index) => (
                <Link key={index} sx={{ marginTop: "10px" }}>
                  {link}
                </Link>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Box sx={{ height: "600px", width: "100%" }}>
              <embed
                src="https://www.africau.edu/images/default/sample.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsDocument;
