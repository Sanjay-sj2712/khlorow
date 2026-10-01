"use client";

import { useState, useEffect } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

/* ============================================================
   IMAGES

   Change ONLY these paths to match the images in /public/images
============================================================ */

const images = {
  hero: "/images/hero-light.jpg",

  portfolio1: "/images/project-residential.jpg",
  portfolio2: "/images/project-commercial.jpg",
  portfolio3: "/images/project-hospitality.jpg",
  portfolio4: "/images/project-4.jpg",
  portfolio5: "/images/project-5.jpg",
  portfolio6: "/images/project-6.jpg",
  portfolio7: "/images/project-7.jpg",
  approach: "/images/approach.jpg",
};

/* ============================================================
   PORTFOLIO
============================================================ */

const projects = [
  {
    title: "Private Alpine Residence",
    year: "2024",
    image: images.portfolio1,
  },
  {
    title: "Coastal Pavilion",
    year: "2023",
    image: images.portfolio2,
  },
  {
    title: "Stone Penthouse Sanctuary",
    year: "2022",
    image: images.portfolio3,
  },
  {
    title: "The Courtyard Suite",
    year: "2024",
    image: images.portfolio4,
  },
  {
    title: "Minimalist Loft",
    year: "2023",
    image: images.portfolio5,
  },
  {
    title: "Curated Living Gallery",
    year: "2022",
    image: images.portfolio6,
  },
  {
    title: "Hospitality Lounge",
    year: "2023",
    image: images.portfolio7,
  },
];

/* ============================================================
   SERVICES
============================================================ */

const services = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Holistic structural concept, spatial choreography, volumes, facade coordination, and refined architectural execution.",
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Complete interior architecture, bespoke material palettes, custom cabinetry, lighting design, and tactile atmosphere curation.",
  },
  {
    number: "03",
    title: "Construction Works",
    description:
      "Precision craftsmanship, rigorous site execution, structural interventions, and seamless material implementation.",
  },
  {
    number: "04",
    title: "Interiors Turnkey Works",
    description:
      "Comprehensive end-to-end realization, bespoke millwork, finishes, loose furniture, styling, and move-in readiness.",
  },
  {
    number: "05",
    title: "Project Management Consulting",
    description:
      "Cost planning, contractor stewardship, procurement oversight, quality assurance, and timeline governance.",
  },
];

/* ============================================================
   APPROACH
============================================================ */

const approachItems = [
  {
    number: "01",
    title: "Spatial Intention",
    description:
      "Choreographing light, volume, and seamless movement to evoke an effortless sense of calm and visual pause.",
  },
  {
    number: "02",
    title: "Material Honesty",
    description:
      "Honoring raw travertine, blackened timber, unlacquered brass, and tactile linens that mature with character over time.",
  },
  {
    number: "03",
    title: "Bespoke Execution",
    description:
      "From foundational architectural interventions to custom millwork, curated lighting, and individual art curation.",
  },
];

/* ============================================================
   SHARED STYLES
============================================================ */

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

const bodyStyle = {
  fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
  fontSize: { xs: "13px", md: "16px" },
  lineHeight: 1.6,
  color: "#68645d",
};

const sectionPadding = {
  backgroundColor: "#FDF9F3",
  py: {
    xs: 8,
    md: 11,
    lg: 13,
  },
};

function ServiceCard({ number, title, description }) {
  return (
    <Box
      sx={{
        height: "100%",

        minHeight: {
          xs: 210,
          md: 225,
          lg: 235,
        },

        backgroundColor: "#FDF9F3",

        px: {
          xs: 3,
          md: 3.5,
          lg: 4,
        },

        py: {
          xs: 3,
          md: 3.5,
          lg: 4,
        },

        display: "flex",
        flexDirection: "column",

        transition: "transform 0.3s ease, background-color 0.3s ease",

        "&:hover": {
          transform: "translateY(-3px)",
          backgroundColor: "#fffdf7ff",
        },
      }}
    >
      {/* NUMBER */}
      <Typography
        sx={{
          fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",

          fontSize: {
            xs: "9px",
            md: "12px",
          },

          fontWeight: 400,
          letterSpacing: "0.22em",

          color: "#e3133d",

          mb: {
            xs: 2.5,
            md: 2.8,
          },
        }}
      >
        {number}
      </Typography>

      {/* TITLE */}
      <Typography
        sx={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",

          fontSize: {
            xs: "18px",
            md: "22px",
          },

          fontWeight: 400,

          lineHeight: 1.25,

          color: "#36342f",

          mb: {
            xs: 1.3,
            md: 1.5,
          },
        }}
      >
        {title}
      </Typography>

      {/* DESCRIPTION */}
      <Typography
        sx={{
          fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",

          fontSize: {
            xs: "12px",
            md: "13px",
          },

          fontWeight: 300,

          lineHeight: 1.65,

          color: "#625f59",

          maxWidth: "95%",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 1200) {
            setScrollY(window.scrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f7f3ec",
        color: "#292822",
      }}
    >
      {/* =====================================================
          01. HERO
      ===================================================== */}

      <Box
        component="section"
        sx={{
          position: "relative",

          height: {
            xs: "calc(100svh - 70px)",
            md: "calc(100vh - 60px)",
          },

          minHeight: {
            xs: 620,
            md: 620,
          },

          overflow: "hidden",
          color: "#fff",
        }}
      >
        {/* Background */}
        <Box
          component="img"
          src={images.hero}
          alt="Khlorow interior"
          sx={{
            position: "absolute",
            inset: 0,

            width: "100%",
            height: "100%",

            objectFit: "cover",
            objectPosition: {
              xs: "58% center",
              md: "center",
            },

            transform: `scale(${1 + Math.min(scrollY * 0.0001, 0.02)})`,
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,

            background: `
              linear-gradient(
                180deg,
                rgba(12,12,8,.03) 0%,
                rgba(12,12,8,.06) 45%,
                rgba(8,9,6,.60) 100%
              ),
              linear-gradient(
                90deg,
                rgba(8,9,6,.28) 0%,
                rgba(8,9,6,.08) 60%,
                transparent 100%
              )
            `,
          }}
        />

        {/* Category */}
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,

            top: {
              xs: 25,
              md: 30,
            },

            left: {
              xs: 24,
              md: "5%",
            },

            display: "inline-flex",
            alignItems: "center",

            backgroundColor: "rgba(82,76,62,.32)",

            px: 1.8,
            py: 1,
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              backgroundColor: "#e3133d",
              mr: 1,
            }}
          />

          <Typography
            sx={{
              fontSize: "10px",
              letterSpacing: "2px",
              color: "rgba(255,255,255,.88)",
            }}
          >
            INTERIOR DESIGN / ARCHITECTURE
          </Typography>
        </Box>

        {/* Content */}
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,

            left: {
              xs: 24,
              sm: 40,
              md: "5%",
            },

            bottom: {
              xs: 45,
              md: "16%",
            },

            width: {
              xs: "calc(100% - 48px)",
              md: 620,
            },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,

              fontSize: {
                xs: "44px",
                sm: "56px",
                md: "67px",
              },

              lineHeight: 1.1,

              mb: 2.5,
            }}
          >
            Spaces designed
            <br />
            around the way you
            <br />
            live.
          </Typography>

          <Typography
            sx={{
              maxWidth: 510,

              fontSize: {
                xs: "11px",
                md: "14px",
              },

              lineHeight: 1.65,
              color: "rgba(255,255,255,.78)",

              mb: 3,
            }}
          >
            Thoughtful interior architecture and bespoke environments crafted
            with warmth, material honesty, and quiet luxury.
          </Typography>

          <Stack direction="row" spacing={1.2}>
            <Button
              component={Link}
              href="/contact"
              sx={{
                height: 40,

                px: 2.7,

                backgroundColor: "#e3133d",
                color: "#fff",

                borderRadius: 0,

                fontSize: "12px",
                letterSpacing: "1.8px",

                "&:hover": {
                  backgroundColor: "#c90f34",
                },
              }}
            >
              START A PROJECT
            </Button>

            <Button
              component={Link}
              href="/projects"
              sx={{
                height: 40,

                px: 2.7,

                color: "#fff",
                border: "1px solid rgba(255,255,255,.5)",
                borderRadius: 0,

                fontSize: "12px",
                letterSpacing: "1.8px",

                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255,255,255,.06)",
                },
              }}
            >
              EXPLORE OUR WORK
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* =====================================================
          02. ABOUT KHLOROW
      ===================================================== */}

      <Box component="section" sx={sectionPadding}>
        <Container
          maxWidth={false}
          sx={{
            px: {
              xs: 3,
              md: "5%",
            },
          }}
        >
          <Grid container spacing={{ xs: 4, md: 8 }}>
            {/* Label */}
            <Grid size={{ xs: 12, md: 3 }}>
              <AnimateOnScroll animation="fade-up" delay="0s">
                <Typography sx={eyebrowStyle}>ABOUT US</Typography>
              </AnimateOnScroll>
            </Grid>

            {/* Content */}
            <Grid size={{ xs: 12, md: 9 }}>
              <Box sx={{ maxWidth: 880 }}>
                <AnimateOnScroll animation="fade-up" delay="0.1s">
                  <Typography
                    component="h2"
                    sx={{
                      ...serifHeading,

                      fontSize: {
                        xs: "35px",
                        sm: "42px",
                        md: "52px",
                      },

                      lineHeight: 1.2,

                      mb: {
                        xs: 3,
                        md: 4,
                      },
                    }}
                  >
                    We shape interiors that feel deeply
                    <br />
                    personal, calm, and enduring.
                  </Typography>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay="0.22s">
                  <Typography sx={{ ...bodyStyle, mb: 2 }}>
                    At Khlorow, we believe that an interior should never impose;
                    it should adapt intuitively to daily rituals and elevate human
                    connection. Through meticulous balance between volume, light,
                    and natural materials, our work explores how spaces can
                    nurture clarity and stillness.
                  </Typography>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay="0.32s">
                  <Typography sx={{ ...bodyStyle, mb: 3.5 }}>
                    Every project is approached as a bespoke dialogue between
                    architectural context and personal narrative. From monolithic
                    stone formations to tactile linen drapery, we curate
                    environments that feel effortless, grounded, and enduring.
                  </Typography>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay="0.42s">
                  <TextLink href="/about">
                    DISCOVER US
                  </TextLink>
                </AnimateOnScroll>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          03. PORTFOLIO
      ===================================================== */}

      <Box
        component="section"
        sx={{
          ...sectionPadding,
          pt: { xs: 7, md: 9 },
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            px: {
              xs: 3,
              md: "5%",
            },
          }}
        >
          {/* Heading */}
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },

              justifyContent: "space-between",

              // Align OUR PORTFOLIO and VIEW ALL PROJECTS
              alignItems: {
                xs: "flex-start",
                md: "flex-start",
              },

              mb: {
                xs: 4,
                md: 5,
              },
            }}
          >
            {/* LEFT */}
            <Box>
              <AnimateOnScroll animation="fade-up" delay="0s">
                <Typography sx={{ ...eyebrowStyle, mb: 1.5 }}>
                  OUR PORTFOLIO
                </Typography>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay="0.12s">
                <Typography
                  sx={{
                    ...serifHeading,

                    fontSize: {
                      xs: "34px",
                      md: "42px",
                    },

                    lineHeight: 1.2,
                  }}
                >
                  A selection of spaces designed
                  <br />
                  by Khlorow.
                </Typography>
              </AnimateOnScroll>
            </Box>

            {/* RIGHT */}
            <Box
              sx={{
                mt: {
                  xs: 3,
                  md: 0,
                },
              }}
            >
              <TextLink href="/projects">
                VIEW ALL PROJECTS
              </TextLink>
            </Box>
          </Box>

          {/* DESKTOP PORTFOLIO */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "grid",
              },

              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 2.2,

              alignItems: "start",
            }}
          >
            {/* COLUMN 1 */}
            <Stack spacing={2.2}>
              <ProjectCard
                project={projects[0]}
                height={310}
              />

              <ProjectCard
                project={projects[3]}
                height={310}
              />
            </Stack>

            {/* COLUMN 2 */}
            <Stack spacing={2.2}>
              <ProjectCard
                project={projects[1]}
                height={200}
              />

              <ProjectCard
                project={projects[4]}
                height={200}
              />

              <ProjectCard
                project={projects[6]}
                height={200}
              />
            </Stack>

            {/* COLUMN 3 */}
            <Stack spacing={2.2}>
              <ProjectCard
                project={projects[2]}
                height={310}
              />

              <ProjectCard
                project={projects[5]}
                height={310}
              />
            </Stack>
          </Box>

          {/* MOBILE PORTFOLIO */}
          <Stack
            spacing={2}
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                height={index % 2 === 0 ? 280 : 220}
              />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* =====================================================
          04. SERVICES
      ===================================================== */}

      <Box
        component="section"
        sx={{
          backgroundColor: "#F1EDE8",

          py: {
            xs: 8,
            md: 11,
            lg: 12,
          },
        }}
      >
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
          {/* ================= HEADING ================= */}

          <Box
            sx={{
              display: "flex",

              flexDirection: {
                xs: "column",
                md: "row",
              },

              justifyContent: "space-between",

              // OUR SERVICES + EXPLORE ALL same horizontal alignment
              alignItems: {
                xs: "flex-start",
                md: "flex-start",
              },

              mb: {
                xs: 5,
                md: 6.5,
              },
            }}
          >
            {/* LEFT */}
            <Box>
              <AnimateOnScroll animation="fade-up" delay="0s">
                <Typography
                  sx={{
                    ...eyebrowStyle,
                    mb: {
                      xs: 2,
                      md: 2.2,
                    },
                  }}
                >
                  OUR SERVICES
                </Typography>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay="0.12s">
                <Typography
                  sx={{
                    ...serifHeading,

                    fontSize: {
                      xs: "32px",
                      sm: "37px",
                      md: "42px",
                      lg: "42px",
                    },

                    lineHeight: 1.2,
                  }}
                >
                  From conceptual spatial planning to
                  <br />
                  bespoke styling and turnkey delivery.
                </Typography>
              </AnimateOnScroll>
            </Box>

            {/* RIGHT */}
            <Box
              sx={{
                mt: {
                  xs: 3,
                  md: 0,
                },

                pt: {
                  md: "2px",
                },
              }}
            >
              <TextLink href="/services">
                EXPLORE ALL
              </TextLink>
            </Box>
          </Box>

          {/* =====================================================
        DESKTOP CARDS
    ===================================================== */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "grid",
              },

              gridTemplateColumns: "repeat(6, 1fr)",

              gap: {
                md: 2.5,
                lg: 3,
              },
            }}
          >
            {/* 01 */}
            <Box sx={{ gridColumn: "span 2" }}>
              <ServiceCard {...services[0]} />
            </Box>

            {/* 02 */}
            <Box sx={{ gridColumn: "span 2" }}>
              <ServiceCard {...services[1]} />
            </Box>

            {/* 03 */}
            <Box sx={{ gridColumn: "span 2" }}>
              <ServiceCard {...services[2]} />
            </Box>

            {/* 04 */}
            <Box sx={{ gridColumn: "span 3" }}>
              <ServiceCard {...services[3]} />
            </Box>

            {/* 05 */}
            <Box sx={{ gridColumn: "span 3" }}>
              <ServiceCard {...services[4]} />
            </Box>
          </Box>

          {/* =====================================================
        MOBILE / TABLET
    ===================================================== */}

          <Box
            sx={{
              display: {
                xs: "grid",
                md: "none",
              },

              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
              },

              gap: 2,
            }}
          >
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                {...service}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* =====================================================
          05. OUR APPROACH
      ===================================================== */}

      <Box component="section" sx={sectionPadding}>
        <Container
          maxWidth={false}
          sx={{
            px: {
              xs: 3,
              md: "5%",
            },
          }}
        >
          <Grid
            container
            spacing={{
              xs: 6,
              md: 8,
            }}
            alignItems="center"
          >
            {/* LEFT */}
            <Grid size={{ sx: 12, md: 6 }}>
              <AnimateOnScroll animation="fade-left" delay="0s">
                <Typography sx={{ ...eyebrowStyle, mb: 2 }}>
                  OUR APPROACH
                </Typography>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" delay="0.12s">
                <Typography
                  sx={{
                    ...serifHeading,

                    fontSize: {
                      xs: "36px",
                      md: "42px",
                    },

                    lineHeight: 1.2,
                    mb: 3,
                  }}
                >
                  Quiet architecture, tactile truth,
                  <br />
                  and spaces shaped around human
                  <br />
                  ritual.
                </Typography>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" delay="0.22s">
                <Typography
                  sx={{
                    ...bodyStyle,
                    maxWidth: 560,
                    mb: 5,
                  }}
                >
                  We approach every commission as an intimate dialogue between
                  the site&apos;s natural light, authentic materials, and the
                  unhurried rhythms of daily living. We reject fleeting
                  ornamentation in favor of monolithic forms, hand applied lime
                  plaster, and bespoke joinery that patinas with grace.
                </Typography>
              </AnimateOnScroll>

              <Stack spacing={3}>
                {approachItems.map((item) => (
                  <Box
                    key={item.number}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "45px 1fr",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        letterSpacing: "0.2em",
                        color: "#e3133d",
                        pt: 0.6,
                      }}
                    >
                      {item.number}
                    </Typography>

                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                          fontSize: {
                            xs: "18px",
                            md: "20px",
                          },
                          mb: 0.5,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          ...bodyStyle,
                          fontSize: "16px",
                          maxWidth: 500,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* RIGHT IMAGE */}
            <Grid size={{ sx: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  mt: 6
                }}
              >
                <Box
                  component="img"
                  src={images.approach}
                  alt="Khlorow material approach"
                  sx={{
                    display: "block",

                    width: "100%",

                    height: {
                      xs: 360,
                      md: 600,
                    },

                    objectFit: "cover",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",

                    left: {
                      xs: 15,
                      md: 22,
                    },

                    bottom: {
                      xs: 15,
                      md: 20,
                    },

                    right: 15,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "10px",
                      letterSpacing: "0.24em",
                      color: "#fff",
                      textTransform: "uppercase",
                    }}
                  >
                    MATERIAL HARMONY & REFINED DISCIPLINE · ATELIER KHLOROW
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          06. GET IN TOUCH
      ===================================================== */}

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

          <AnimateOnScroll animation="fade-up" delay="0.2s">
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

          <Box
            component="form"
            sx={{
              width: "100%",

              maxWidth: "900px",

              mx: "auto",

              border: "1px solid #dedbd5",

              backgroundColor: "#f5f2ed",

              boxShadow: "0 1px 3px rgba(0,0,0,0.025)",

              px: {
                xs: 2.5,
                sm: 4,
                md: 5,
              },

              py: {
                xs: 3,
                sm: 4,
                md: 5.5,
              },

              textAlign: "left",
            }}
          >
            {/* ================= FIRST TWO ROWS ================= */}

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },

                columnGap: {
                  sm: 2.5,
                  md: 3,
                },

                rowGap: {
                  xs: 2.5,
                  md: 3,
                },
              }}
            >
              {/* NAME */}
              <Box>
                <FormLabel>YOUR NAME</FormLabel>

                <StyledTextField
                  fullWidth
                  name="name"
                  placeholder="Full Name"
                />
              </Box>

              {/* PHONE */}
              <Box>
                <FormLabel>PHONE NUMBER</FormLabel>

                <StyledTextField
                  fullWidth
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />
              </Box>

              {/* EMAIL */}
              <Box>
                <FormLabel>EMAIL ADDRESS</FormLabel>

                <StyledTextField
                  fullWidth
                  name="email"
                  type="email"
                  placeholder="hello@example.com"
                />
              </Box>

              {/* PROJECT TYPE */}
              <Box>
                <FormLabel>PROJECT TYPE</FormLabel>

                <StyledTextField
                  fullWidth
                  select
                  name="projectType"
                  defaultValue="Residential Interior"
                >
                  <MenuItem value="Residential Interior">
                    Residential Interior
                  </MenuItem>

                  <MenuItem value="Commercial Interior">
                    Commercial Interior
                  </MenuItem>

                  <MenuItem value="Architecture">
                    Architecture
                  </MenuItem>

                  <MenuItem value="Turnkey Works">
                    Turnkey Works
                  </MenuItem>

                  <MenuItem value="Project Management">
                    Project Management
                  </MenuItem>
                </StyledTextField>
              </Box>
            </Box>

            {/* ================= MESSAGE ================= */}

            <Box
              sx={{
                mt: {
                  xs: 2.5,
                  md: 3,
                },
              }}
            >
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

            <Box
              sx={{
                mt: {
                  xs: 3,
                  md: 3.5,
                },
              }}
            >
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

          {/* =====================================================
        CONTACT SHORTCUTS
    ===================================================== */}

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
        </Container>
      </Box>
    </Box>
  );
}

/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({ project, height }) {
  return (
    <Box
      component={Link}
      href="/projects"
      sx={{
        position: "relative",

        display: "block",

        height,

        overflow: "hidden",

        textDecoration: "none",
        color: "#fff",

        "& img": {
          transition: "transform .7s cubic-bezier(.2,.6,.3,1)",
        },

        "&:hover img": {
          transform: "scale(1.055)",
        },
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
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background:
            "linear-gradient(to top, rgba(10,10,8,.62) 0%, rgba(10,10,8,.05) 55%, transparent 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",

          left: 18,
          right: 18,
          bottom: 15,

          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",

          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",

            fontSize: {
              xs: "17px",
              md: "16px",
            },

            lineHeight: 1.1,

            color: "#fff",
          }}
        >
          {project.title}
        </Typography>

        <Typography
          sx={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,.85)",
            flexShrink: 0,
          }}
        >
          {project.year}
        </Typography>
      </Box>
    </Box>
  );
}

/* ============================================================
   SERVICE ITEM
============================================================ */

function ServiceItem({ number, title, description }) {
  return (
    <Box
      sx={{
        minHeight: {
          xs: "auto",
          md: 190,
        },

        p: {
          xs: "28px 0",
          md: 4,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "8px",
          letterSpacing: "0.22em",
          color: "#e3133d",
          mb: 2,
        }}
      >
        {number}
      </Typography>

      <Typography
        sx={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",

          fontSize: {
            xs: "21px",
            md: "20px",
          },

          color: "#292822",

          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          ...bodyStyle,

          fontSize: {
            xs: "12px",
            md: "11px",
          },

          maxWidth: 390,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

/* ============================================================
   TEXT LINK
============================================================ */

function TextLink({ children, href }) {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        display: "inline-flex",
        alignItems: "center",

        gap: 1,

        color: "#e3133d",
        textDecoration: "none",

        fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
        fontSize: "14px",
        fontWeight: 500,

        letterSpacing: "0.1em",

        "& svg": {
          transition: "transform .25s ease",
        },

        "&:hover svg": {
          transform: "translateX(4px)",
        },
      }}
    >
      {children}

      <ArrowForwardIcon
        sx={{
          fontSize: 13,
        }}
      />
    </Box>
  );
}

/* ============================================================
   FORM COMPONENTS
============================================================ */

function FormLabel({ children }) {
  return (
    <Typography
      sx={{
        fontSize: "10px",
        fontWeight: 500,

        letterSpacing: "0.1em",
        textTransform: "uppercase",

        color: "#4c4943",

        mb: 0.8,
      }}
    >
      {children}
    </Typography>
  );
}

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