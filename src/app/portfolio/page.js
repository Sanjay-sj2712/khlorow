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
   DUMMY IMAGE PATHS
   Replace these with your actual downloaded images
========================================================== */

const images = {
  heroPlan: "/images/portfolio-plan.jpg",
  heroRealized: "/images/portfolio-realized.jpg",

  lighthouse: "/images/portfolio-lighthouse.jpg",
  coastal: "/images/portfolio-coastal.jpg",
  courtyard: "/images/portfolio-courtyard.jpg",
  greenRoom: "/images/portfolio-green-room.jpg",
  penthouse: "/images/portfolio-penthouse.jpg",

  alpine: "/images/portfolio-alpine.jpg",

  material1: "/images/material-travertine.jpg",
  material2: "/images/material-lime-plaster.jpg",
  material3: "/images/material-bronze.jpg",
  material4: "/images/material-oak.jpg",
};


/* ==========================================================
   PROJECT DATA
========================================================== */

const projects = [
  {
    number: "02",
    location: "BALEARES",
    category: "COASTAL LIVING — MALLORCA",
    title: "The Coastal Pavilion",
    year: "2023",
    image: images.coastal,
    description:
      "Expansive minimalist dining and living pavilion facing maritime pines, featuring dark basalt stone, poured microcement, and slatted bronze solar louvers.",
  },
  {
    number: "03",
    location: "KANSAI",
    category: "MASTER SANCTUARY — KYOTO",
    title: "Still House Courtyard Suite",
    year: "2024",
    image: images.courtyard,
    description:
      "Lime-washed stone surfaces, floor-to-ceiling slender bronze steel doors framing an internal reflective gravel garden and solitary bonsai.",
  },
  {
    number: "04",
    location: "MAYFAIR",
    category: "BOUTIQUE HOSPITALITY — LONDON",
    title: "The Green Room Salon",
    year: "2023",
    image: images.greenRoom,
    description:
      "Brushed forest plaster walls, custom olive velvet curved banquette seating, unlacquered brass wall sconces, and patinated Belgian bluestone bar.",
  },
  {
    number: "05",
    location: "ZURICHBERG",
    category: "URBAN PENTHOUSE — ZÜRICH",
    title: "Minimalist Stone Penthouse",
    year: "2022",
    image: images.penthouse,
    description:
      "Warm fluted stone accents, tactile Belgian linen curtains, dark smoked oak millwork, and seamless floor transitions bathed in soft alpine mist light.",
  },
];


/* ==========================================================
   MATERIAL DATA
========================================================== */

const materials = [
  {
    symbol: "Tv",
    title: "TIVOLI TRAVERTINE",
    location: "QUARRIED: LAZIO, ITALY",
    image: images.material1,
  },
  {
    symbol: "Sl",
    title: "SLAKED LIME PLASTER",
    location: "FORMULATED: PROVENCE, FRANCE",
    image: images.material2,
  },
  {
    symbol: "Br",
    title: "PATINATED BRONZE",
    location: "HAND-TURNED: MUNICH, GERMANY",
    image: images.material3,
  },
  {
    symbol: "Ok",
    title: "SMOKED ALPINE OAK",
    location: "HARVESTED: BLACK FOREST",
    image: images.material4,
  },
];


/* ==========================================================
   PORTFOLIO PAGE
========================================================== */

export default function PortfolioPage() {
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
          01. PORTFOLIO HERO / COMPARISON
      ==================================================== */}

      <Box
        sx={{
          backgroundColor: "#faf8f3",
          px: {
            xs: 2.5,
            sm: 4,
            md: 5.5,
          },
          pt: {
            xs: 7,
            md: 8,
          },
          pb: {
            xs: 7,
            md: 9,
          },
        }}
      >

        {/* TOP LABEL */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            mb: 2.5,
          }}
        >

          <Box
            sx={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "#e4002b",
            }}
          />

          <Typography
            sx={{
              fontSize: "7px",
              letterSpacing: "1.8px",
            }}
          >
            OUR PORTFOLIO
          </Typography>

          <Typography
            sx={{
              fontSize: "7px",
              letterSpacing: "1.5px",
              color: "#aaa49a",
            }}
          >
            / 2021 — 2025
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
              xs: "42px",
              sm: "52px",
              md: "62px",
            },
            lineHeight: 0.95,
            letterSpacing: "-1.5px",
            maxWidth: "600px",
            mb: 5,
          }}
        >
          Curated architectural
          <br />
          spaces shaped by light,
        </Typography>


        {/* PROJECT LABEL */}

        <Typography
          sx={{
            color: "#e4002b",
            fontSize: "7px",
            letterSpacing: "1.8px",
            mb: 0.8,
          }}
        >
          ARCHITECTURAL METAMORPHOSIS
        </Typography>

        <Typography
          sx={{
            fontFamily:
              "Georgia, 'Times New Roman', serif",
            fontSize: "14px",
            mb: 1,
          }}
        >
          The Alpine Pavilion Residence
        </Typography>


        {/* COMPARISON INSTRUCTION */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mb: 1,
          }}
        >

          <Typography
            sx={{
              fontSize: "7px",
              letterSpacing: "1px",
              color: "#77736b",
            }}
          >
            ◉ &nbsp; DRAG CURSOR OR TOUCH TO DISSECT PLAN VS. STONE
            REALIZATION
          </Typography>

        </Box>


        {/* =================================================
            PLAN VS REALIZED IMAGE
        ================================================= */}

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: {
              xs: "400px",
              sm: "500px",
              md: "540px",
            },
            overflow: "hidden",
            borderRadius: "5px",
          }}
        >

          {/* LEFT PLAN IMAGE */}

          <Box
            component="img"
            src={images.heroPlan}
            alt="Architectural plan"
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "50%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          {/* RIGHT REALIZED IMAGE */}

          <Box
            component="img"
            src={images.heroRealized}
            alt="Realized interior"
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "50%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />


          {/* CENTER DIVIDER */}

          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              width: "1px",
              backgroundColor: "rgba(255,255,255,.85)",
              transform: "translateX(-50%)",
            }}
          >

            {/* CENTER HANDLE */}

            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 25,
                height: 25,
                borderRadius: "50%",
                backgroundColor: "#101914",
                border: "1px solid rgba(255,255,255,.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "10px",
              }}
            >
              ↔
            </Box>

          </Box>


          {/* LEFT LABEL */}

          <Box
            sx={{
              position: "absolute",
              top: 15,
              left: 15,
              backgroundColor: "rgba(250,248,243,.92)",
              px: 1.5,
              py: 0.8,
            }}
          >

            <Typography
              sx={{
                fontSize: "6px",
                letterSpacing: "1.4px",
              }}
            >
              PLAN / TECHNICAL DRAFTING
            </Typography>

          </Box>


          {/* RIGHT LABEL */}

          <Box
            sx={{
              position: "absolute",
              top: 15,
              right: 15,
              backgroundColor: "rgba(250,248,243,.92)",
              px: 1.5,
              py: 0.8,
            }}
          >

            <Typography
              sx={{
                fontSize: "6px",
                letterSpacing: "1.4px",
              }}
            >
              REALIZED INTERIOR / 2024
            </Typography>

          </Box>


          {/* LEFT DESCRIPTION */}

          <Box
            sx={{
              position: "absolute",
              left: 15,
              bottom: 15,
              backgroundColor: "rgba(250,248,243,.88)",
              px: 1.5,
              py: 1,
              maxWidth: "220px",
            }}
          >

            <Typography
              sx={{
                fontSize: "7px",
                lineHeight: 1.5,
                color: "#45423c",
              }}
            >
              Structural Axis G-14 / 1:50 metric layout, spatial
              circulation, solar tracking study.
            </Typography>

          </Box>


          {/* RIGHT DESCRIPTION */}

          <Box
            sx={{
              position: "absolute",
              right: 15,
              bottom: 15,
              backgroundColor: "rgba(15,25,20,.88)",
              color: "#fff",
              px: 1.5,
              py: 1,
              maxWidth: "230px",
            }}
          >

            <Typography
              sx={{
                fontSize: "7px",
                lineHeight: 1.5,
              }}
            >
              Honed Tivoli travertine hearth, Belgian linen weave, framed
              forest aperture.
            </Typography>

          </Box>

        </Box>


        {/* PROJECT FOOTER */}

        <Grid
          container
          sx={{
            mt: 1.5,
          }}
        >

          <Grid size={{ xs: 4 }}>
            <Typography sx={metaStyle}>
              COMMISSION NO. 048–ALPN
            </Typography>
          </Grid>

          <Grid size={{ xs: 4 }}>
            <Typography
              sx={{
                ...metaStyle,
                textAlign: "center",
              }}
            >
              ST. MORITZ ENGADIN VALLEY / ELEVATION 1,822M
            </Typography>
          </Grid>

          <Grid size={{ xs: 4 }}>
            <Typography
              sx={{
                ...metaStyle,
                textAlign: "right",
              }}
            >
              LEAD ARCHITECT: KHLOROW STUDIO TRIBECA
            </Typography>
          </Grid>

        </Grid>

      </Box>


      {/* ====================================================
          02. CTA
      ==================================================== */}

      <Box
        sx={{
          backgroundColor: "#faf8f3",
          px: {
            xs: 2.5,
            sm: 4,
            md: 5.5,
          },
          py: {
            xs: 5,
            md: 7,
          },
        }}
      >

        <Box
          sx={{
            backgroundColor: "#f0ede7",
            borderRadius: "7px",
            minHeight: {
              xs: "300px",
              md: "250px",
            },
            display: "flex",
            alignItems: "center",
            px: {
              xs: 3,
              md: 5.5,
            },
            py: 4,
            position: "relative",
            overflow: "hidden",
          }}
        >

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "65%",
              },
            }}
          >

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
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
                  fontSize: "7px",
                  letterSpacing: "1.7px",
                }}
              >
                PRIVATE SPATIAL COMMISSION
              </Typography>

            </Box>


            <Typography
              sx={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
                fontSize: {
                  xs: "34px",
                  md: "43px",
                },
                lineHeight: 1,
                mb: 2,
              }}
            >
              Have a space in mind?
            </Typography>


            <Typography
              sx={{
                color: "#77736b",
                fontSize: "10px",
                lineHeight: 1.6,
                maxWidth: "500px",
                mb: 2.5,
              }}
            >
              Every commission begins with an intimate dialogue between site,
              light, and personal ritual. Let us discuss your architectural
              aspirations and archival requirements.
            </Typography>


            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >

              <Button
                href="/#contact"
                variant="contained"
                sx={{
                  backgroundColor: "#e4002b",
                  borderRadius: 0,
                  fontSize: "7px",
                  letterSpacing: "1.5px",
                  px: 2.5,
                  py: 1.4,
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
                href="/services"
                sx={{
                  color: "#222",
                  fontSize: "7px",
                  letterSpacing: "1.3px",
                  px: 0,
                  minWidth: 0,
                }}
              >
                VIEW SERVICES ↗
              </Button>

            </Stack>

          </Box>


          {/* RIGHT DECORATIVE PANEL */}

          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              width: "25%",
              borderLeft: "1px solid #ddd8d0",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />

        </Box>

      </Box>


      {/* ====================================================
          03. MATERIAL ARCHIVE
      ==================================================== */}

      <Box
        sx={{
          backgroundColor: "#f1eee8",
          px: {
            xs: 2.5,
            sm: 4,
            md: 5.5,
          },
          py: {
            xs: 7,
            md: 8,
          },
        }}
      >

        <Typography
          sx={{
            color: "#756f65",
            fontSize: "7px",
            letterSpacing: "1.6px",
            mb: 1,
          }}
        >
          MATERIAL ARCHIVE
        </Typography>


        <Typography
          sx={{
            fontFamily:
              "Georgia, 'Times New Roman', serif",
            fontSize: {
              xs: "25px",
              md: "30px",
            },
            lineHeight: 1,
            mb: 1.2,
          }}
        >
          Honest Earth Minerals &amp; Textures
        </Typography>


        <Typography
          sx={{
            color: "#77736b",
            fontSize: "8px",
            lineHeight: 1.5,
            maxWidth: "450px",
            mb: 3.5,
          }}
        >
          Every spatial commission is composed from raw stone quarries,
          ancient clay beds, and slow-harvested European hardwoods.
        </Typography>


        <Grid
          container
          spacing={2}
        >

          {materials.map((material) => (
            <Grid
              key={material.title}
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >

              <Box
                sx={{
                  backgroundColor: "#faf8f3",
                  p: 1.2,
                  borderRadius: "4px",
                }}
              >

                {/* MATERIAL IMAGE */}

                <Box
                  sx={{
                    position: "relative",
                    height: {
                      xs: "220px",
                      sm: "180px",
                      md: "145px",
                    },
                    overflow: "hidden",
                    borderRadius: "2px",
                    mb: 1,
                  }}
                >

                  <Box
                    component="img"
                    src={material.image}
                    alt={material.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* MATERIAL SYMBOL */}

                  <Typography
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily:
                        "Georgia, 'Times New Roman', serif",
                      fontSize: "17px",
                      color:
                        material.title ===
                        "SMOKED ALPINE OAK"
                          ? "#d7ddd8"
                          : "rgba(90,75,55,.7)",
                    }}
                  >
                    {material.symbol}
                  </Typography>

                </Box>


                <Typography
                  sx={{
                    fontSize: "7px",
                    letterSpacing: "1px",
                    mb: 0.4,
                  }}
                >
                  {material.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "6px",
                    letterSpacing: ".8px",
                    color: "#77736b",
                  }}
                >
                  {material.location}
                </Typography>

              </Box>

            </Grid>
          ))}

        </Grid>

      </Box>


      {/* ====================================================
          04. FEATURED PROJECT
      ==================================================== */}

      <Box
        sx={{
          backgroundColor: "#faf8f3",
          px: {
            xs: 2.5,
            sm: 4,
            md: 5.5,
          },
          py: {
            xs: 7,
            md: 9,
          },
        }}
      >

        <Box
          sx={{
            position: "relative",
          }}
        >

          {/* IMAGE */}

          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: {
                xs: "330px",
                sm: "430px",
                md: "520px",
              },
              overflow: "hidden",
            }}
          >

            <Box
              component="img"
              src={images.lighthouse}
              alt="The Light House Sanctuary"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* NUMBER */}

            <Box
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                backgroundColor:
                  "rgba(250,248,243,.9)",
                px: 1.5,
                py: .8,
              }}
            >

              <Typography
                sx={{
                  fontSize: "6px",
                  letterSpacing: "1.2px",
                }}
              >
                06 / ROARING FORK
              </Typography>

            </Box>

          </Box>


          {/* PROJECT INFO */}

          <Grid
            container
            spacing={2}
            sx={{
              mt: 2,
            }}
          >

            <Grid size={{ xs: 12, md: 8 }}>

              <Typography
                sx={{
                  color: "#7b7469",
                  fontSize: "6px",
                  letterSpacing: "1.5px",
                  mb: 1,
                }}
              >
                ARCHITECTURAL RESIDENCE — ASPEN
              </Typography>

              <Typography
                sx={{
                  fontFamily:
                    "Georgia, 'Times New Roman', serif",
                  fontSize: {
                    xs: "25px",
                    md: "28px",
                  },
                  lineHeight: 1,
                  mb: 1,
                }}
              >
                The Light House Sanctuary
              </Typography>

              <Typography
                sx={{
                  color: "#77736b",
                  fontSize: "9px",
                  lineHeight: 1.6,
                  maxWidth: "430px",
                }}
              >
                Dramatic central skylight pouring radiant daylight across raw
                limestone hearth, board-formed concrete walls, and bespoke
                hand-chiseled sculptural furniture.
              </Typography>

            </Grid>


            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "flex-start",
                  md: "flex-end",
                },
                alignItems: "flex-start",
              }}
            >

              <Typography
                sx={{
                  fontFamily:
                    "Georgia, 'Times New Roman', serif",
                  fontSize: "12px",
                }}
              >
                2023
              </Typography>

            </Grid>

          </Grid>

        </Box>

      </Box>


      {/* ====================================================
          05. PROJECT GRID
      ==================================================== */}

      <Box
        sx={{
          backgroundColor: "#faf8f3",
          px: {
            xs: 2.5,
            sm: 4,
            md: 5.5,
          },
          pb: {
            xs: 7,
            md: 9,
          },
        }}
      >

        <Grid
          container
          spacing={{
            xs: 5,
            md: 2.5,
          }}
        >

          {projects.map((project) => (
            <Grid
              key={project.number}
              size={{
                xs: 12,
                md: 6,
              }}
            >

              <ProjectCard project={project} />

            </Grid>
          ))}

        </Grid>

      </Box>


      {/* ====================================================
          06. ALL WORKS FILTER
      ==================================================== */}

      <Box
        sx={{
          backgroundColor: "#faf8f3",
          px: {
            xs: 2.5,
            sm: 4,
            md: 5.5,
          },
          pt: 2,
          pb: 1,
        }}
      >

        <Box
          sx={{
            borderBottom: "1px solid #e4dfd7",
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 2,
              md: 3,
            },
            overflowX: "auto",
            pb: 1.5,
          }}
        >

          <FilterItem
            label="All Works (12)"
            active
          />

          <FilterItem label="Residential Sanctuaries (7)" />

          <FilterItem label="Boutique Hospitality (3)" />

          <FilterItem label="Atelier & Cultural (2)" />

        </Box>

      </Box>


      {/* ====================================================
          07. ALPINE RESIDENCE FEATURE
      ==================================================== */}

      <Box
        sx={{
          backgroundColor: "#faf8f3",
          px: {
            xs: 2.5,
            sm: 4,
            md: 5.5,
          },
          py: {
            xs: 5,
            md: 6,
          },
        }}
      >

        <Box
          sx={{
            position: "relative",
          }}
        >

          {/* IMAGE */}

          <Box
            sx={{
              position: "relative",
              height: {
                xs: "330px",
                sm: "450px",
                md: "560px",
              },
              overflow: "hidden",
            }}
          >

            <Box
              component="img"
              src={images.alpine}
              alt="Private Alpine Residence"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                backgroundColor:
                  "rgba(250,248,243,.9)",
                px: 1.5,
                py: .8,
              }}
            >

              <Typography
                sx={{
                  fontSize: "6px",
                  letterSpacing: "1.2px",
                }}
              >
                01 / ENGADIN
              </Typography>

            </Box>

          </Box>


          {/* PROJECT INFORMATION */}

          <Grid
            container
            spacing={3}
            sx={{
              mt: 2,
            }}
          >

            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >

              <Typography
                sx={{
                  color: "#7b7469",
                  fontSize: "6px",
                  letterSpacing: "1.5px",
                  mb: 1,
                }}
              >
                PRIVATE RESIDENCE — ST. MORITZ
              </Typography>

              <Typography
                sx={{
                  fontFamily:
                    "Georgia, 'Times New Roman', serif",
                  fontSize: {
                    xs: "27px",
                    md: "30px",
                  },
                  lineHeight: 1,
                }}
              >
                Private Alpine Residence
              </Typography>

            </Grid>


            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >

              <Typography
                sx={{
                  color: "#77736b",
                  fontSize: "9px",
                  lineHeight: 1.6,
                }}
              >
                Monolithic travertine fireplace hearth, expansive double-height
                timber framing overlooking alpine forest, tailored boucle
                seating, and natural limestone flooring.
              </Typography>

            </Grid>


            <Grid
              size={{
                xs: 12,
                md: 2,
              }}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "flex-start",
                  md: "flex-end",
                },
              }}
            >

              <Typography
                sx={{
                  fontFamily:
                    "Georgia, 'Times New Roman', serif",
                  fontSize: "12px",
                }}
              >
                2021
              </Typography>

            </Grid>

          </Grid>

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
   PROJECT CARD
========================================================== */

function ProjectCard({ project }) {
  return (
    <Box>

      {/* IMAGE */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: {
            xs: "300px",
            sm: "350px",
            md: "360px",
          },
          overflow: "hidden",
        }}
      >

        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform .7s ease",

            "&:hover": {
              transform: "scale(1.025)",
            },
          }}
        />


        {/* PROJECT NUMBER */}

        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            backgroundColor:
              "rgba(250,248,243,.92)",
            px: 1.5,
            py: .8,
          }}
        >

          <Typography
            sx={{
              fontSize: "6px",
              letterSpacing: "1.2px",
            }}
          >
            {project.number} / {project.location}
          </Typography>

        </Box>

      </Box>


      {/* INFORMATION */}

      <Grid
        container
        spacing={2}
        sx={{
          mt: 1.5,
        }}
      >

        <Grid
          size={{
            xs: 9,
            md: 10,
          }}
        >

          <Typography
            sx={{
              color: "#7b7469",
              fontSize: "6px",
              letterSpacing: "1.2px",
              mb: 1,
            }}
          >
            {project.category}
          </Typography>

          <Typography
            sx={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
              fontSize: {
                xs: "20px",
                md: "22px",
              },
              lineHeight: 1,
              mb: 1,
            }}
          >
            {project.title}
          </Typography>

          <Typography
            sx={{
              color: "#77736b",
              fontSize: "8px",
              lineHeight: 1.55,
              maxWidth: "500px",
            }}
          >
            {project.description}
          </Typography>

        </Grid>


        <Grid
          size={{
            xs: 3,
            md: 2,
          }}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >

          <Typography
            sx={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
              fontSize: "12px",
            }}
          >
            {project.year}
          </Typography>

        </Grid>

      </Grid>

    </Box>
  );
}


/* ==========================================================
   FILTER ITEM
========================================================== */

function FilterItem({
  label,
  active = false,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        pb: 1,
        flexShrink: 0,
        cursor: "pointer",

        "&::after": active
          ? {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              right: 0,
              height: "1px",
              backgroundColor: "#e4002b",
            }
          : {},
      }}
    >

      <Typography
        sx={{
          fontSize: "7px",
          letterSpacing: "1px",
          color: active
            ? "#171713"
            : "#77736b",
        }}
      >
        {label}
      </Typography>

    </Box>
  );
}


/* ==========================================================
   SMALL META STYLE
========================================================== */

const metaStyle = {
  fontSize: "5.5px",
  letterSpacing: "1px",
  color: "#77736b",
};