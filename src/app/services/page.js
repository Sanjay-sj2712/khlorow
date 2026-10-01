"use client";

import React, { useState, useEffect } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";


/* ==========================================================
   DUMMY IMAGES
   Replace these with your actual images
========================================================== */

const images = {
  hero: "/images/services-hero.jpg",

  service01: "/images/service-01.jpg",
  service02: "/images/service-02.jpg",
  service03: "/images/service-03.jpg",
  service04: "/images/service-04.jpg",
  service05: "/images/service-05.jpg",
};


/* ==========================================================
   SERVICE DATA
========================================================== */

const services = [
  {
    number: "01",
    category: "FOUNDATION",
    title: "Architectural &\nInterior Design",

    description:
      "Holistic structural concepts, spatial choreography, volumes, facade coordination, and refined architectural execution. We shape the bones of the space, optimizing natural light paths and sightlines before surface application.",

    image: images.service01,

    caption: "RESIDENTIAL VILLA / ENGADINE",
    code: "PL. 01 — ARCHITECTURAL CORE",

    layout: "text-image",

    scope: [
      "Concept development",
      "Spatial planning & volumes",
      "Material selection & curation",
      "Architectural lighting design",
      "Comprehensive millwork integration",
    ],
  },

  {
    number: "02",
    category: "RHYTHM",
    title: "Space Planning &\nLayout Choreography",

    description:
      "Thoughtful planning creates spaces that feel effortless to live in. We analyze human passage ways, sightlines towards external landscapes, and acoustic privacy to establish seamless programmatic flow.",

    image: images.service02,

    caption: "CIRCULATION MATRIX & SIGHTLINE STUDY",
    code: "PL. 02 — PROGRAMMATIC FLOW",

    layout: "image-text",

    scope: [
      "Flow & circulation analysis",
      "Intuitive programmatic zoning",
      "Furniture positioning",
      "Functional area optimization",
    ],
  },

  {
    number: "03",
    category: "ATELIER",
    title: "Bespoke Millwork\n& Custom Furniture",

    description:
      "Furniture designed specifically for the space, rather than selected simply to fill it. We engineer monolithic hearth surrounds, cantilevered tables, fluted stone partitions, and integrated cabinetry tailored down to the millimeter.",

    image: images.service03,

    caption: "TRAVERTINE & SMOKED OAK MILLWORK",
    code: "PL. 03 — ATELIER FABRICATION",

    layout: "text-image",

    scope: [
      "Architectural joinery & cabinetry",
      "Quarry-direct rare stone sourcing",
      "Artisan timber fabrication",
      "Custom patinated brass hardware",
    ],
  },

  {
    number: "04",
    category: "HERITAGE",
    title: "Restoration &\nArchitectural Renovation",

    description:
      "We carefully transform existing spaces while respecting what already makes them special. Historical structure provides the most profound dialogue with modern minimalism, stripping away decay while honoring authentic masonry.",

    image: images.service04,

    caption: "HERITAGE COURTYARD RESTORATION",
    code: "PL. 04 — ADAPTIVE DIALOGUE",

    layout: "image-text",

    scope: [
      "Historical preservation compliance",
      "Surgical structural interventions",
      "Traditional lime masonry repair",
      "Thermal envelope & glazing upgrade",
    ],
  },

  {
    number: "05",
    category: "REALIZATION",
    title: "Turnkey\nExecution & Site\nManagement",

    description:
      "From design drawings to the finished space, we coordinate every detail to bring the vision together with unwavering fidelity. Rigorous procurement oversight, artisan management, and turnkey installation.",

    image: images.service05,

    caption: "FINAL APPOINTMENT & RESIDENTIAL TURNOVER",
    code: "PL. 05 — PRECISION DELIVERY",

    layout: "text-image",

    scope: [
      "General contractor stewardship",
      "Global procurement & logistics",
      "Daily on-site architectural supervision",
      "White-glove styling & handover",
    ],
  },
];


/* ==========================================================
   MAIN PAGE
========================================================== */

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f8f5ef",
        color: "#171713",
        minHeight: "100vh",
      }}
    >

      {/* ====================================================
          01. HERO
      ==================================================== */}

      <Box
        component="section"
        sx={{
          position: "relative",
          width: "100%",

          height: {
            xs: "560px",
            sm: "590px",
            md: "670px",
          },

          overflow: "hidden",
          backgroundColor: "#202019",
        }}
      >
        {/* ================= BACKGROUND IMAGE ================= */}

        <Box
          component="img"
          src={images.hero}
          alt="Interior architecture"
          sx={{
            position: "absolute",
            inset: 0,

            width: "100%",
            height: "100%",

            objectFit: "cover",

            objectPosition: {
              xs: "58% center",
              sm: "center center",
              md: "center center",
            },

            transform: `scale(${1 + Math.min(scrollY * 0.0001, 0.02)})`,
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
          }}
        />

        {/* ================= IMAGE OVERLAY ================= */}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,

            background: `
        linear-gradient(
          90deg,
          rgba(15, 16, 11, 0.54) 0%,
          rgba(15, 16, 11, 0.30) 45%,
          rgba(15, 16, 11, 0.10) 100%
        ),
        linear-gradient(
          180deg,
          rgba(10, 11, 8, 0.03) 0%,
          rgba(10, 11, 8, 0.06) 55%,
          rgba(10, 11, 8, 0.38) 100%
        )
      `,
          }}
        />

        {/* ================= HERO CONTENT ================= */}

        <Box
          sx={{
            position: "absolute",
            zIndex: 2,

            left: {
              xs: 24,
              sm: 40,
              md: "5%",
            },

            top: {
              xs: "54%",
              md: "55%",
            },

            transform: "translateY(-50%)",

            width: {
              xs: "calc(100% - 48px)",
              sm: "80%",
              md: "760px",
            },
          }}
        >
          {/* ================= HEADING ================= */}

          <AnimateOnScroll animation="fade-up" delay="0.08s">
            <Typography
              component="h1"
              sx={{
                m: 0,

                color: "#ffffff",

                fontFamily:
                  "var(--font-cormorant), 'Cormorant Garamond', Georgia, 'Times New Roman', serif",

                fontWeight: 400,

                fontSize: {
                  xs: "43px",
                  sm: "52px",
                  md: "68px",
                },

                lineHeight: {
                  xs: 1.02,
                  md: 0.98,
                },

                letterSpacing: {
                  xs: "-1.3px",
                  md: "-2px",
                },

                maxWidth: "760px",
              }}
            >
              From first idea to enduring
              <br />
              detail.
            </Typography>
          </AnimateOnScroll>

          {/* ================= DESCRIPTION ================= */}

          <AnimateOnScroll animation="fade-up" delay="0.2s">
            <Typography
              sx={{
                mt: {
                  xs: 2.2,
                  md: 2.5,
                },

                color: "rgba(255,255,255,0.70)",

                fontFamily: "Arial, Helvetica, sans-serif",

                fontSize: {
                  xs: "9px",
                  sm: "10px",
                  md: "16px",
                },

                fontWeight: 300,

                lineHeight: 1.65,

                maxWidth: "560px",
              }}
            >
              We bring together architectural vision, material craftsmanship, and
              turnkey realization to create resonant interior environments tailored
              for living.
            </Typography>
          </AnimateOnScroll>
        </Box>
      </Box>

      {/* ====================================================
          02. INTRO / CTA
      ==================================================== */}

      {/* =====================================================
    METHODOLOGICAL INQUIRY
===================================================== */}

      <Box
        component="section"
        sx={{
          backgroundColor: "#f8f5ef",

          py: {
            xs: 7,
            md: 9,
            lg: 10,
          },

          px: {
            xs: 3,
            sm: 5,
            md: "5%",
          },
        }}
      >
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "28% 1fr",
            },

            columnGap: {
              md: 7,
              lg: 9,
            },

            rowGap: {
              xs: 5,
              md: 0,
            },

            alignItems: "start",
          }}
        >
          {/* =================================================
        LEFT COLUMN
    ================================================= */}

          <Box>
            {/* LABEL */}

            <AnimateOnScroll animation="fade-up" delay="0s">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* RED SQUARE */}

                <Box
                  sx={{
                    width: 8,
                    height: 8,

                    backgroundColor: "#e3133d",

                    mr: 1.1,

                    flexShrink: 0,
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Arial, Helvetica, sans-serif",

                    fontSize: {
                      xs: "6px",
                      md: "12px",
                    },

                    fontWeight: 500,

                    letterSpacing: "1.6px",

                    lineHeight: 1,

                    color: "#776c5e",

                    textTransform: "uppercase",
                  }}
                >
                  METHODOLOGICAL INQUIRY
                </Typography>
              </Box>
            </AnimateOnScroll>
          </Box>

          {/* =================================================
        RIGHT COLUMN
    ================================================= */}

          <Box>
            {/* INTRODUCTION */}

            <AnimateOnScroll animation="fade-up" delay="0.1s">
              <Typography
                sx={{

                  fontSize: {
                    xs: "11px",
                    md: "18px",
                  },

                  fontWeight: 300,

                  lineHeight: 1.65,

                  color: "#706c65",

                  maxWidth: "100%",

                  mb: {
                    xs: 3,
                    md: 3.5,
                  },
                }}
              >
                Every commission undertaken by Khlorow begins with spatial listening.
                We do not impose pre-formed aesthetics onto an enclosure; rather, we
                interrogate the structural skeleton, natural daylight vectors, and the
                quiet rituals of the inhabitants who will move within its boundaries.
              </Typography>
            </AnimateOnScroll>

            {/* DIVIDER */}

            <Box
              sx={{
                width: "100%",
                height: "1px",

                backgroundColor: "#ded9d1",

                mb: {
                  xs: 3.5,
                  md: 3.8,
                },
              }}
            />

            {/* =================================================
          PRINCIPLES
      ================================================= */}

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(3, 1fr)",
                },

                columnGap: {
                  sm: 3,
                  md: 4,
                  lg: 5,
                },

                rowGap: {
                  xs: 4,
                },
              }}
            >
              <AnimateOnScroll animation="fade-up" delay="0s">
                <MethodPrinciple
                  number="I"
                  title="Spatial Intention"
                  description="Eliminating extraneous partitions to prioritize continuous light lines, natural acoustic resonance, and graceful human passage."
                />
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay="0.12s">
                <MethodPrinciple
                  number="II"
                  title="Material Honesty"
                  description="Selecting untreated travertine, slaked lime plasters, open-grain oak, and patinated bronze that gain dignity through time."
                />
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay="0.22s">
                <MethodPrinciple
                  number="III"
                  title="Bespoke Execution"
                  description="Uncompromising millimeter tolerances stewarded directly alongside master joiners, stone carvers, and foundry artisans."
                />
              </AnimateOnScroll>
            </Box>
          </Box>
        </Box>
      </Box>


      {/* ====================================================
          03 - 07. SERVICE SECTIONS
      ==================================================== */}

      {services
        .slice()
        .map((service) => (
          <ServiceSection
            key={service.number}
            service={service}
          />
        ))}

      <Box
        sx={{
          backgroundColor: "#faf8f3",
          py: {
            xs: 7,
            md: 10,
          },
          px: {
            xs: 2.5,
            sm: 4,
            md: 4.5,
          },
        }}
      >

        <Box
          sx={{
            backgroundColor: "#f0ede7",
            minHeight: {
              xs: "300px",
              md: "400px",
            },
            display: "flex",
            alignItems: "center",
            px: {
              xs: 4,
              sm: 5,
              md: 7,
            },
            py: {
              xs: 5,
              md: 4,
            },
            position: "relative",
            overflow: "hidden",
            borderRadius: "7px",
          }}
        >

          {/* LEFT CONTENT */}

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "70%",
              },
            }}
          >

            {/* LABEL */}

            <AnimateOnScroll animation="fade-up" delay="0s">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1.5,
                }}
              >

                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#e4002b",
                    mr: 2,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "12px",
                    letterSpacing: "1.8px",
                    color: "#36342f",
                  }}
                >
                  PRIVATE SPATIAL COMMISSION
                </Typography>

              </Box>
            </AnimateOnScroll>


            {/* CTA HEADING */}

            <AnimateOnScroll animation="fade-up" delay="0.1s">
              <Typography
                sx={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  fontSize: {
                    xs: "31px",
                    sm: "37px",
                    md: "52px",
                  },
                  lineHeight: 1,
                  mb: 2,
                }}
              >
                Have a space in mind?
              </Typography>
            </AnimateOnScroll>


            {/* CTA DESCRIPTION */}

            <AnimateOnScroll animation="fade-up" delay="0.2s">
              <Typography
                sx={{
                  color: "#77736b",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  maxWidth: "540px",
                  mb: 3,
                }}
              >
                Every commission begins with an intimate dialogue between site,
                light, and personal ritual. Let us discuss your architectural
                aspirations and archival requirements.
              </Typography>
            </AnimateOnScroll>


            {/* CTA BUTTONS */}

            <AnimateOnScroll animation="fade-up" delay="0.3s">
              <Stack
                direction="row"
                spacing={3}
                alignItems="center"
                flexWrap="wrap"
                useFlexGap
              >

                <Button
                  href="/#contact"
                  variant="contained"
                  sx={{
                    backgroundColor: "#e4002b",
                    borderRadius: 0,
                    color: "#fff",
                    fontSize: "10px",
                    letterSpacing: "1.8px",
                    px: 2.5,
                    py: 1.3,
                    boxShadow: "none",

                    "&:hover": {
                      backgroundColor: "#c90026",
                      boxShadow: "none",
                    },
                  }}
                >
                  START YOUR PROJECT
                </Button>


                <Button
                  href="/#portfolio"
                  sx={{
                    color: "#27251f",
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    px: 0,
                    minWidth: "auto",

                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#e4002b",
                    },
                  }}
                >
                  VIEW PORTFOLIO ↗
                </Button>

              </Stack>
            </AnimateOnScroll>

          </Box>


          {/* RIGHT EMPTY PANEL / DESIGN ELEMENT */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              position: "absolute",
              right: 0,
              top: 0,
              width: "26%",
              height: "100%",
              borderLeft: "1px solid rgba(0,0,0,.05)",
            }}
          />

        </Box>
      </Box>

    </Box>
  );
}


/* ==========================================================
   SERVICE SECTION
========================================================== */

function ServiceSection({ service }) {
  const imageFirst = service.layout === "image-text";

  return (
    <Box
      sx={{
        backgroundColor: "#faf8f3",
        borderTop: "1px solid #e7e2d9",

        px: {
          xs: 3,
          sm: 5,
          md: 6,
        },

        py: {
          xs: 8,
          md: 10,
        },
      }}
    >

      <Grid
        container
        spacing={{
          xs: 5,
          md: 6,
        }}
        alignItems="center"
      >

        {/* =================================================
            IMAGE
        ================================================= */}

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
            order: {
              xs: 1,
              md: imageFirst ? 1 : 2,
            },
          }}
        >

          <Box
            sx={{
              width: "100%",
              position: "relative",
              overflow: "hidden",
              boxShadow:
                "0 10px 25px rgba(0,0,0,.08)",
            }}
          >

            {/* DUMMY SERVICE IMAGE */}

            <Box
              component="img"
              src={service.image}
              alt={service.title}
              sx={{
                display: "block",
                width: "100%",
                aspectRatio: "1.45 / 1",
                objectFit: "cover",

                transition:
                  "transform .6s ease",

                "&:hover": {
                  transform: "scale(1.04)",
                },
              }}
            />


            {/* IMAGE CAPTION BAR */}

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: {
                  xs: "36px",
                  md: "36px",
                },

                backgroundColor:
                  "rgba(11,22,15,.92)",

                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                px: {
                  xs: 1.5,
                  md: 2,
                },

                gap: 2,
              }}
            >

              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "6px",
                  letterSpacing: "1.2px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {service.caption}
              </Typography>

              <Typography
                sx={{
                  color: "#e4002b",
                  fontSize: "6px",
                  letterSpacing: "1.2px",
                  whiteSpace: "nowrap",
                }}
              >
                {service.code}
              </Typography>

            </Box>

          </Box>

        </Grid>


        {/* =================================================
            TEXT
        ================================================= */}

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
            order: {
              xs: 2,
              md: imageFirst ? 2 : 1,
            },
          }}
        >

          <Box
            sx={{
              maxWidth: "510px",
              mx: {
                xs: 0,
                md: imageFirst ? 0 : "auto",
              },
            }}
          >

            {/* NUMBER / CATEGORY */}

            <AnimateOnScroll animation="fade-up" delay="0s">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                }}
              >

                <Typography
                  sx={{
                    color: "#e4002b",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    fontWeight: 500,
                  }}
                >
                  {service.number} / {service.category}
                </Typography>

                <Box
                  sx={{
                    width: 25,
                    height: "1px",
                    backgroundColor: "#d8d2c9",
                    ml: 1.5,
                  }}
                />

              </Box>
            </AnimateOnScroll>


            {/* TITLE */}

            <AnimateOnScroll animation="fade-up" delay="0.1s">
              <Typography
                sx={{
                  fontFamily:
                    "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",

                  fontWeight: 400,

                  fontSize: {
                    xs: "38px",
                    sm: "45px",
                    md: "49px",
                  },

                  lineHeight: 1.1,

                  whiteSpace: "pre-line",

                  letterSpacing: "-1px",

                  mb: 3,
                }}
              >
                {service.title}
              </Typography>
            </AnimateOnScroll>


            {/* DESCRIPTION */}

            <AnimateOnScroll animation="fade-up" delay="0.18s">
              <Typography
                sx={{
                  color: "#66635d",
                  fontSize: "14px",
                  lineHeight: 1.65,
                  maxWidth: "500px",
                  mb: 3.5,
                }}
              >
                {service.description}
              </Typography>
            </AnimateOnScroll>


            {/* SCOPE BOX */}

            <AnimateOnScroll animation="fade-up" delay="0.26s">
              <Box
                sx={{
                  backgroundColor: "#f1eee8",
                  px: 3,
                  py: 3,
                  maxWidth: "500px",
                }}
              >

                <Typography
                  sx={{
                    color: "#77736b",
                    fontSize: "12px",
                    letterSpacing: "1.7px",
                    mb: 2,
                  }}
                >
                  SCOPE OF ENGAGEMENT
                </Typography>


                <Grid container spacing={2}>

                  {service.scope.map(
                    (item, index) => (
                      <Grid
                        key={index}
                        size={{
                          xs: 12,
                          sm: 6,
                        }}
                      >

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1,
                          }}
                        >

                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              minWidth: 4,
                              backgroundColor: "#e4002b",
                              mt: "5px",
                            }}
                          />

                          <Typography
                            sx={{
                              color: "#46433d",
                              fontSize: "12px",
                              lineHeight: 1.5,
                            }}
                          >
                            {item}
                          </Typography>

                        </Box>

                      </Grid>
                    )
                  )}

                </Grid>

              </Box>
            </AnimateOnScroll>

          </Box>

        </Grid>

      </Grid>

    </Box>
  );
}


/* ==========================================================
   METHODOLOGICAL PRINCIPLE
========================================================== */

function MethodPrinciple({ number, title, description }) {
  return (
    <Box>
      {/* PRINCIPLE NUMBER */}

      <Typography
        sx={{

          fontSize: {
            xs: "6px",
            md: "12px",
          },

          fontWeight: 500,

          letterSpacing: "1.3px",

          lineHeight: 1,

          color: "#e3133d",

          textTransform: "uppercase",

          mb: 1.4,
        }}
      >
        PRINCIPLE {number}
      </Typography>

      {/* TITLE */}

      <Typography
        component="h3"
        sx={{
          m: 0,

          fontFamily:
            "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",

          fontSize: {
            xs: "17px",
            md: "24px",
          },

          fontWeight: 400,

          lineHeight: 1.15,

          color: "#4a463e",

          mb: 1.4,
        }}
      >
        {title}
      </Typography>

      {/* DESCRIPTION */}

      <Typography
        sx={{

          fontSize: {
            xs: "9px",
            md: "14px",
          },

          fontWeight: 300,

          lineHeight: 1.55,

          color: "#59564f",

          maxWidth: "220px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}