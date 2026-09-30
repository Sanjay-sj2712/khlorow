"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Grid,
  Stack,
} from "@mui/material";

const images = {
  hero: "/images/hero.jpg",
  approach: "/images/approach.jpg",

  portfolio1: "/images/portfolio-1.jpg",
  portfolio2: "/images/portfolio-2.jpg",
  portfolio3: "/images/portfolio-3.jpg",
  portfolio4: "/images/portfolio-4.jpg",
  portfolio5: "/images/portfolio-5.jpg",
  portfolio6: "/images/portfolio-6.jpg",
  portfolio7: "/images/portfolio-7.jpg",
};

const services = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Holistic architectural concept, spatial choreography, volumes, facade coordination, and refined architectural execution.",
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
      "From concept and end-to-end realization, bespoke millwork, finishes, loose furniture, styling, and move-in readiness.",
  },
  {
    number: "05",
    title: "Project Management Consulting",
    description:
      "Cost planning, contractor stewardship, procurement oversight, quality assurance, and timeline governance.",
  },
];

const projects = [
  {
    title: "Private Alpine Residence",
    year: "2024",
    image: images.portfolio1,
  },
  {
    title: "The Courtyard Suite",
    year: "2024",
    image: images.portfolio2,
  },
  {
    title: "Coastal Pavilion",
    year: "2023",
    image: images.portfolio3,
  },
  {
    title: "Minimalist Loft",
    year: "2023",
    image: images.portfolio4,
  },
  {
    title: "Hospitality Lounge",
    year: "2023",
    image: images.portfolio5,
  },
  {
    title: "Stone Penthouse Sanctuary",
    year: "2022",
    image: images.portfolio6,
  },
  {
    title: "Curated Living Gallery",
    year: "2022",
    image: images.portfolio7,
  },
];

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f5ef",
        color: "#171713",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <Box
        sx={{
          position: "relative",
          height: {
            xs: "90vh",
            md: "100vh",
          },
          minHeight: "650px",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        {/* DUMMY HERO IMAGE */}
        <Box
          component="img"
          src={images.hero}
          alt="Luxury interior"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(15,15,10,.58) 0%, rgba(15,15,10,.22) 55%, rgba(15,15,10,.08) 100%)",
          }}
        />

        {/* Hero Content */}
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
              md: "10%",
            },
            width: {
              xs: "88%",
              md: "650px",
            },
          }}
        >
          {/* Label */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "rgba(55,52,43,.4)",
              px: 2,
              py: 1.2,
              mb: {
                xs: 3,
                md: 4,
              },
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                backgroundColor: "#e4002b",
                mr: 1,
              }}
            />

            <Typography
              sx={{
                fontSize: "8px",
                letterSpacing: "2.5px",
                color: "#e8e4dc",
              }}
            >
              INTERIOR DESIGN / ARCHITECTURE
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            component="h1"
            sx={{
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              fontSize: {
                xs: "48px",
                sm: "58px",
                md: "76px",
              },
              lineHeight: 0.9,
              letterSpacing: "-2px",
              mb: 3,
            }}
          >
            Spaces designed
            <br />
            around the way you
            <br />
            live.
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              maxWidth: "490px",
              fontSize: {
                xs: "11px",
                md: "13px",
              },
              lineHeight: 1.6,
              color: "rgba(255,255,255,.75)",
              mb: 3,
            }}
          >
            Thoughtful interior architecture and bespoke environments crafted
            with warmth, material honesty, and quiet luxury.
          </Typography>

          {/* Buttons */}
          <Stack direction="row" spacing={1}>
            <Button
              href="#contact"
              variant="contained"
              sx={{
                backgroundColor: "#e4002b",
                borderRadius: 0,
                fontSize: "8px",
                letterSpacing: "2px",
                px: 2.5,
                py: 1.3,
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#c90026",
                  boxShadow: "none",
                },
              }}
            >
              START A PROJECT
            </Button>

            <Button
              href="#portfolio"
              sx={{
                color: "#fff",
                border: "1px solid rgba(255,255,255,.55)",
                borderRadius: 0,
                fontSize: "8px",
                letterSpacing: "2px",
                px: 2.5,
                py: 1.3,
              }}
            >
              EXPLORE OUR WORK
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <Box
        id="contact"
        sx={{
          py: {
            xs: 9,
            md: 12,
          },
          px: {
            xs: 2.5,
            md: 8,
            lg: 15,
          },
          backgroundColor: "#f8f5ef",
        }}
      >
        {/* Heading */}
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              color: "#e4002b",
              fontSize: "8px",
              letterSpacing: "2.5px",
              mb: 1,
            }}
          >
            GET IN TOUCH
          </Typography>

          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: {
                xs: "27px",
                md: "34px",
              },
              fontWeight: 400,
            }}
          >
            LET&apos;S CREATE YOUR SPACE
          </Typography>

          <Typography
            sx={{
              fontSize: "11px",
              color: "#77736b",
              mt: 1,
            }}
          >
            Tell us a little about your project and how we can help.
          </Typography>
        </Box>

        {/* Form */}
        <Box
          component="form"
          sx={{
            maxWidth: "900px",
            mx: "auto",
            backgroundColor: "#f5f1eb",
            border: "1px solid #e5e0d7",
            p: {
              xs: 2,
              md: 3.5,
            },
          }}
        >
          <Grid container spacing={2}>

            {/* Name */}
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="YOUR NAME"
                placeholder="Full Name"
                variant="outlined"
                size="small"
                sx={inputStyle}
              />
            </Grid>

            {/* Phone */}
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="PHONE NUMBER"
                placeholder="+1 (555) 000-0000"
                variant="outlined"
                size="small"
                sx={inputStyle}
              />
            </Grid>

            {/* Email */}
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="EMAIL ADDRESS"
                placeholder="hello@example.com"
                variant="outlined"
                size="small"
                sx={inputStyle}
              />
            </Grid>

            {/* Project Type */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontSize: "7px",
                  letterSpacing: "1.5px",
                  mb: 0.7,
                }}
              >
                PROJECT TYPE
              </Typography>

              <FormControl fullWidth size="small">
                <Select
                  defaultValue="Residential Interior"
                  sx={{
                    backgroundColor: "#faf8f4",
                    fontSize: "9px",
                    borderRadius: 0,
                  }}
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

                  <MenuItem value="Hospitality">
                    Hospitality
                  </MenuItem>

                  <MenuItem value="Turnkey">
                    Turnkey Project
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Message */}
            <Grid size={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="MESSAGE"
                placeholder="Share the scope, location, and aspirations for your space..."
                sx={inputStyle}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#e4002b",
              borderRadius: 0,
              fontSize: "8px",
              letterSpacing: "2px",
              px: 2.8,
              py: 1.4,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#c90026",
                boxShadow: "none",
              },
            }}
          >
            START A PROJECT
          </Button>
        </Box>

        {/* Contact details */}
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          justifyContent="center"
          alignItems="center"
          spacing={{
            xs: 1.5,
            md: 4,
          }}
          sx={{
            mt: 3.5,
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
        </Stack>
      </Box>

      {/* =====================================================
          APPROACH
      ====================================================== */}

      <Box
        sx={{
          backgroundColor: "#faf8f3",
          py: {
            xs: 9,
            md: 13,
          },
          px: {
            xs: 2.5,
            md: 5,
          },
        }}
      >
        <Grid container spacing={6}>

          {/* Left Label */}
          <Grid size={{ xs: 12, md: 2 }}>
            <SectionLabel>
              OUR APPROACH
            </SectionLabel>
          </Grid>

          {/* Content */}
          <Grid size={{ xs: 12, md: 10, lg: 9 }}>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: "36px",
                  md: "52px",
                },
                lineHeight: 0.98,
                mb: {
                  xs: 5,
                  md: 7,
                },
              }}
            >
              Quiet architecture, tactile truth,
              <br className="desktopBreak" />
              and spaces shaped around human
              <br className="desktopBreak" />
              ritual.
            </Typography>

            <Grid container spacing={6}>

              {/* Text */}
              <Grid size={{ xs: 12, md: 6 }}>

                <Typography
                  sx={{
                    color: "#74716a",
                    fontSize: "11px",
                    lineHeight: 1.65,
                    mb: 2.5,
                  }}
                >
                  We approach every commission as an intimate dialogue between
                  the weave of the site&apos;s natural light, authentic
                  materials, and unhurried rhythms of daily living. We reject
                  fleeting ornamentation in favor of monolithic forms,
                  hand-applied lime plaster, and bespoke joinery that patinas
                  with grace.
                </Typography>

                <ApproachItem
                  number="01"
                  title="Spatial Intention"
                  text="Choreographing light, volume, and seamless movement to evoke an effortless sense of calm and visual pause."
                />

                <ApproachItem
                  number="02"
                  title="Material Honesty"
                  text="Honoring raw travertine, blackened timber, unlacquered brass, and tactile linens that mature with character over time."
                />

                <ApproachItem
                  number="03"
                  title="Bespoke Execution"
                  text="From foundational architectural interventions to custom millwork, curated lighting, and individual art curation."
                />

              </Grid>

              {/* Image */}
              <Grid size={{ xs: 12, md: 6 }}>

                <Box
                  sx={{
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={images.approach}
                    alt="Interior design"
                    sx={{
                      width: "100%",
                      aspectRatio: "1.35 / 1",
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    sx={{
                      height: "35px",
                      backgroundColor: "#f1eee8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: 1.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "6px",
                        letterSpacing: "1.5px",
                        color: "#77736b",
                      }}
                    >
                      MATERIAL HARMONY &amp; REFINED DISCIPLINE — ATELIER
                      KHLOROW
                    </Typography>

                    <Box
                      sx={{
                        width: 4,
                        height: 4,
                        backgroundColor: "#e4002b",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                </Box>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <Box
        sx={{
          backgroundColor: "#eeeae2",
          py: {
            xs: 9,
            md: 11,
          },
          px: {
            xs: 2.5,
            md: 5,
          },
        }}
      >

        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              md: "flex-end",
            },
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: 3,
            mb: 5,
          }}
        >
          <Box>

            <SectionLabel>
              OUR SERVICES
            </SectionLabel>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: "28px",
                  md: "34px",
                },
                lineHeight: 1,
                mt: 1.2,
              }}
            >
              From conceptual spatial planning to
              <br className="desktopBreak" />
              bespoke styling and turnkey delivery.
            </Typography>

          </Box>

          <TextLink>
            EXPLORE ALL →
          </TextLink>

        </Box>

        {/* Service Cards */}
        <Grid container spacing={2}>

          {services.map((service, index) => (
            <Grid
              key={service.number}
              size={{
                xs: 12,
                md: index < 3 ? 4 : 6,
              }}
            >
              <Box
                sx={{
                  minHeight: 140,
                  backgroundColor: "#faf8f3",
                  p: 2.2,
                }}
              >

                <Typography
                  sx={{
                    color: "#e4002b",
                    fontSize: "7px",
                    letterSpacing: "1px",
                  }}
                >
                  {service.number}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Georgia, serif",
                    fontSize: "15px",
                    mt: 1.8,
                    mb: 0.7,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#74716a",
                    fontSize: "9px",
                    lineHeight: 1.55,
                  }}
                >
                  {service.description}
                </Typography>

              </Box>
            </Grid>
          ))}

        </Grid>
      </Box>

      {/* =====================================================
          PORTFOLIO
      ====================================================== */}

      <Box
        id="portfolio"
        sx={{
          backgroundColor: "#faf8f3",
          py: {
            xs: 9,
            md: 11,
          },
          px: {
            xs: 2.5,
            md: 5,
          },
        }}
      >

        {/* Portfolio Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: 3,
            mb: 4,
          }}
        >

          <Box>

            <SectionLabel>
              OUR PORTFOLIO
            </SectionLabel>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: "30px",
                  md: "37px",
                },
                lineHeight: 0.95,
                mt: 1.2,
              }}
            >
              A selection of spaces designed
              <br />
              by Khlorow.
            </Typography>

          </Box>

          <TextLink>
            VIEW ALL PROJECTS →
          </TextLink>

        </Box>

        {/* Masonry-style portfolio */}
        <Grid container spacing={2}>

          {/* Column 1 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>

              <ProjectCard
                project={projects[0]}
                height={{
                  xs: 330,
                  md: 250,
                }}
              />

              <ProjectCard
                project={projects[1]}
                height={{
                  xs: 330,
                  md: 300,
                }}
              />

            </Stack>
          </Grid>

          {/* Column 2 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>

              <ProjectCard
                project={projects[2]}
                height={{
                  xs: 300,
                  md: 190,
                }}
              />

              <ProjectCard
                project={projects[3]}
                height={{
                  xs: 330,
                  md: 270,
                }}
              />

              <ProjectCard
                project={projects[4]}
                height={{
                  xs: 300,
                  md: 170,
                }}
              />

            </Stack>
          </Grid>

          {/* Column 3 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>

              <ProjectCard
                project={projects[5]}
                height={{
                  xs: 350,
                  md: 290,
                }}
              />

              <ProjectCard
                project={projects[6]}
                height={{
                  xs: 300,
                  md: 190,
                }}
              />

            </Stack>
          </Grid>

        </Grid>
      </Box>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <Box
        sx={{
          backgroundColor: "#faf8f3",
          py: {
            xs: 9,
            md: 13,
          },
          px: {
            xs: 2.5,
            md: 5,
          },
        }}
      >

        <Grid container spacing={6}>

          <Grid size={{ xs: 12, md: 2 }}>
            <SectionLabel>
              ABOUT KHLOROW
            </SectionLabel>

            <Box
              sx={{
                width: 20,
                height: "1px",
                backgroundColor: "#e4002b",
                mt: 1,
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: "38px",
                  md: "55px",
                },
                lineHeight: 0.97,
                mb: 3.5,
              }}
            >
              We shape interiors that feel deeply
              <br className="desktopBreak" />
              personal, calm, and enduring.
            </Typography>

            <Typography sx={aboutText}>
              At Khlorow, we believe that an interior should never impose; it
              should adapt intuitively to daily rituals and elevate human
              connection. Through meticulous balance between volume, light,
              and natural materials, our work explores how spaces can nurture
              clarity and stillness.
            </Typography>

            <Typography sx={aboutText}>
              Every project is approached as a bespoke dialogue between
              architectural context and personal narrative. From monolithic
              stone formations to tactile linen drapery, we curate environments
              that feel effortless, grounded, and enduring.
            </Typography>

            <Box sx={{ mt: 3 }}>
              <TextLink>
                DISCOVER KHLOROW →
              </TextLink>
            </Box>

          </Grid>
        </Grid>
      </Box>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Box
        sx={{
          backgroundColor: "#171713",
          color: "rgba(255,255,255,.55)",
          px: 5,
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
            fontFamily: "Georgia, serif",
            fontSize: "20px",
            letterSpacing: "2px",
          }}
        >
          KHLOROW
        </Typography>

        <Typography sx={{ fontSize: "8px", letterSpacing: "1px" }}>
          © {new Date().getFullYear()} Khlorow. All rights reserved.
        </Typography>

        <Typography sx={{ fontSize: "8px", letterSpacing: "1px" }}>
          Interior Design / Architecture
        </Typography>

      </Box>
    </Box>
  );
}


/* ==========================================================
   COMPONENTS
========================================================== */

function SectionLabel({ children }) {
  return (
    <Typography
      sx={{
        color: "#e4002b",
        fontSize: "8px",
        letterSpacing: "2.5px",
        fontWeight: 500,
      }}
    >
      {children}
    </Typography>
  );
}


function TextLink({ children }) {
  return (
    <Typography
      component="a"
      href="#contact"
      sx={{
        color: "#e4002b",
        fontSize: "8px",
        letterSpacing: "2px",
        whiteSpace: "nowrap",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
          opacity: 0.65,
        },
      }}
    >
      {children}
    </Typography>
  );
}


function ContactDetail({ children }) {
  return (
    <Typography
      sx={{
        fontSize: "7px",
        letterSpacing: "1px",
        color: "#555149",
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
}


function ApproachItem({ number, title, text }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "28px 1fr",
        gap: 1,
        py: 1.5,
        borderTop: "1px solid #e6e1d9",
      }}
    >
      <Typography
        sx={{
          color: "#e4002b",
          fontSize: "8px",
        }}
      >
        {number}
      </Typography>

      <Box>
        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: "13px",
            mb: 0.5,
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
          {text}
        </Typography>
      </Box>
    </Box>
  );
}


function ProjectCard({ project, height }) {
  return (
    <Box
      sx={{
        position: "relative",
        height,
        overflow: "hidden",
        backgroundColor: "#ddd",
        cursor: "pointer",

        "&:hover img": {
          transform: "scale(1.04)",
        },
      }}
    >

      {/* DUMMY IMAGE */}
      <Box
        component="img"
        src={project.image}
        alt={project.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform .7s ease",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,.58), transparent 60%)",
        }}
      />

      {/* Project details */}
      <Box
        sx={{
          position: "absolute",
          left: 2,
          bottom: 2,
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: "14px",
            lineHeight: 1,
            mb: 0.7,
          }}
        >
          {project.title}
        </Typography>

        <Typography
          sx={{
            fontSize: "8px",
            letterSpacing: "1px",
          }}
        >
          {project.year}
        </Typography>
      </Box>

    </Box>
  );
}


/* ==========================================================
   MUI STYLES
========================================================== */

const inputStyle = {
  "& .MuiInputLabel-root": {
    fontSize: "7px",
    letterSpacing: "1.5px",
    color: "#36342f",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#36342f",
  },

  "& .MuiOutlinedInput-root": {
    backgroundColor: "#faf8f4",
    borderRadius: 0,
    fontSize: "9px",

    "& fieldset": {
      borderColor: "#e1ddd5",
    },

    "&:hover fieldset": {
      borderColor: "#c5c0b7",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#aaa59c",
    },
  },

  "& input::placeholder": {
    color: "#c5c1ba",
    opacity: 1,
  },

  "& textarea::placeholder": {
    color: "#c5c1ba",
    opacity: 1,
  },
};


const aboutText = {
  maxWidth: "780px",
  color: "#74716a",
  fontSize: "11px",
  lineHeight: 1.65,
  mb: 2,
};