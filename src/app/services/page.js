"use client";

import React from "react";
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
  return (
    <Box
      sx={{
        backgroundColor: "#f8f5ef",
        color: "#171713",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >

      {/* ====================================================
          01. HERO
      ==================================================== */}

      <Box
        sx={{
          position: "relative",
          height: {
            xs: "75vh",
            md: "100vh",
          },
          minHeight: {
            xs: "560px",
            md: "650px",
          },
          overflow: "hidden",
        }}
      >

        {/* DUMMY HERO IMAGE */}

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
            objectPosition: "center",
          }}
        />

        {/* IMAGE OVERLAY */}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(10,12,8,.65) 0%, rgba(10,12,8,.30) 55%, rgba(10,12,8,.08) 100%)",
          }}
        />

        {/* HERO CONTENT */}

        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            left: {
              xs: "6%",
              md: "5%",
            },
            bottom: {
              xs: "8%",
              md: "12%",
            },
            width: {
              xs: "88%",
              md: "700px",
            },
          }}
        >

          <Typography
            component="h1"
            sx={{
              color: "#fff",
              fontFamily:
                "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize: {
                xs: "47px",
                sm: "58px",
                md: "72px",
              },
              lineHeight: 0.92,
              letterSpacing: "-2px",
              maxWidth: "750px",
            }}
          >
            From first idea to enduring
            <br />
            detail.
          </Typography>


          <Typography
            sx={{
              color: "rgba(255,255,255,.72)",
              fontSize: {
                xs: "10px",
                md: "12px",
              },
              lineHeight: 1.6,
              maxWidth: "570px",
              mt: 3,
            }}
          >
            We bring together architectural vision, material craftsmanship,
            and turnkey realization to create resonant interior environments
            tailored for living.
          </Typography>

        </Box>

      </Box>


      {/* ====================================================
          02. INTRO / CTA
      ==================================================== */}

      <Box
        sx={{
          backgroundColor: "#f1eee8",
          px: {
            xs: 3,
            sm: 6,
            md: 8,
          },
          py: {
            xs: 7,
            md: 8,
          },
        }}
      >

        <Box
          sx={{
            minHeight: {
              xs: "350px",
              md: "340px",
            },
            borderRight: {
              xs: "none",
              md: "1px solid #ddd8d0",
            },
            display: "flex",
            alignItems: "center",
          }}
        >

          <Box
            sx={{
              maxWidth: "550px",
            }}
          >

            {/* LABEL */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2.5,
              }}
            >

              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#e4002b",
                  mr: 1.2,
                }}
              />

              <Typography
                sx={{
                  fontSize: "8px",
                  letterSpacing: "1.8px",
                  color: "#35322d",
                }}
              >
                PRIVATE SPATIAL COMMISSION
              </Typography>

            </Box>


            {/* TITLE */}

            <Typography
              sx={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize: {
                  xs: "38px",
                  md: "46px",
                },
                lineHeight: 1,
                mb: 2.5,
              }}
            >
              Have a space in mind?
            </Typography>


            {/* DESCRIPTION */}

            <Typography
              sx={{
                color: "#77736b",
                fontSize: "11px",
                lineHeight: 1.65,
                maxWidth: "500px",
                mb: 3,
              }}
            >
              Every commission begins with an intimate dialogue between site,
              light, and personal ritual. Let us discuss your architectural
              aspirations and archival requirements.
            </Typography>


            {/* BUTTONS */}

            <Stack
              direction="row"
              spacing={2.5}
              alignItems="center"
              flexWrap="wrap"
              useFlexGap
            >

              <Button
                href="/#contact"
                variant="contained"
                sx={{
                  backgroundColor: "#e4002b",
                  color: "#fff",
                  borderRadius: 0,
                  fontSize: "8px",
                  letterSpacing: "1.7px",
                  px: 3,
                  py: 1.5,
                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: "#c90026",
                    boxShadow: "none",
                  },
                }}
              >
                START YOUR PROJECT →
              </Button>


              <Button
                href="/#portfolio"
                sx={{
                  color: "#292722",
                  fontSize: "8px",
                  letterSpacing: "1.5px",
                  px: 0,
                  minWidth: 0,

                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#e4002b",
                  },
                }}
              >
                VIEW PORTFOLIO ↗
              </Button>

            </Stack>

          </Box>

        </Box>

      </Box>


      {/* ====================================================
          03 - 07. SERVICE SECTIONS
      ==================================================== */}

      {services
        .slice()
        .reverse()
        .map((service) => (
          <ServiceSection
            key={service.number}
            service={service}
          />
        ))}


      {/* ====================================================
          08. METHODOLOGICAL INQUIRY
      ==================================================== */}

      <Box
        sx={{
          backgroundColor: "#f1eee8",
          borderTop: "1px solid #e4dfd6",
          px: {
            xs: 3,
            sm: 5,
            md: 6,
          },
          py: {
            xs: 7,
            md: 8,
          },
        }}
      >

        <Grid
          container
          spacing={{
            xs: 4,
            md: 7,
          }}
        >

          {/* LABEL */}

          <Grid
            size={{
              xs: 12,
              md: 3,
            }}
          >

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >

              <Box
                sx={{
                  width: 6,
                  height: 6,
                  backgroundColor: "#e4002b",
                  mr: 1,
                }}
              />

              <Typography
                sx={{
                  color: "#77736b",
                  fontSize: "8px",
                  letterSpacing: "1.8px",
                }}
              >
                METHODOLOGICAL INQUIRY
              </Typography>

            </Box>

            <Box
              sx={{
                width: 50,
                height: "1px",
                backgroundColor: "#d8d2c9",
                mt: 8,
              }}
            />

          </Grid>


          {/* CONTENT */}

          <Grid
            size={{
              xs: 12,
              md: 9,
            }}
          >

            <Typography
              sx={{
                color: "#77736b",
                fontSize: {
                  xs: "11px",
                  md: "13px",
                },
                lineHeight: 1.6,
                maxWidth: "850px",
                mb: 3,
              }}
            >
              Every commission undertaken by KHLOROW begins with spatial
              listening. We do not impose pre-formed aesthetics onto an
              enclosure; rather, we interrogate the structural skeleton,
              natural daylight vectors, and the quiet rituals of the
              inhabitants who will move within its boundaries.
            </Typography>


            {/* Divider */}

            <Box
              sx={{
                height: "1px",
                backgroundColor: "#ddd8cf",
                mb: 2.5,
              }}
            />


            {/* PRINCIPLES */}

            <Grid container spacing={4}>

              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <MethodPrinciple
                  number="I"
                  title="Spatial Intention"
                  description="Eliminating extraneous partitions to prioritize contiguous light lines, natural acoustic resonance, and graceful human passage."
                />
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <MethodPrinciple
                  number="II"
                  title="Material Honesty"
                  description="Selecting untreated travertine, slaked lime plasters, open-grain oak, and patinated bronze that gain dignity through time."
                />
              </Grid>

              <Grid
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <MethodPrinciple
                  number="III"
                  title="Bespoke Execution"
                  description="Uncompromising millimeter tolerances stewarded directly alongside master joiners, stone carvers, and foundry artisans."
                />
              </Grid>

            </Grid>

          </Grid>

        </Grid>

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
                  "transform .7s ease",

                "&:hover": {
                  transform: "scale(1.02)",
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
                  md: "42px",
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
                  fontSize: "8px",
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


            {/* TITLE */}

            <Typography
              sx={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",

                fontWeight: 400,

                fontSize: {
                  xs: "38px",
                  sm: "45px",
                  md: "49px",
                },

                lineHeight: 1.02,

                whiteSpace: "pre-line",

                letterSpacing: "-1px",

                mb: 3,
              }}
            >
              {service.title}
            </Typography>


            {/* DESCRIPTION */}

            <Typography
              sx={{
                color: "#66635d",
                fontSize: "11px",
                lineHeight: 1.65,
                maxWidth: "500px",
                mb: 3.5,
              }}
            >
              {service.description}
            </Typography>


            {/* SCOPE BOX */}

            <Box
              sx={{
                backgroundColor: "#f1eee8",
                px: 2.5,
                py: 2.3,
                maxWidth: "500px",
              }}
            >

              <Typography
                sx={{
                  color: "#77736b",
                  fontSize: "7px",
                  letterSpacing: "1.7px",
                  mb: 1.5,
                }}
              >
                SCOPE OF ENGAGEMENT
              </Typography>


              <Grid container spacing={1.3}>

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
                            width: 4,
                            height: 4,
                            minWidth: 4,
                            backgroundColor: "#e4002b",
                            mt: "5px",
                          }}
                        />

                        <Typography
                          sx={{
                            color: "#46433d",
                            fontSize: "9px",
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

          </Box>

        </Grid>

      </Grid>

    </Box>
  );
}


/* ==========================================================
   METHODOLOGICAL PRINCIPLE
========================================================== */

function MethodPrinciple({
  number,
  title,
  description,
}) {
  return (
    <Box>

      <Typography
        sx={{
          color: "#e4002b",
          fontSize: "8px",
          letterSpacing: "1.7px",
          mb: 1,
        }}
      >
        PRINCIPLE {number}
      </Typography>

      <Typography
        sx={{
          fontFamily:
            "Georgia, 'Times New Roman', serif",
          fontSize: "15px",
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "#77736b",
          fontSize: "9px",
          lineHeight: 1.55,
        }}
      >
        {description}
      </Typography>

    </Box>
  );
}