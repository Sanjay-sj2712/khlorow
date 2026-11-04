"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import { contactDetails } from "@/lib/contact";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/khlorow_interiordesign/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khlorow-interiordesign-8898b9413/",
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#e3133d",
        color: "#ffffff",
        mt: "auto",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: {
            xs: 3,
            sm: 5,
            md: 7,
            lg: 9,
          },
          pt: {
            xs: 6,
            md: 11,
          },
          pb: {
            xs: 4,
            md: 5.5,
          },
        }}
      >
        {/* ================= TOP CONTENT ================= */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.45fr 0.65fr 1fr 1fr",
            },

            columnGap: {
              xs: 0,
              sm: 5,
              md: 7,
              lg: 10,
            },

            rowGap: {
              xs: 5,
              sm: 6,
              md: 0,
            },

            alignItems: "start",
          }}
        >
          {/* ================= BRAND ================= */}

          <Box>
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                mb: 2.2,
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#fff",
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 500,
                  letterSpacing: "0.015em",
                  lineHeight: 1,
                }}
              >
                khlorow
              </Box>
            </Box>

            {/* Description */}
            <Typography
              sx={{
                maxWidth: 390,

                fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                fontSize: {
                  xs: "0.8rem",
                  md: "0.95rem",
                },

                fontWeight: 300,
                lineHeight: 1.75,

                color: "rgba(255,255,255,0.95)",
              }}
            >
              Khlorow is a Coimbatore-based interior design and architecture
              studio creating thoughtful, timeless spaces shaped around the
              people who live and work in them.
            </Typography>
          </Box>

          {/* ================= NAVIGATION ================= */}

          <Box>
            <FooterHeading>Navigation</FooterHeading>

            <Stack spacing={1}>
              {navigationLinks.map((link) => (
                <FooterLink
                  key={link.href}
                  component={Link}
                  href={link.href}
                >
                  {link.label}
                </FooterLink>
              ))}
            </Stack>
          </Box>

          {/* ================= CONTACT ================= */}

          <Box>
            <FooterHeading>Contact</FooterHeading>

            <Stack spacing={1.4}>
              <FooterLink href={`tel:${contactDetails.phoneHref}`}>
                Phone: {contactDetails.phone}
              </FooterLink>

              <FooterLink href={contactDetails.whatsappHref}>
                WhatsApp: {contactDetails.phone}
              </FooterLink>

              <FooterLink href={`mailto:${contactDetails.email}`}>
                Email: {contactDetails.email}
              </FooterLink>

              <Typography
                sx={{
                  fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                  fontSize: {xs: "0.8rem", md: "0.9rem"},
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: "#ffffff",
                }}
              >
                Office: {contactDetails.studioAddress}
              </Typography>
            </Stack>
          </Box>

          {/* ================= SOCIAL ================= */}

          <Box>
            <FooterHeading>Follow</FooterHeading>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                columnGap: 1.7,
                rowGap: 1.2,
                maxWidth: 310,
              }}
            >
              {socialLinks.map((social, index) => (
                <Box
                  key={social.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.7,
                  }}
                >
                  <FooterLink
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </FooterLink>

                  {index !== socialLinks.length - 1 && (
                    <Typography
                      component="span"
                      sx={{
                        fontSize: "0.8rem",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      ·
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ================= COPYRIGHT ================= */}

        <Box
          sx={{
            mt: {
              xs: 7,
              md: 12,
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            © {new Date().getFullYear()} khlorow. ALL RIGHTS RESERVED.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

/* =========================================================
   REUSABLE FOOTER HEADING
========================================================= */

function FooterHeading({ children }) {
  return (
    <Typography
      sx={{
        mb: 1.6,

        fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
        fontSize: "0.72rem",
        fontWeight: 400,

        letterSpacing: "0.22em",
        textTransform: "uppercase",

        color: "#ffffff",
      }}
    >
      {children}
    </Typography>
  );
}

/* =========================================================
   REUSABLE FOOTER LINK
========================================================= */

function FooterLink({ children, ...props }) {
  return (
    <MuiLink
      underline="none"
      {...props}
      sx={{
        display: "inline-block",
        width: "fit-content",

        fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
        fontSize: {
          xs: "0.8rem",
          md: "0.9rem",
        },

        fontWeight: 300,
        lineHeight: 1.5,

        color: "#ffffff",

        transition: "opacity 0.2s ease",

        "&:hover": {
          color: "#ffffff",
          opacity: 0.65,
        },
      }}
    >
      {children}
    </MuiLink>
  );
}
