"use client";

import { useState, useRef, useCallback } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

/* =========================================================
   IMAGES
   Replace these with your actual public image paths
========================================================= */

const images = {
  featuredProcess: "/images/service-02.jpg",      // floor plan / process study
  featuredProject: "/images/service-01.jpg",      // completed interior

  alpine: "/images/project-4.jpg",             // courtyard / warm tones
  coastal: "/images/project-hospitality.jpg",   // open coastal pavilion
  courtyard: "/images/project-residential.jpg",   // residential interior
  salon: "/images/project-7.jpg",             // amber lounge
  townhouse: "/images/project-6.jpg",             // gallery / townhouse
  lakehouse: "/images/project-5.jpg",             // loft / dramatic light
};

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    category: "Residential",
    location: "Aspen, Colorado",
    year: "2026",
    title: "Private Alpine Residence",
    description:
      "Monolithic travertine fireplaces meet expansive double-height timber framing, creating a quiet dialogue between architecture, landscape, and alpine light.",
    image: images.alpine,
    layout: "wide",
    figure: "FIG. 01 / ALPINE",
  },
  {
    id: 2,
    category: "Residential",
    location: "California",
    year: "2025",
    title: "The Coastal Pavilion",
    description:
      "Expansive minimalist glazing and liminal pavilion spaces frame sea, sky, and shifting coastal light.",
    image: images.coastal,
    figure: "FIG. 02 / COASTAL",
  },
  {
    id: 3,
    category: "Residential",
    location: "Kyoto",
    year: "2026",
    title: "Still House Courtyard Suite",
    description:
      "A restrained courtyard residence shaped by filtered daylight, natural timber, and a quiet relationship between interior and garden.",
    image: images.courtyard,
    figure: "FIG. 03 / STILL",
  },
  {
    id: 4,
    category: "Hospitality",
    location: "New York",
    year: "2025",
    title: "The Green Room Salon",
    description:
      "A subterranean social interior where deep velvet, warm brass, and intimate lighting establish an atmospheric evening retreat.",
    image: images.salon,
    figure: "FIG. 04 / HOSPITALITY",
  },
  {
    id: 5,
    category: "Residential",
    location: "London",
    year: "2024",
    title: "Minimalist Stone Townhouse",
    description:
      "Warm limestone accents, tactile oak, and framed garden views establish a calm residential composition.",
    image: images.townhouse,
    figure: "FIG. 05 / TOWNHOUSE",
  },
  {
    id: 6,
    category: "Residential",
    location: "Lake Tahoe",
    year: "2025",
    title: "The Light House Sanctuary",
    description:
      "Dramatic central daylight pours through a sculptural volume, balancing monumental stone with restrained furniture and natural warmth.",
    image: images.lakehouse,
    layout: "wide",
    figure: "FIG. 06 / SANCTUARY",
  },
];

const filters = [
  "All Works",
  "Residential",
  "Hospitality",
  "Commercial",
];

/* =========================================================
   MATERIAL DATA
========================================================= */

const materials = [
  {
    code: "Tv",
    title: "IVORY TRAVERTINE",
    detail: "HONED / LIGHT VEIN",
    background:
      "linear-gradient(135deg, #ddd7ce 0%, #f1ede7 100%)",
  },
  {
    code: "Sl",
    title: "SLAKED LIME PLASTER",
    detail: "NATURAL / WARM GREY",
    background:
      "linear-gradient(135deg, #cbc8c2 0%, #e8e5df 100%)",
  },
  {
    code: "Br",
    title: "PATINATED BRONZE",
    detail: "SATIN / AGED FINISH",
    background:
      "linear-gradient(135deg, #eacb8b 0%, #f4daa4 100%)",
  },
  {
    code: "Ok",
    title: "SMOKED ALPINE OAK",
    detail: "NATURAL / DARK GRAIN",
    background: "#17241c",
    light: true,
  },
];

/* =========================================================
   SHARED STYLES
========================================================= */

const serif = {
  fontFamily:
    "var(--font-cormorant), 'Cormorant Garamond', Georgia, 'Times New Roman', serif",
  fontWeight: 400,
};

const eyebrow = {
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "1.7px",
  textTransform: "uppercase",
  color: "#34322d",
};

const red = "#e3133d";
const text = "#282821";
const muted = "#716d65";
const background = "#faf8f3";

/* =========================================================
   PAGE
========================================================= */

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Works");

  const visibleProjects =
    activeFilter === "All Works"
      ? projects
      : projects.filter(
        (project) => project.category === activeFilter
      );

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: background,
        color: text,
        minHeight: "100vh",
      }}
    >
      {/* ===================================================
          PAGE INTRO
      =================================================== */}

      <Box
        component="section"
        sx={{
          pt: {
            xs: 8,
            md: 10,
          },

          pb: {
            xs: 5,
            md: 10,
          },
        }}
      >
        <PageContainer>
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "48% 1fr",
              },

              gap: {
                xs: 4,
                md: 8,
              },

              alignItems: "end",
            }}
          >
            {/* LEFT */}

            <Box>
              <AnimateOnScroll animation="fade-up" delay="0s">
                <SectionLabel>
                  OUR PORTFOLIO
                </SectionLabel>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay="0.12s">
                <Typography
                  component="h1"
                  sx={{
                    ...serif,

                    mt: 2,

                    fontSize: {
                      xs: "42px",
                      sm: "52px",
                      md: "58px",
                      lg: "62px",
                    },

                    lineHeight: {
                      xs: 0.98,
                      md: 0.95,
                    },

                    letterSpacing: "-1.7px",

                    maxWidth: "600px",
                  }}
                >
                  Curated architectural
                  <br />
                  spaces shaped by light,
                </Typography>
              </AnimateOnScroll>
            </Box>

            {/* RIGHT SMALL INDEX */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                justifyContent: "flex-end",

                pb: 1,
              }}
            >
            </Box>
          </Box>
        </PageContainer>
      </Box>

      {/* ===================================================
          FEATURED PROJECT
      =================================================== */}

      <Box
        component="section"
        sx={{
          pb: {
            xs: 6,
            md: 7,
          },
        }}
      >
        <PageContainer>
          {/* FEATURED META */}

          <Box
            sx={{
              display: "flex",

              flexDirection: {
                xs: "column",
                md: "row",
              },

              justifyContent: "space-between",

              alignItems: {
                xs: "flex-start",
                md: "flex-end",
              },

              gap: 2,

              mb: 2,
            }}
          >
            <Box>
              <AnimateOnScroll animation="fade-up" delay="0s">
                <Typography
                  sx={{
                    ...eyebrow,
                    color: red,
                    mb: 1.5,
                  }}
                >
                  ARCHITECTURAL METHOD / 01
                </Typography>
              </AnimateOnScroll>

              <Typography
                sx={{
                  ...serif,
                  fontSize: "32px",
                  lineHeight: 1.1,
                  fontWeight: 500
                }}
              >
                The Alpine Pavilion Residence
              </Typography>
            </Box>

            <Typography
              sx={{
                ...eyebrow,
                color: "#56524b",
              }}
            >
              DRAG CURSOR OR TOUCH TO DISSECT PLAN VS. STONE REALIZATION
            </Typography>
          </Box>

          {/* FEATURED IMAGE — DRAG COMPARE SLIDER */}

          <ImageCompareSlider
            leftImage={images.featuredProcess}
            rightImage={images.featuredProject}
            leftLabel="5.8M / TECHNICAL DRAWING"
            rightLabel="REALIZED INTERIOR / 2026"
          />
        </PageContainer>
      </Box>

      {/* ===================================================
          FILTERS
      =================================================== */}

      <Box component="section">
        <PageContainer>
          <Box
            sx={{
              display: "flex",

              gap: {
                xs: 3,
                md: 5,
              },

              overflowX: "auto",

              borderBottom: "1px solid #d9d4cc",

              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {filters.map((filter) => {
              const active = filter === activeFilter;

              return (
                <Box
                  key={filter}
                  component="button"
                  onClick={() => setActiveFilter(filter)}
                  sx={{
                    appearance: "none",
                    border: 0,
                    outline: 0,

                    background: "transparent",

                    cursor: "pointer",

                    position: "relative",

                    flexShrink: 0,

                    px: 0,
                    pb: 1.7,

                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                    fontWeight: active ? 500 : 400,

                    color: active ? text : "#77736c",

                    fontSize: { xs: "18px", md: "22px" },

                    letterSpacing: "0.5px",

                    transition: "color .2s ease",

                    "&::after": {
                      content: '""',

                      position: "absolute",

                      left: 0,
                      bottom: -1,

                      width: active ? "100%" : 0,
                      height: "1px",

                      backgroundColor: red,

                      transition: "width .25s ease",
                    },

                    "&:hover": {
                      color: text,
                    },
                  }}
                >
                  {filter}
                </Box>
              );
            })}
          </Box>
        </PageContainer>
      </Box>

      {/* ===================================================
          PROJECT GRID
      =================================================== */}

      <Box
        component="section"
        sx={{
          pt: {
            xs: 4,
            md: 5,
          },

          pb: {
            xs: 9,
            md: 11,
          },
        }}
      >
        <PageContainer>
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
              },

              columnGap: {
                md: 3,
              },

              rowGap: {
                xs: 6,
                md: 6.5,
              },
            }}
          >
            {visibleProjects.map((project, index) => (
              <AnimateOnScroll
                key={project.id}
                animation="fade-up"
                delay={`${index * 0.08}s`}
              >
                <ProjectCard
                  project={project}
                />
              </AnimateOnScroll>
            ))}
          </Box>
        </PageContainer>
      </Box>

      {/* ===================================================
          MATERIAL PALETTE
      =================================================== */}

      <Box
        component="section"
        sx={{
          backgroundColor: "#f4f1eb",

          py: {
            xs: 8,
            md: 9,
          },
        }}
      >
        <PageContainer>
          <AnimateOnScroll animation="fade-up" delay="0s">
            <Typography
              sx={{
                ...eyebrow,

                color: "#8d8579",

                mb: 1.4,
              }}
            >
              MATERIAL ARCHIVE
            </Typography>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay="0.1s">
            <Typography
              component="h2"
              sx={{
                ...serif,

                fontSize: {
                  xs: "32px",
                  md: "44px",
                },

                lineHeight: 1,

                mb: 1.5,
              }}
            >
              Honest Earth Materials &amp; Textures
            </Typography>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay="0.18s">
            <Typography
              sx={{
                fontSize: "16px",

                lineHeight: 1.6,

                color: muted,

                maxWidth: "550px",

                mb: {
                  xs: 4,
                  md: 5,
                },
              }}
            >
              Raw, tactile materials selected for their natural aging,
              warmth, tonal depth, and ability to develop character over time.
            </Typography>
          </AnimateOnScroll>

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },

              gap: {
                xs: 2,
                md: 2.5,
              },
            }}
          >
            {materials.map((material, index) => (
              <AnimateOnScroll
                key={material.code}
                animation="fade-up"
                delay={`${index * 0.1}s`}
              >
                <MaterialCard
                  {...material}
                />
              </AnimateOnScroll>
            ))}
          </Box>
        </PageContainer>
      </Box>

      {/* ===================================================
          CTA
      =================================================== */}

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
                  href="/#service"
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
                  VIEW SERVICES ↗
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

/* =========================================================
   IMAGE COMPARE SLIDER (DRAGGABLE BEFORE / AFTER)
========================================================= */

function ImageCompareSlider({
  leftImage,
  rightImage,
  leftLabel = "5.8M / TECHNICAL DRAWING",
  rightLabel = "REALIZED INTERIOR / 2026",
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <Box
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "380px",
          sm: "480px",
          md: "540px",
          lg: "580px",
        },
        overflow: "hidden",
        borderRadius: "2px",
        cursor: "ew-resize",
        userSelect: "none",
        touchAction: "none",
        backgroundColor: "#1b221d",
      }}
    >
      {/* RIGHT IMAGE (UNDERNEATH) */}
      <Box
        component="img"
        src={rightImage}
        alt="Realized Interior"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          pointerEvents: "none",
        }}
      />

      {/* LEFT IMAGE (CLIPPED ON TOP) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          pointerEvents: "none",
        }}
      >
        <Box
          component="img"
          src={leftImage}
          alt="Architectural Plan & Studies"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      {/* LEFT LABEL TAG */}
      <ImageTag
        sx={{
          top: 18,
          left: 18,
          pointerEvents: "none",
          opacity: sliderPos > 12 ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        {leftLabel}
      </ImageTag>

      {/* RIGHT LABEL TAG */}
      <ImageTag
        sx={{
          top: 18,
          right: 18,
          pointerEvents: "none",
          opacity: sliderPos < 88 ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        {rightLabel}
      </ImageTag>


      {/* DIVIDER VERTICAL LINE */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${sliderPos}%`,
          width: "2px",
          backgroundColor: "#ffffff",
          boxShadow: "0 0 10px rgba(0,0,0,0.6)",
          zIndex: 5,
          pointerEvents: "none",
          transform: "translateX(-50%)",
        }}
      />

      {/* DRAG HANDLE BUTTON */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: `${sliderPos}%`,
          transform: isDragging
            ? "translate(-50%, -50%) scale(1.12)"
            : "translate(-50%, -50%) scale(1)",
          transition: isDragging ? "transform 0.1s ease" : "transform 0.2s ease",
          width: 44,
          height: 44,
          borderRadius: "50%",
          backgroundColor: "#152019",
          border: "2px solid #ffffff",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 18px rgba(0,0,0,0.45)",
          zIndex: 6,
          pointerEvents: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "-1px",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          ‹ ›
        </Typography>
      </Box>
    </Box>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project }) {
  const isWide = project.layout === "wide";

  return (
    <Box
      component="article"
      sx={{
        gridColumn: {
          xs: "span 1",
          md: isWide ? "1 / -1" : "span 1",
        },
      }}
    >
      {/* IMAGE */}

      <Box
        sx={{
          display: "block",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#e8e3da",
          mb: 2,
          borderRadius: "2px",
          "&:hover img": {
            transform: "scale(1.06)",
          },
          "&:hover .image-overlay": {
            backgroundColor: "rgba(20,20,15,.06)",
          },
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            display: "block",

            width: "100%",

            height: {
              xs: "320px",
              sm: "420px",
              md: "440px",
              lg: "480px",
            },

            objectFit: "cover",

            transition: "transform .7s cubic-bezier(.2,.7,.2,1)",
            willChange: "transform",
          }}
        />

        {/* FIGURE LABEL */}

        <ImageTag
          sx={{
            top: 14,
            left: 14,
            pointerEvents: "none",
          }}
        >
          {project.figure}
        </ImageTag>

        {/* HOVER OVERLAY */}

        <Box
          className="image-overlay"
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(20,20,15,0)",
            transition: "background-color .4s ease",
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* META */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          gap: 2,

          mb: 1,
        }}
      >
        <Typography
          sx={{
            ...eyebrow,

            color: "#8d887f",

            fontSize: "10px",
          }}
        >
          {project.category} · {project.location}
        </Typography>

        <Typography
          sx={{
            ...eyebrow,

            color: "#6f6b63",

            fontSize: "12px",
          }}
        >
          {project.year}
        </Typography>
      </Box>

      {/* INFO */}

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr",
          },

          gap: {
            xs: 1.5,
            md: 1.5,
          },
        }}
      >
        <Typography
          component="h2"
          sx={{
            ...serif,

            color: text,

            fontSize: {
              xs: "22px",
              md: "32px",
            },

            lineHeight: 1,
          }}
        >
          {project.title}
        </Typography>

        <Typography
          sx={{

            color: muted,

            fontSize: "16px",

            lineHeight: 1.65,

            maxWidth: "600px",
          }}
        >
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
}

/* =========================================================
   MATERIAL CARD
========================================================= */

function MaterialCard({
  code,
  title,
  detail,
  background,
  light,
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#faf8f4",
        overflow: "hidden",
        cursor: "default",

        p: {
          xs: 1.2,
          md: 1.5,
        },

        transition: "box-shadow .35s ease, transform .35s ease",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.10)",

          "& .material-swatch": {
            transform: "scale(1.07)",
          },
        },
      }}
    >
      <Box
        sx={{
          height: {
            xs: 140,
            sm: 170,
            md: 260,
          },

          overflow: "hidden",
          mb: 1.5,
        }}
      >
        <Box
          className="material-swatch"
          sx={{
            width: "100%",
            height: "100%",

            background,

            display: "flex",

            alignItems: "center",
            justifyContent: "center",

            transition: "transform .55s cubic-bezier(.2,.7,.2,1)",
            willChange: "transform",
          }}
        >
          <Typography
            sx={{
              ...serif,

              fontSize: "18px",

              color: light
                ? "rgba(255,255,255,.82)"
                : "#514b43",
            }}
          >
            {code}
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          ...eyebrow,

          fontSize: "12px",

          color: text,

          mb: 0.5,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{

          fontSize: "8px",

          letterSpacing: "0.8px",

          color: "#918b82",

          textTransform: "uppercase",
        }}
      >
        {detail}
      </Typography>
    </Box>
  );
}

/* =========================================================
   SMALL SHARED COMPONENTS
========================================================= */

function PageContainer({ children }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        px: {
          xs: 3,
          sm: 5,
          md: "5%",
        },
      }}
    >
      {children}
    </Container>
  );
}

function SectionLabel({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 8,
          height: 8,

          backgroundColor: red,

          mr: 1.2,

          flexShrink: 0,
        }}
      />

      <Typography
        sx={{
          ...eyebrow,

          color: "#514d46",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

function ImageTag({ children, sx = {} }) {
  return (
    <Box
      sx={{
        position: "absolute",

        zIndex: 3,

        backgroundColor: "rgba(250,248,243,.95)",

        px: 1.8,
        py: 1,

        ...sx,
      }}
    >
      <Typography
        sx={{
          fontSize: "10px",

          fontWeight: 600,

          letterSpacing: "1.2px",

          lineHeight: 1,

          color: "#292721",

          textTransform: "uppercase",

          whiteSpace: "nowrap",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}