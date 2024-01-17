"use client";
import "./globals.css";
import Box from "@mui/material/Box";
import ReduxProvider from "@/redux/provider";
import Header from "./_components/header";
import { metadata } from "./page";

export default async function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* metadata를 여기서 사용할 수 있습니다. */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Box sx={{ maxWidth: "1024px", margin: "auto" }}>
          <Header />
          <ReduxProvider>{children}</ReduxProvider>
        </Box>
      </body>
    </html>
  );
}
