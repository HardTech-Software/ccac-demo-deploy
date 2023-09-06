"use client";
import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { IDocument } from "@/interfaces/document.interface";
import { Constants } from "@/utils/constants";

const CardComponent = ({ ...props }: IDocument) => {
  const { id, title, description } = props;
  const router = useRouter();

  const handleCard = () => {
    router.push(`/details/${id}`);
  };
  return (
    <Card sx={{ marginTop: "30px", backgroundColor: "#FCFCFE" }}>
      <CardActionArea onClick={handleCard}>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              marginTop: "10px",
            }}
          >
            {Constants.truncate(description)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;

const texto =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et elementum enim. Nulla maximus interdum augue. In ut mollis felis. Sed id iaculis urna, at tempus dui. Curabitur a libero facilisis, cursus justo nec, viverra tellus. Sed nec nibh ex. Morbi id tristique elit. Vivamus id ligula massa. Mauris pretium tristique orci sed tempor. Donec sagittis diam et interdum aliquam. Aliquam blandit ornare sem, at ultricies sapien sodales ut";
