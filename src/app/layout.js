import "./globals.css";
import Box from "@mui/material/Box";
import ReduxProvider from "@/redux/provider";
import Header from "./_components/header";
import metadata from "./metadata";

export default async function RootLayout({ children }) {
  return (
    <html>
      <head>
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
