"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const allProjects = [
  {
    title: "Skyline Penthouse",
    category: "Residential",
    location: "New York, USA",
    year: "2024",
    area: "4,200 sq ft",
    img: "/images/project-residential.jpg",
    desc: "A two-level penthouse reimagined as a serene urban sanctuary with panoramic city views and handcrafted material detailing.",
  },
  {
    title: "Meridian HQ",
    category: "Commercial",
    location: "Los Angeles, USA",
    year: "2023",
    area: "18,000 sq ft",
    img: "/images/project-commercial.jpg",
    desc: "A headquarters that embodies the brand's disruptive spirit — industrial bones wrapped in refined finishes and thoughtful workflow zones.",
  },
  {
    title: "Velour Boutique Hotel",
    category: "Hospitality",
    location: "Miami, USA",
    year: "2023",
    area: "32,000 sq ft",
    img: "/images/project-hospitality.jpg",
    desc: "40-room luxury boutique hotel with a lobby designed as a destination in itself — marble, brass, and curated art at every turn.",
  },
  {
    title: "The Arbor Residence",
    category: "Residential",
    location: "Los Angeles, USA",
    year: "2022",
    area: "6,800 sq ft",
    img: "/images/project-residential.jpg",
    desc: "A biophilic family home where architecture dissolves into nature — living walls, natural stone, and light-filled volumes.",
  },
  {
    title: "Studio Noire",
    category: "Commercial",
    location: "Chicago, USA",
    year: "2022",
    area: "5,400 sq ft",
    img: "/images/project-commercial.jpg",
    desc: "A creative agency studio defined by dramatic contrasts — raw concrete, matte black steel, and warm walnut accents.",
  },
  {
    title: "Casa Serena",
    category: "Residential",
    location: "Miami, USA",
    year: "2021",
    area: "3,900 sq ft",
    img: "/images/project-residential.jpg",
    desc: "Coastal minimalism at its finest — a home that opens completely to the ocean, blurring the line between inside and outside.",
  },
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState({});
  const refs = useRef({});

  const filtered =
    active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  useEffect(() => {
    setVisible({});
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting)
              setVisible((prev) => ({ ...prev, [e.target.dataset.key]: true }));
          });
        },
        { threshold: 0.05 }
      );
      Object.values(refs.current).forEach((el) => el && observer.observe(el));
      return () => observer.disconnect();
    }, 50);
    return () => clearTimeout(timeout);
  }, [active]);

  const setRef = (key) => (el) => {
    refs.current[key] = el;
    if (el) el.dataset.key = key;
  };

  return (
    <Box>
      {/* ── HERO ── */}
      <Box
        sx={{
          minHeight: { xs: "40vh", md: "50vh" },
          background: "linear-gradient(135deg, #0d0a05 0%, #0a0a0a 50%, #050510 100%)",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid rgba(201,169,110,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #c9a96e40, transparent)",
          }}
        />
        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
          <Typography variant="overline" color="primary" sx={{ display: "block", mb: 2 }}>
            Portfolio
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2.8rem", md: "5rem" }, fontWeight: 200, mb: 3 }}
          >
            Our{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Projects
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, lineHeight: 1.9 }}>
            A curated selection of residential, commercial, and hospitality projects
            — each one a testament to the power of thoughtful design.
          </Typography>
        </Container>
      </Box>

      {/* ── FILTER + GRID ── */}
      <Box sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="xl">
          {/* Filter Tabs */}
          <Box sx={{ mb: 8, display: "flex", justifyContent: "center" }}>
            <ToggleButtonGroup
              value={active}
              exclusive
              onChange={(_, val) => val && setActive(val)}
              sx={{
                gap: 1,
                flexWrap: "wrap",
                justifyContent: "center",
                "& .MuiToggleButton-root": {
                  border: "1px solid rgba(201,169,110,0.2)",
                  borderRadius: "2px !important",
                  color: "text.secondary",
                  px: 3,
                  py: 1,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    color: "primary.main",
                    backgroundColor: "rgba(201,169,110,0.06)",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "rgba(201,169,110,0.12)",
                    borderColor: "primary.main",
                    color: "primary.main",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "rgba(201,169,110,0.18)",
                    },
                  },
                },
              }}
            >
              {categories.map((cat) => (
                <ToggleButton key={cat} value={cat} id={`filter-${cat.toLowerCase()}`}>
                  {cat}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          {/* Project Grid */}
          <Grid container spacing={4}>
            {filtered.map((project, i) => (
              <Grid item xs={12} md={6} lg={4} key={`${project.title}-${active}`}>
                <Box
                  ref={setRef(`proj-${i}`)}
                  sx={{
                    opacity: visible[`proj-${i}`] ? 1 : 0,
                    transform: visible[`proj-${i}`] ? "translateY(0) scale(1)" : "translateY(30px) scale(0.98)",
                    transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                  }}
                >
                  <Card sx={{ height: "100%", overflow: "hidden" }}>
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        image={project.img}
                        alt={project.title}
                        sx={{
                          height: 300,
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                          "&:hover": { transform: "scale(1.04)" },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)",
                        }}
                      />
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 16,
                          left: 16,
                          backgroundColor: "rgba(201,169,110,0.92)",
                          color: "#0a0a0a",
                          fontWeight: 600,
                          fontSize: "0.68rem",
                          letterSpacing: "0.06em",
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 500, mb: 0.5 }}>
                        {project.title}
                      </Typography>
                      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                        <Typography variant="caption" color="text.secondary">
                          {project.location}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          ·
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {project.year}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          ·
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {project.area}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        {project.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          textAlign: "center",
          borderTop: "1px solid rgba(201,169,110,0.08)",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 200, mb: 3, fontSize: { xs: "2rem", md: "3rem" } }}>
            Have a Project in Mind?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5, lineHeight: 1.9 }}>
            We'd love to hear about your vision. Let's design something extraordinary together.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            color="primary"
            size="large"
            id="projects-cta-contact"
            endIcon={<ArrowForwardIcon />}
          >
            Start Your Project
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
