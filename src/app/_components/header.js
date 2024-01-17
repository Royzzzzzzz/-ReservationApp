"use client";
import Link from "next/link";
import "../globals.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

export default async function RootLayout({ children }) {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "white",
          maxWidth: "1024px",
          margin: "auto",
          boxShadow: "none",
        }}
        position="static"
        className="header"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            <Link href="/list">db테스트</Link>
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            <Link href="/">포장의 민족</Link>
          </Typography>
          <div>
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </div>
          <Button color="inherit">
            <Link href="/login">
              <Typography sx={{ color: "black" }}>로그인</Typography>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
