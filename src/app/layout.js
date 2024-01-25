import "./globals.css";
import Box from "@mui/material/Box";
import ReduxProvider from "@/redux/provider";
import Header from "./_components/header";
import metadata from "./metadata";
import Provider from "./Provider";

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
          <ReduxProvider>
            <Provider>{children}</Provider>
          </ReduxProvider>
        </Box>
      </body>
    </html>
  );
}
