"use client";

import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";


/* ==========================================================
   DUMMY IMAGE
   Replace this with your actual downloaded image
========================================================== */

const contactImage = "/images/contact-space.jpg";

const eyebrowStyle = {
  fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
  fontSize: { xs: "9px", md: "14px" },
  letterSpacing: "0.15em",
  color: "#e3133d",
};

const serifHeading = {
  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
  fontWeight: 400,
  color: "#292822",
};




/* ==========================================================
   CONTACT PAGE
========================================================== */

export default function ContactPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#faf8f3",
        color: "#171713",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >

      {/* ====================================================
          01. CONTACT INTRO
      ==================================================== */}

      <Box
        component="section"
        sx={{
          backgroundColor: "#f8f5ef",
          color: "#25251f",

          pt: {
            xs: 5,
            sm: 6,
            md: 7,
          },

          pb: {
            xs: 6,
            md: 7,
          },
        }}
      >
        {/* =====================================================
      MAIN CONTENT WRAPPER
  ===================================================== */}

        <Box
          sx={{
            width: {
              xs: "calc(100% - 48px)",
              sm: "calc(100% - 80px)",
              md: "90%",
            },

            maxWidth: "1320px",

            mx: "auto",
          }}
        >
          {/* =====================================================
        SECTION LABEL
    ===================================================== */}

          <AnimateOnScroll animation="fade-up" delay="0s">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                mb: {
                  xs: 2,
                  md: 2.3,
                },
              }}
            >
              {/* Red line */}
              <Box
                sx={{
                  width: {
                    xs: 17,
                    md: 19,
                  },

                  height: "2px",

                  backgroundColor: "#e3133d",

                  mr: {
                    xs: 1.2,
                    md: 1.4,
                  },

                  flexShrink: 0,
                }}
              />

              <Typography
                sx={{
                  fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",

                  fontSize: {
                    xs: "6px",
                    md: "12px",
                  },

                  fontWeight: 500,

                  letterSpacing: {
                    xs: "1.7px",
                    md: "2px",
                  },

                  lineHeight: 1,

                  color: "#292822",

                  textTransform: "uppercase",
                }}
              >
                CONTACT US
              </Typography>
            </Box>
          </AnimateOnScroll>

          {/* =====================================================
        HEADING
    ===================================================== */}

          <AnimateOnScroll animation="fade-up" delay="0.08s">
            <Typography
              component="h1"
              sx={{
                m: 0,

                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",

                fontWeight: 600,

                fontSize: {
                  xs: "38px",
                  sm: "44px",
                  md: "52px",
                },

                lineHeight: {
                  xs: 1.04,
                  md: 1.02,
                },

                letterSpacing: {
                  xs: "-1.2px",
                  md: "-1.8px",
                },

                color: "#25251f",

                maxWidth: {
                  xs: "100%",
                  md: "700px",
                },

                mb: {
                  xs: 2,
                  md: 2.3,
                },
              }}
            >
              Begin a conversation about
              <br />
              your space.
            </Typography>
          </AnimateOnScroll>

          {/* =====================================================
        DESCRIPTION
    ===================================================== */}

          <AnimateOnScroll animation="fade-up" delay="0.18s">
            <Typography
              sx={{
                fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",

                fontSize: {
                  xs: "9px",
                  sm: "10px",
                  md: "14px",
                },

                fontWeight: 300,

                lineHeight: 1.65,

                color: "#77736b",

                maxWidth: "680px",

                mb: {
                  xs: 4,
                  md: 5,
                },
              }}
            >
              Every commission begins as an intimate dialogue between site, light, and
              living ritual.
              <br />
              Share your vision, project scale, or spatial aspirations.
            </Typography>
          </AnimateOnScroll>

          {/* =====================================================
        CONTACT IMAGE
    ===================================================== */}

          <AnimateOnScroll animation="fade-up" delay="0.1s">
            <Box
              sx={{
                position: "relative",

                width: "100%",

                overflow: "hidden",

                backgroundColor: "#ddd8ce",
              }}
            >
            <Box
              component="img"
              src={contactImage}
              alt="Interior consultation space"
              sx={{
                display: "block",

                width: "100%",

                height: {
                  xs: "320px",
                  sm: "420px",
                  md: "500px",
                  lg: "520px",
                },

                objectFit: "cover",

                /*
                 * The reference image keeps the doors/windows
                 * around the visual center.
                 */
                objectPosition: "center center",
              }}
            />

            {/* Subtle image treatment */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,

                pointerEvents: "none",

                background:
                  "linear-gradient(to bottom, rgba(25,20,12,0.01), rgba(25,20,12,0.06))",
              }}
            />

            {/* =================================================
          IMAGE CAPTION
      ================================================= */}

            <Box
              sx={{
                position: "absolute",

                left: {
                  xs: 12,
                  sm: 18,
                  md: 28,
                },

                bottom: {
                  xs: 12,
                  sm: 18,
                  md: 28,
                },

                display: "inline-flex",

                alignItems: "center",

                backgroundColor: "rgba(250,248,243,0.96)",

                px: {
                  xs: 1.5,
                  sm: 1.8,
                  md: 2,
                },

                py: {
                  xs: 1,
                  md: 1.15,
                },
              }}
            >
              {/* Red dot */}
              <Box
                sx={{
                  width: {
                    xs: 4,
                    md: 5,
                  },

                  height: {
                    xs: 4,
                    md: 5,
                  },

                  borderRadius: "50%",

                  backgroundColor: "#e3133d",

                  mr: {
                    xs: 0.9,
                    md: 1,
                  },

                  flexShrink: 0,
                }}
              />

              <Typography
                sx={{
                  fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",

                  fontSize: {
                    xs: "5px",
                    sm: "5.5px",
                    md: "8px",
                  },

                  fontWeight: 500,

                  letterSpacing: {
                    xs: "0.9px",
                    md: "1.2px",
                  },

                  lineHeight: 1,

                  color: "#282720",

                  textTransform: "uppercase",

                  whiteSpace: {
                    xs: "normal",
                    sm: "nowrap",
                  },
                }}
              >
                ATELIER SALON &amp; PRIVATE CONSULTATIONS — FIG. 05 / ENGAGEMENT
              </Typography>
            </Box>
            </Box>
          </AnimateOnScroll>
        </Box>
      </Box>


      {/* ====================================================
          02. CONTACT FORM
      ==================================================== */}

      <Box
        component="section"
        id="contact"
        sx={{
          backgroundColor: "#f8f5ef",

          pt: {
            xs: 8,
            md: 12,
          },

          pb: {
            xs: 8,
            md: 12,
          },

          textAlign: "center",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            px: {
              xs: 3,
              sm: 5,
              md: 6,
            },

            maxWidth: "1100px",
            mx: "auto",
          }}
        >
          {/* ================= SECTION HEADER ================= */}

          <AnimateOnScroll animation="fade-up" delay="0s">
            <Typography
              sx={{
                ...eyebrowStyle,

                mb: {
                  xs: 1.5,
                  md: 1.7,
                },

                color: "#e3133d",
              }}
            >
              GET IN TOUCH
            </Typography>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay="0.1s">
            <Typography
              component="h2"
              sx={{
                ...serifHeading,

                fontSize: {
                  xs: "34px",
                  sm: "42px",
                  md: "42px",
                },

                fontWeight: 400,

                lineHeight: 1.05,

                letterSpacing: "-0.025em",

                textTransform: "uppercase",

                color: "#252520",

                mb: {
                  xs: 1.5,
                  md: 1.7,
                },
              }}
            >
              LET&apos;S CREATE YOUR SPACE
            </Typography>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay="0.18s">
            <Typography
              sx={{
                fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",

                fontSize: {
                  xs: "13px",
                  md: "16px",
                },

                fontWeight: 300,

                lineHeight: 1.6,

                color: "#66635e",

                mb: {
                  xs: 4,
                  md: 5.5,
                },
              }}
            >
              Tell us a little about your project and how we can help.
            </Typography>
          </AnimateOnScroll>

          {/* =====================================================
             FORM BOX
         ===================================================== */}

          <AnimateOnScroll animation="fade-up" delay="0.26s">
            <Box
              component="form"
              sx={{
                width: "100%",
                maxWidth: "900px",
                mx: "auto",
                border: "1px solid #dedbd5",
                backgroundColor: "#f5f2ed",
                boxShadow: "0 1px 3px rgba(0,0,0,0.025)",
                px: { xs: 2.5, sm: 4, md: 5 },
                py: { xs: 3, sm: 4, md: 5.5 },
                textAlign: "left",
              }}
            >
              {/* ================= FIRST TWO ROWS ================= */}

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  columnGap: { sm: 2.5, md: 3 },
                  rowGap: { xs: 2.5, md: 3 },
                }}
              >
                {/* NAME */}
                <Box>
                  <FormLabel>YOUR NAME</FormLabel>
                  <StyledTextField fullWidth name="name" placeholder="Full Name" />
                </Box>

                {/* PHONE */}
                <Box>
                  <FormLabel>PHONE NUMBER</FormLabel>
                  <StyledTextField fullWidth name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </Box>

                {/* EMAIL */}
                <Box>
                  <FormLabel>EMAIL ADDRESS</FormLabel>
                  <StyledTextField fullWidth name="email" type="email" placeholder="hello@example.com" />
                </Box>

                {/* PROJECT TYPE */}
                <Box>
                  <FormLabel>PROJECT TYPE</FormLabel>
                  <StyledTextField fullWidth select name="projectType" defaultValue="Residential Interior">
                    <MenuItem value="Residential Interior">Residential Interior</MenuItem>
                    <MenuItem value="Commercial Interior">Commercial Interior</MenuItem>
                    <MenuItem value="Architecture">Architecture</MenuItem>
                    <MenuItem value="Turnkey Works">Turnkey Works</MenuItem>
                    <MenuItem value="Project Management">Project Management</MenuItem>
                  </StyledTextField>
                </Box>
              </Box>

              {/* ================= MESSAGE ================= */}

              <Box sx={{ mt: { xs: 2.5, md: 3 } }}>
                <FormLabel>MESSAGE</FormLabel>
                <StyledTextField
                  fullWidth
                  multiline
                  rows={4}
                  name="message"
                  placeholder="Share the scope, location, and aspirations for your space..."
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      alignItems: "flex-start",
                    },
                  }}
                />
              </Box>

              {/* ================= SUBMIT ================= */}

              <Box sx={{ mt: { xs: 3, md: 3.5 } }}>
                <Button
                  type="submit"
                  disableElevation
                  disableRipple
                  sx={{
                    height: 40,
                    backgroundColor: "#e3133d",
                    color: "#ffffff",
                    borderRadius: 0,
                    fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    "&:hover": {
                      backgroundColor: "#c91035",
                    },
                  }}
                >
                  START A PROJECT
                </Button>
              </Box>
            </Box>
          </AnimateOnScroll>

          {/* =====================================================
             CONTACT SHORTCUTS
         ===================================================== */}

          <AnimateOnScroll animation="fade-up" delay="0.36s">
            <Box
              sx={{
                display: "flex",

                flexDirection: {
                  xs: "column",
                  md: "row",
                },

                alignItems: "center",

                justifyContent: "center",

                mt: {
                  xs: 4,
                  md: 5,
                },

                gap: {
                  xs: 1.5,
                  md: 2.8,
                },
              }}
            >
              <ContactLink href="tel:">
                CALL US: [PHONE NUMBER]
              </ContactLink>

              <ContactSeparator />

              <ContactLink href="#">
                WHATSAPP US: [WHATSAPP NUMBER]
              </ContactLink>

              <ContactSeparator />

              <ContactLink href="mailto:">
                EMAIL US: [EMAIL ADDRESS]
              </ContactLink>
            </Box>
          </AnimateOnScroll>
        </Container>
      </Box>
    </Box>
  );
}


/* ==========================================================
   FORM LABEL
========================================================== */

function FormLabel({ children }) {
  return (
    <Typography
      component="label"
      sx={{
        display: "block",
        color: "#393630",
        fontSize: "6px",
        letterSpacing: "1.4px",
        mb: 0.8,
      }}
    >
      {children}
    </Typography>
  );
}


/* ==========================================================
   CONTACT DETAIL
========================================================== */

function ContactDetail({ children }) {
  return (
    <Typography
      sx={{
        color: "#555149",
        fontSize: "6.5px",
        letterSpacing: "1px",
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
}


/* ==========================================================
   TEXT FIELD STYLE
========================================================== */

const fieldStyle = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#faf8f3",
    borderRadius: 0,

    "& fieldset": {
      borderColor: "#ddd8d0",
    },

    "&:hover fieldset": {
      borderColor: "#bcb5aa",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#e4002b",
    },
  },

  "& input": {
    fontSize: "8px",
    color: "#4a4741",
    py: 1.15,
  },

  "& textarea": {
    fontSize: "8px",
    color: "#4a4741",
    lineHeight: 1.5,
  },

  "& input::placeholder": {
    color: "#aaa59c",
    opacity: 1,
  },

  "& textarea::placeholder": {
    color: "#aaa59c",
    opacity: 1,
  },
};

function StyledTextField(props) {
  return (
    <TextField
      {...props}
      size="small"
      sx={{
        ...props.sx,

        "& .MuiOutlinedInput-root": {
          minHeight: props.multiline ? "auto" : 44,

          borderRadius: 0,

          backgroundColor: "#faf8f4",

          fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",

          fontSize: "12px",

          fontWeight: 300,

          color: "#33312d",

          "& fieldset": {
            border: "1px solid #dcd8d1",
          },

          "&:hover fieldset": {
            borderColor: "#c9c4bc",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#99938b",
            borderWidth: "1px",
          },
        },

        "& .MuiInputBase-input": {
          px: 1.6,
          py: 1.25,
        },

        "& .MuiInputBase-input::placeholder": {
          color: "#b7b4ae",
          opacity: 1,
        },

        "& textarea::placeholder": {
          color: "#b7b4ae",
          opacity: 1,
        },

        "& .MuiSelect-select": {
          fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
          fontSize: "12px",
          fontWeight: 300,

          display: "flex",
          alignItems: "center",
        },

        "& .MuiSvgIcon-root": {
          fontSize: 17,
          color: "#66635e",
        },
      }}
    />
  );
}

/* ============================================================
   CONTACT LINK
============================================================ */

function ContactLink({ children, href }) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        color: "#4f4c47",

        textDecoration: "none",

        fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",

        fontSize: {
          xs: "8px",
          md: "12px",
        },

        fontWeight: 400,

        letterSpacing: "0.1em",

        textTransform: "uppercase",

        whiteSpace: "nowrap",

        transition: "color 0.2s ease",

        "&:hover": {
          color: "#e3133d",
        },
      }}
    >
      {children}
    </Box>
  );
}

function ContactSeparator() {
  return (
    <Typography
      component="span"
      sx={{
        display: {
          xs: "none",
          md: "block",
        },

        fontSize: "8px",

        color: "#9e9991",
      }}
    >
      ·
    </Typography>
  );
}