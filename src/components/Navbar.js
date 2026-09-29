"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#FDF9F3",
          color: "#252525",
          borderTop: "3px solid #252525",
          borderBottom: "none",
          boxShadow: "none",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            px: {
              xs: 2.5,
              sm: 4,
              md: 6,
              lg: 7,
            },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: {
                xs: "70px !important",
                md: "60px !important",
              },
              height: {
                xs: 70,
                md: 60,
              },

              // Desktop: 3-column layout
              gridTemplateColumns: {
                xs: "1fr auto",
                md: "1fr auto 1fr",
              },

              display: "grid",
              alignItems: "center",
            }}
          >
            {/* ================= LEFT: LOGO ================= */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                justifySelf: "start",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src="/images/logo.png"
                alt="Khlorow"
                sx={{
                  display: "block",
                  width: "auto",
                  height: {
                    xs: 34,
                    md: 30,
                  },
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* ================= CENTER: NAV LINKS ================= */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifySelf: "center",
                alignItems: "center",
                gap: {
                  md: 1.5,
                  lg: 2.5,
                },
              }}
            >
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Button
                    key={link.href}
                    component={Link}
                    href={link.href}
                    disableRipple
                    sx={{ 
                      position: "relative",

                      minWidth: "auto",

                      px: 1.2,
                      py: 2,

                      color: active ? "#e3133d" : "#494949",

                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "0.70rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",

                      borderRadius: 0,

                      "&::after": {
                        content: '""',
                        position: "absolute",

                        left: "10px",
                        right: active ? "10px" : "100%",

                        bottom: "8px",

                        height: "1px",
                        backgroundColor: "#e3133d",

                        transition: "right 0.25s ease",
                      },

                      "&:hover": {
                        color: "#e3133d",
                        backgroundColor: "transparent",

                        "&::after": {
                          right: "10px",
                        },
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>

            {/* ================= RIGHT: START PROJECT ================= */}
            <Button
              component={Link}
              href="/contact"
              disableElevation
              disableRipple
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                justifySelf: "end",

                height: 38,
                minWidth: 145,

                px: 2.5,

                backgroundColor: "#e3133d",
                color: "#ffffff",

                borderRadius: 0,

                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "0.56rem",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",

                "&:hover": {
                  backgroundColor: "#c90f33",
                },
              }}
            >
              Start A Project
            </Button>

            {/* ================= MOBILE MENU ================= */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              disableRipple
              aria-label="Open navigation menu"
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                justifySelf: "end",
                color: "#252525",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: "85%",
            maxWidth: 320,
            backgroundColor: "#f7f4ee",
            color: "#252525",
            boxShadow: "-10px 0 30px rgba(0,0,0,0.08)",
          },
        }}
      >
        <Box
          sx={{
            p: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 5,
            }}
          >
            <Box
              component={Link}
              href="/"
              onClick={() => setDrawerOpen(false)}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#252525",
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 24,
                  height: 23,
                  mr: 1.3,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: 1,
                    top: 2,
                    width: 13,
                    height: 16,
                    border: "1.3px solid #252525",
                    borderBottom: "none",
                    borderRadius: "10px 10px 0 0",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    bottom: 4,
                    width: 22,
                    height: "1.3px",
                    backgroundColor: "#252525",
                  }}
                />
              </Box>

              <Box
                sx={{
                  fontFamily: '"Times New Roman", Georgia, serif',
                  fontSize: "1.45rem",
                }}
              >
                Khlorow
              </Box>
            </Box>

            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{
                color: "#252525",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Mobile Navigation */}
          <List disablePadding>
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <ListItem
                  key={link.href}
                  disablePadding
                  sx={{
                    borderBottom: "1px solid rgba(37,37,37,0.12)",
                  }}
                >
                  <ListItemButton
                    component={Link}
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      px: 0,
                      py: 2,
                      color: active ? "#e3133d" : "#252525",

                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#e3133d",
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "0.72rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          {/* Mobile CTA */}
          <Button
            component={Link}
            href="/contact"
            onClick={() => setDrawerOpen(false)}
            fullWidth
            sx={{
              mt: 4,
              py: 1.6,

              backgroundColor: "#e3133d",
              color: "#fff",

              borderRadius: 0,

              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",

              "&:hover": {
                backgroundColor: "#c90f33",
              },
            }}
          >
            Start A Project
          </Button>
        </Box>
      </Drawer>

      {/* Fixed Navbar Offset */}
      <Toolbar
        sx={{
          minHeight: {
            xs: "73px !important",
            md: "60px !important",
          },
        }}
      />
    </>
  );
}