"use client";

import React from "react";
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
        sx={{
          px: {
            xs: 2.5,
            sm: 4,
            md: 4.5,
          },
          pt: {
            xs: 6,
            md: 7,
          },
          pb: {
            xs: 6,
            md: 8,
          },
        }}
      >

        {/* SECTION LABEL */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >

          <Box
            sx={{
              width: 18,
              height: "1px",
              backgroundColor: "#e4002b",
              mr: 1.2,
            }}
          />

          <Typography
            sx={{
              fontSize: "7px",
              letterSpacing: "2px",
              color: "#27251f",
            }}
          >
            CONTACT US
          </Typography>

        </Box>


        {/* MAIN HEADING */}

        <Typography
          component="h1"
          sx={{
            fontFamily:
              "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
            fontSize: {
              xs: "38px",
              sm: "48px",
              md: "56px",
            },
            lineHeight: {
              xs: 1,
              md: 0.98,
            },
            letterSpacing: "-1.3px",
            maxWidth: "650px",
            mb: 2.5,
          }}
        >
          Begin a conversation about
          <br />
          your space.
        </Typography>


        {/* DESCRIPTION */}

        <Typography
          sx={{
            color: "#77736b",
            fontSize: {
              xs: "9px",
              md: "10px",
            },
            lineHeight: 1.6,
            maxWidth: "650px",
            mb: 4,
          }}
        >
          Every commission begins as an intimate dialogue between site,
          light, and living ritual.
          <br />
          Share your vision, project scale, or spatial aspirations.
        </Typography>


        {/* =================================================
            CONTACT IMAGE
        ================================================= */}

        <Box
          sx={{
            width: "100%",
            position: "relative",
            overflow: "hidden",
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
                xs: "330px",
                sm: "430px",
                md: "500px",
              },
              objectFit: "cover",
              objectPosition: "center",
            }}
          />


          {/* IMAGE CAPTION */}

          <Box
            sx={{
              position: "absolute",
              left: {
                xs: 12,
                md: 18,
              },
              bottom: {
                xs: 12,
                md: 18,
              },
              backgroundColor:
                "rgba(250,248,243,.94)",
              px: {
                xs: 1.5,
                md: 2,
              },
              py: {
                xs: 1,
                md: 1.2,
              },
              display: "flex",
              alignItems: "center",
            }}
          >

            <Box
              sx={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                backgroundColor: "#e4002b",
                mr: 1,
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: "5.5px",
                  md: "6px",
                },
                letterSpacing: "1.2px",
                whiteSpace: "nowrap",
              }}
            >
              ATELIER SALON & PRIVATE CONSULTATIONS — FIG. 05 / ENGAGEMENT
            </Typography>

          </Box>

        </Box>

      </Box>


      {/* ====================================================
          02. CONTACT FORM
      ==================================================== */}

      <Box
        sx={{
          backgroundColor: "#faf8f3",
          px: {
            xs: 2.5,
            sm: 4,
            md: 4.5,
          },
          pb: {
            xs: 8,
            md: 11,
          },
        }}
      >

        {/* FORM HEADER */}

        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >

          <Typography
            sx={{
              color: "#e4002b",
              fontSize: "7px",
              letterSpacing: "2px",
              mb: 1.3,
            }}
          >
            GET IN TOUCH
          </Typography>


          <Typography
            sx={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize: {
                xs: "29px",
                sm: "35px",
                md: "39px",
              },
              lineHeight: 1,
              letterSpacing: "-.5px",
              mb: 1.3,
            }}
          >
            LET&apos;S CREATE YOUR SPACE
          </Typography>


          <Typography
            sx={{
              color: "#77736b",
              fontSize: "9px",
            }}
          >
            Tell us a little about your project and how we can help.
          </Typography>

        </Box>


        {/* =================================================
            FORM CONTAINER
        ================================================= */}

        <Box
          component="form"
          onSubmit={(event) => {
            event.preventDefault();

            // Add your API / email submission logic here
            console.log("Contact form submitted");
          }}
          sx={{
            width: {
              xs: "100%",
              sm: "90%",
              md: "80%",
            },
            maxWidth: "780px",
            mx: "auto",
            backgroundColor: "#f3f0ea",
            border: "1px solid #e5e0d8",
            p: {
              xs: 2.5,
              sm: 3,
              md: 3.5,
            },
          }}
        >

          <Grid
            container
            spacing={{
              xs: 2,
              md: 2.2,
            }}
          >

            {/* ============================================
                NAME
            ============================================= */}

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >

              <FormLabel>
                YOUR NAME
              </FormLabel>

              <TextField
                fullWidth
                name="name"
                placeholder="Full Name"
                variant="outlined"
                size="small"
                required
                sx={fieldStyle}
              />

            </Grid>


            {/* ============================================
                PHONE
            ============================================= */}

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >

              <FormLabel>
                PHONE NUMBER
              </FormLabel>

              <TextField
                fullWidth
                name="phone"
                placeholder="+1 (555) 000–0000"
                variant="outlined"
                size="small"
                sx={fieldStyle}
              />

            </Grid>


            {/* ============================================
                EMAIL
            ============================================= */}

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >

              <FormLabel>
                EMAIL ADDRESS
              </FormLabel>

              <TextField
                fullWidth
                type="email"
                name="email"
                placeholder="hello@example.com"
                variant="outlined"
                size="small"
                required
                sx={fieldStyle}
              />

            </Grid>


            {/* ============================================
                PROJECT TYPE
            ============================================= */}

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >

              <FormLabel>
                PROJECT TYPE
              </FormLabel>

              <Select
                fullWidth
                name="projectType"
                defaultValue="Residential Interior"
                size="small"
                sx={{
                  ...fieldStyle,

                  "& .MuiSelect-select": {
                    fontSize: "8px",
                    color: "#4a4741",
                    py: 1,
                  },
                }}
              >

                <MenuItem value="Residential Interior">
                  Residential Interior
                </MenuItem>

                <MenuItem value="Architecture">
                  Architecture
                </MenuItem>

                <MenuItem value="Commercial Interior">
                  Commercial Interior
                </MenuItem>

                <MenuItem value="Hospitality">
                  Hospitality
                </MenuItem>

                <MenuItem value="Restoration">
                  Restoration
                </MenuItem>

                <MenuItem value="Custom Furniture">
                  Custom Furniture
                </MenuItem>

                <MenuItem value="Turnkey Execution">
                  Turnkey Execution
                </MenuItem>

              </Select>

            </Grid>


            {/* ============================================
                MESSAGE
            ============================================= */}

            <Grid
              size={{
                xs: 12,
              }}
            >

              <FormLabel>
                MESSAGE
              </FormLabel>

              <TextField
                fullWidth
                multiline
                rows={4}
                name="message"
                placeholder="Share the scope, location, and aspirations for your space..."
                variant="outlined"
                required
                sx={fieldStyle}
              />

            </Grid>


            {/* ============================================
                SUBMIT
            ============================================= */}

            <Grid
              size={{
                xs: 12,
              }}
            >

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#e4002b",
                  color: "#fff",
                  borderRadius: 0,
                  fontSize: "7px",
                  letterSpacing: "1.8px",
                  px: 3,
                  py: 1.5,
                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: "#c90026",
                    boxShadow: "none",
                  },
                }}
              >
                START A PROJECT
              </Button>

            </Grid>

          </Grid>

        </Box>


        {/* =================================================
            CONTACT DETAILS
        ================================================= */}

        <Box
          sx={{
            mt: 3.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            columnGap: {
              xs: 3,
              sm: 4,
              md: 5,
            },
            rowGap: 1.5,
          }}
        >

          <ContactDetail>
            CALL US: [PHONE NUMBER]
          </ContactDetail>

          <ContactDetail>
            WHATSAPP US: [WHATSAPP NUMBER]
          </ContactDetail>

          <ContactDetail>
            EMAIL US: [EMAIL ADDRESS]
          </ContactDetail>

        </Box>

      </Box>


      {/* ====================================================
          FOOTER
      ==================================================== */}

      <Box
        sx={{
          backgroundColor: "#171713",
          color: "rgba(255,255,255,.55)",
          px: {
            xs: 3,
            md: 5,
          },
          py: 3.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: 2,
        }}
      >

        <Typography
          sx={{
            color: "#fff",
            fontFamily:
              "Georgia, 'Times New Roman', serif",
            fontSize: "20px",
            letterSpacing: "2px",
          }}
        >
          KHLOROW
        </Typography>

        <Typography
          sx={{
            fontSize: "8px",
            letterSpacing: "1px",
          }}
        >
          © {new Date().getFullYear()} Khlorow. All rights reserved.
        </Typography>

        <Typography
          sx={{
            fontSize: "8px",
            letterSpacing: "1px",
          }}
        >
          INTERIOR DESIGN / ARCHITECTURE
        </Typography>

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