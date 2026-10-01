"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
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
                component="img"
                src="/images/logo_light.png"
                alt="Khlorow"
                sx={{
                  width: "auto",
                  height: {
                    xs: 55,
                    md: 40,
                  },

                  /*
                   * Remove this filter if logo.png
                   * is already white.
                   */
                  filter: "brightness(0) invert(1)",

                  objectFit: "contain",
                  objectPosition: "left center",
                }}
              />
            </Box>

            {/* Description */}
            <Typography
              sx={{
                maxWidth: 390,

                fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                fontSize: {
                  xs: "0.9rem",
                  md: "0.95rem",
                },

                fontWeight: 300,
                lineHeight: 1.75,

                color: "rgba(255,255,255,0.95)",
              }}
            >
              [Short description of Khlorow&apos;s interior design studio].
              Crafted with quiet luxury, material honesty, and human-centered
              design.
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
              <FooterLink href="tel:+0000000000">
                Phone: [Phone Number]
              </FooterLink>

              <FooterLink href="https://wa.me/0000000000">
                WhatsApp: [WhatsApp Number]
              </FooterLink>

              <FooterLink href="mailto:hello@khlorow.com">
                Email: [Email Address]
              </FooterLink>

              <Typography
                sx={{
                  fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: "#ffffff",
                }}
              >
                Studio: [Office Address]
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
            © {new Date().getFullYear()} KHLOROW. ALL RIGHTS RESERVED.
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
          xs: "0.88rem",
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