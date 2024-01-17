"use client";
import "./globals.css";
import Box from "@mui/material/Box";
import ReduxProvider from "@/redux/provider";
import Header from "./_components/header";

export const metadata = {
  openGraph: {
    title: "Next.js",
    description: "포장을위한 포장에 의한",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Box sx={{ maxWidth: "1024px", margin: "auto" }}>
          <Header />
          <ReduxProvider>{children}</ReduxProvider>
        </Box>
      </body>
    </html>
  );
}
