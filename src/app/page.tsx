/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/library");
  }, []);
  return (
    <Box>
      <div></div>
    </Box>
  );
}
