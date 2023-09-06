import { Footer, Header } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CCAC",
  description: "Cuenca carbonifera Arauco/Concepción",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Header />
          <Box component="main" sx={{ marginTop: "70px", flex: 1 }}>
            {children}
          </Box>
          <Footer />
        </Box>
      </body>
    </html>
  );
};

export default RootLayout;
