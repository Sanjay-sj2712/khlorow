"use client";

import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Chip,
  Divider,
  Stack,
  Card,
  CardMedia,
  CardContent,
  Avatar,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import InteriorDesignIcon from "@mui/icons-material/ChairAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import Link from "next/link";

const stats = [
  { value: "120+", label: "Projects Completed" },
  { value: "14", label: "Years of Excellence" },
  { value: "38", label: "Design Awards" },
  { value: "92%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: <InteriorDesignIcon sx={{ fontSize: 36 }} />,
    title: "Interior Design",
    desc: "Transforming spaces into living art — we curate every detail from material palettes to bespoke furnishings.",
    href: "/services#interior",
  },
  {
    icon: <ArchitectureIcon sx={{ fontSize: 36 }} />,
    title: "Architecture",
    desc: "Structures that harmonize form and function, crafted with precision and designed to last generations.",
    href: "/services#architecture",
  },
  {
    icon: <EmojiObjectsIcon sx={{ fontSize: 36 }} />,
    title: "Design Consultation",
    desc: "Expert guidance from concept to completion — we align creative vision with your lifestyle and goals.",
    href: "/services#consultation",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 36 }} />,
    title: "Project Management",
    desc: "End-to-end coordination with trusted contractors, ensuring flawless execution on time and on budget.",
    href: "/services#management",
  },
];

const featuredProjects = [
  {
    title: "Skyline Penthouse",
    category: "Residential",
    location: "New York, USA",
    img: "/images/project-residential.jpg",
  },
  {
    title: "Meridian HQ",
    category: "Commercial",
    location: "Los Angeles, USA",
    img: "/images/project-commercial.jpg",
  },
  {
    title: "Velour Boutique Hotel",
    category: "Hospitality",
    location: "Miami, USA",
    img: "/images/project-hospitality.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Khlorow didn't just design our home — they gave us a sanctuary. Every corner feels intentional, every material speaks to us. Truly extraordinary work.",
    name: "Amanda Reeves",
    role: "Residential Client, New York",
    avatar: "AR",
  },
  {
    quote:
      "Our new office is a statement. Clients walk in and immediately feel the elevated brand. Khlorow understood our vision better than we did.",
    name: "James Thornton",
    role: "CEO, Thornton Capital",
    avatar: "JT",
  },
  {
    quote:
      "From concept to completion, the process was seamless. Their attention to detail and dedication to quality are unmatched in the industry.",
    name: "Sofia Marchetti",
    role: "Hospitality Director, Velour Group",
    avatar: "SM",
  },
];

export default function HomePage() {
  const [visible, setVisible] = useState({});
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [entry.target.dataset.key]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (key) => (el) => {
    refs.current[key] = el;
    if (el) el.dataset.key = key;
  };

  const fadeIn = (key, delay = 0) => ({
    opacity: visible[key] ? 1 : 0,
    transform: visible[key] ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <Box>
      {/* ── HERO ── */}
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.7) 100%)",
            },
          }}
        />

        {/* Animated grain overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            opacity: 0.6,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, pt: { xs: 8, md: 0 } }}>
          <Box sx={{ maxWidth: { xs: "100%", md: "65%" } }}>
            <Chip
              label="Interior & Architecture"
              variant="outlined"
              color="primary"
              size="small"
              sx={{
                mb: 3,
                letterSpacing: "0.15em",
                fontSize: "0.7rem",
                textTransform: "uppercase",
                borderColor: "rgba(201,169,110,0.5)",
                animation: "fadeSlideDown 1s ease 0.2s both",
                "@keyframes fadeSlideDown": {
                  from: { opacity: 0, transform: "translateY(-20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", sm: "4rem", md: "5.5rem", lg: "7rem" },
                fontWeight: 200,
                lineHeight: 1.05,
                mb: 3,
                animation: "fadeSlideUp 1s ease 0.4s both",
                "@keyframes fadeSlideUp": {
                  from: { opacity: 0, transform: "translateY(40px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              Spaces That{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #c9a96e, #e8d5b0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Inspire
              </Box>
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 520,
                fontWeight: 300,
                lineHeight: 1.8,
                mb: 5,
                animation: "fadeSlideUp 1s ease 0.6s both",
              }}
            >
              We design environments where architecture meets artistry — creating
              timeless interiors and structures that reflect your vision and elevate
              everyday living.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                animation: "fadeSlideUp 1s ease 0.8s both",
              }}
            >
              <Button
                component={Link}
                href="/projects"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                id="hero-explore-projects"
              >
                Explore Projects
              </Button>
              <Button
                component={Link}
                href="/contact"
                variant="outlined"
                color="primary"
                size="large"
                id="hero-contact-us"
              >
                Start Your Project
              </Button>
            </Stack>
          </Box>
        </Container>

        {/* Scroll hint */}
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
              "50%": { transform: "translateX(-50%) translateY(8px)" },
            },
          }}
        >
          <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: "0.15em" }}>
            SCROLL
          </Typography>
          <ArrowDownwardIcon sx={{ color: "primary.main", fontSize: 18 }} />
        </Box>
      </Box>

      {/* ── STATS ── */}
      <Box sx={{ backgroundColor: "#0d0d0d", borderBottom: "1px solid rgba(201,169,110,0.08)" }}>
        <Container maxWidth="xl">
          <Grid container>
            {stats.map((stat, i) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <Box
                  ref={setRef(`stat-${i}`)}
                  sx={{
                    py: { xs: 4, md: 6 },
                    px: { xs: 2, md: 4 },
                    textAlign: "center",
                    borderRight: i < 3 ? "1px solid rgba(201,169,110,0.08)" : "none",
                    ...fadeIn(`stat-${i}`, i * 0.15),
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      fontWeight: 200,
                      background: "linear-gradient(90deg, #c9a96e, #e8d5b0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      mb: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.75rem" }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── SERVICES ── */}
      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="xl">
          <Box ref={setRef("services-heading")} sx={{ mb: 8, ...fadeIn("services-heading") }}>
            <Typography variant="overline" color="primary" sx={{ display: "block", mb: 1.5 }}>
              What We Do
            </Typography>
            <Grid container alignItems="flex-end">
              <Grid item xs={12} md={7}>
                <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, fontWeight: 200 }}>
                  Crafting Spaces with{" "}
                  <Box component="span" sx={{ color: "primary.main" }}>
                    Purpose
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={12} md={5} sx={{ mt: { xs: 2, md: 0 }, textAlign: { xs: "left", md: "right" } }}>
                <Button
                  component={Link}
                  href="/services"
                  variant="text"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                >
                  All Services
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={3}>
            {services.map((s, i) => (
              <Grid item xs={12} sm={6} lg={3} key={s.title}>
                <Box
                  ref={setRef(`service-${i}`)}
                  sx={{ height: "100%", ...fadeIn(`service-${i}`, i * 0.1) }}
                >
                  <Card
                    component={Link}
                    href={s.href}
                    sx={{
                      height: "100%",
                      p: 3.5,
                      display: "flex",
                      flexDirection: "column",
                      textDecoration: "none",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "linear-gradient(90deg, transparent, #c9a96e, transparent)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover::before": { opacity: 1 },
                    }}
                  >
                    <Box sx={{ color: "primary.main", mb: 2.5 }}>{s.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 500 }}>
                      {s.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, flexGrow: 1 }}>
                      {s.desc}
                    </Typography>
                    <Box
                      sx={{
                        mt: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "primary.main",
                        fontSize: "0.8rem",
                        letterSpacing: "0.08em",
                        fontWeight: 500,
                      }}
                    >
                      Learn More <ArrowForwardIcon sx={{ fontSize: 14 }} />
                    </Box>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── FEATURED PROJECTS ── */}
      <Box sx={{ py: { xs: 8, md: 14 }, backgroundColor: "#080808" }}>
        <Container maxWidth="xl">
          <Box ref={setRef("projects-heading")} sx={{ mb: 8, ...fadeIn("projects-heading") }}>
            <Typography variant="overline" color="primary" sx={{ display: "block", mb: 1.5 }}>
              Our Work
            </Typography>
            <Grid container alignItems="flex-end">
              <Grid item xs={12} md={7}>
                <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, fontWeight: 200 }}>
                  Featured{" "}
                  <Box component="span" sx={{ color: "primary.main" }}>
                    Projects
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={12} md={5} sx={{ mt: { xs: 2, md: 0 }, textAlign: { xs: "left", md: "right" } }}>
                <Button
                  component={Link}
                  href="/projects"
                  variant="text"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                >
                  View All Projects
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={3}>
            {featuredProjects.map((project, i) => (
              <Grid item xs={12} md={4} key={project.title}>
                <Box
                  ref={setRef(`project-${i}`)}
                  sx={{ ...fadeIn(`project-${i}`, i * 0.15) }}
                >
                  <Card
                    component={Link}
                    href="/projects"
                    sx={{ textDecoration: "none", overflow: "hidden" }}
                  >
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        image={project.img}
                        alt={project.title}
                        sx={{
                          height: 380,
                          objectFit: "cover",
                          transition: "transform 0.6s ease",
                          "& .MuiCard-root:hover &": { transform: "scale(1.05)" },
                        }}
                        className="project-img"
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)",
                        }}
                      />
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 16,
                          left: 16,
                          backgroundColor: "rgba(201,169,110,0.9)",
                          color: "#0a0a0a",
                          fontWeight: 600,
                          fontSize: "0.7rem",
                          letterSpacing: "0.08em",
                        }}
                      />
                    </Box>
                    <CardContent sx={{ pt: 2.5 }}>
                      <Typography variant="h6" sx={{ fontWeight: 400, mb: 0.5 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: "0.08em" }}>
                        {project.location}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── TESTIMONIALS ── */}
      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="xl">
          <Box ref={setRef("testimonials-heading")} sx={{ mb: 8, textAlign: "center", ...fadeIn("testimonials-heading") }}>
            <Typography variant="overline" color="primary" sx={{ display: "block", mb: 1.5 }}>
              Client Stories
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, fontWeight: 200 }}>
              What Our Clients Say
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((t, i) => (
              <Grid item xs={12} md={4} key={t.name}>
                <Box
                  ref={setRef(`testimonial-${i}`)}
                  sx={{ ...fadeIn(`testimonial-${i}`, i * 0.15) }}
                >
                  <Card sx={{ p: 4, height: "100%" }}>
                    <FormatQuoteIcon
                      sx={{
                        fontSize: 48,
                        color: "primary.main",
                        opacity: 0.4,
                        mb: 2,
                        display: "block",
                      }}
                    />
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.9, mb: 4, fontStyle: "italic" }}
                    >
                      "{t.quote}"
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar
                        sx={{
                          backgroundColor: "primary.main",
                          color: "#0a0a0a",
                          fontWeight: 700,
                          width: 44,
                          height: 44,
                        }}
                      >
                        {t.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {t.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CTA BANNER ── */}
      <Box
        ref={setRef("cta")}
        sx={{
          py: { xs: 8, md: 12 },
          background: "linear-gradient(135deg, #1a1205 0%, #0a0a0a 50%, #0d0d10 100%)",
          borderTop: "1px solid rgba(201,169,110,0.1)",
          borderBottom: "1px solid rgba(201,169,110,0.1)",
          textAlign: "center",
          ...fadeIn("cta"),
        }}
      >
        <Container maxWidth="md">
          <Typography variant="overline" color="primary" sx={{ display: "block", mb: 2 }}>
            Ready to Begin?
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", md: "3.5rem" }, fontWeight: 200, mb: 3 }}
          >
            Let's Create Something{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #c9a96e, #e8d5b0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Extraordinary
            </Box>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 5, lineHeight: 1.9, maxWidth: 560, mx: "auto" }}
          >
            Every great space begins with a conversation. Share your vision with us,
            and we'll craft a world-class design tailored to your life.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} justifyContent="center" spacing={2}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="primary"
              size="large"
              id="cta-get-started"
              endIcon={<ArrowForwardIcon />}
            >
              Get Started
            </Button>
            <Button
              component={Link}
              href="/projects"
              variant="outlined"
              color="primary"
              size="large"
              id="cta-view-portfolio"
            >
              View Portfolio
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
