"use client";

import { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Divider,
  Avatar,
  Card,
  CardContent,
  Stack,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const values = [
  {
    title: "Timeless Design",
    desc: "We avoid trends in favor of enduring aesthetics — spaces that feel relevant and refined decades after completion.",
  },
  {
    title: "Meticulous Craft",
    desc: "Every material, proportion, and detail is considered and reconsidered until it earns its place in the design.",
  },
  {
    title: "Client-Centered",
    desc: "Your lifestyle, values, and aspirations shape every decision. We listen deeply before we ever sketch a line.",
  },
  {
    title: "Sustainable Vision",
    desc: "We design responsibly — choosing materials and methods that respect the planet without compromising on luxury.",
  },
];

const team = [
  {
    name: "Elena Voss",
    role: "Principal Architect & Founder",
    initials: "EV",
    bio: "With 18 years in high-end residential and commercial design, Elena founded Khlorow on the belief that architecture should move the soul.",
  },
  {
    name: "Marcus Delli",
    role: "Head of Interior Design",
    initials: "MD",
    bio: "A graduate of the École des Arts Décoratifs, Marcus brings a European sensibility and an obsessive attention to texture and palette.",
  },
  {
    name: "Priya Anand",
    role: "Senior Project Architect",
    initials: "PA",
    bio: "Priya specializes in complex structural challenges, turning constraints into design opportunities that define each project.",
  },
  {
    name: "Leo Fontaine",
    role: "Creative Director",
    initials: "LF",
    bio: "Leo directs the visual identity of every project, ensuring that Khlorow's signature aesthetic resonates from concept to final reveal.",
  },
];

const milestones = [
  { year: "2010", event: "Khlorow Founded in New York" },
  { year: "2013", event: "First International Project — Milan" },
  { year: "2016", event: "Won AIA Interior Architecture Award" },
  { year: "2019", event: "Expanded to Commercial & Hospitality" },
  { year: "2022", event: "100th Project Milestone" },
  { year: "2024", event: "Launched Sustainability Initiative" },
];

export default function AboutPage() {
  const [visible, setVisible] = useState({});
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            setVisible((prev) => ({ ...prev, [e.target.dataset.key]: true }));
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
    transform: visible[key] ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <Box>
      {/* ── HERO ── */}
      <Box
        sx={{
          minHeight: { xs: "50vh", md: "60vh" },
          background:
            "linear-gradient(135deg, #0d0a05 0%, #0a0a0a 50%, #050510 100%)",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid rgba(201,169,110,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold accent line */}
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
          <Typography
            variant="overline"
            color="primary"
            sx={{ display: "block", mb: 2 }}
          >
            Our Story
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.8rem", md: "5rem" },
              fontWeight: 200,
              maxWidth: 700,
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Design as a{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Philosophy
            </Box>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 560, lineHeight: 1.9 }}
          >
            Khlorow was born from a singular conviction — that the spaces we inhabit
            shape who we become. Since 2010, we've pursued that belief through every
            project we take on.
          </Typography>
        </Container>
      </Box>

      {/* ── STORY ── */}
      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                ref={setRef("story-img")}
                sx={{
                  position: "relative",
                  ...fadeIn("story-img"),
                }}
              >
                <Box
                  sx={{
                    backgroundImage: "url('/images/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: { xs: 280, md: 520 },
                    borderRadius: 1,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -24,
                    right: -24,
                    width: 180,
                    height: 180,
                    border: "1px solid rgba(201,169,110,0.3)",
                    borderRadius: 1,
                    zIndex: -1,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box ref={setRef("story-text")} sx={{ ...fadeIn("story-text", 0.2) }}>
                <Typography
                  variant="overline"
                  color="primary"
                  sx={{ display: "block", mb: 2 }}
                >
                  Founded 2010
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 200, mb: 3 }}
                >
                  Where Architecture Meets Artistry
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.9, mb: 3 }}
                >
                  Elena Voss founded Khlorow after a decade working with some of the
                  world's most prestigious firms, determined to build something different
                  — a practice that refuses to separate beauty from function.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.9, mb: 4 }}
                >
                  Today, our team of architects, interior designers, and project managers
                  operates across the Americas and Europe, delivering environments that
                  transcend expectation. We don't simply design spaces — we craft
                  experiences that endure.
                </Typography>
                <Button
                  component={Link}
                  href="/projects"
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  id="about-view-projects"
                >
                  See Our Work
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── VALUES ── */}
      <Box sx={{ py: { xs: 8, md: 14 }, backgroundColor: "#080808" }}>
        <Container maxWidth="xl">
          <Box ref={setRef("values-heading")} sx={{ mb: 8, ...fadeIn("values-heading") }}>
            <Typography variant="overline" color="primary" sx={{ display: "block", mb: 1.5 }}>
              What Drives Us
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, fontWeight: 200 }}>
              Our Core{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Values
              </Box>
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((v, i) => (
              <Grid item xs={12} sm={6} key={v.title}>
                <Box
                  ref={setRef(`value-${i}`)}
                  sx={{ ...fadeIn(`value-${i}`, i * 0.1) }}
                >
                  <Box
                    sx={{
                      p: 4,
                      border: "1px solid rgba(201,169,110,0.08)",
                      borderRadius: 1,
                      height: "100%",
                      transition: "border-color 0.3s ease",
                      "&:hover": { borderColor: "rgba(201,169,110,0.3)" },
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 2,
                        backgroundColor: "primary.main",
                        mb: 3,
                      }}
                    />
                    <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
                      {v.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9 }}>
                      {v.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── TIMELINE ── */}
      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="xl">
          <Box ref={setRef("timeline-heading")} sx={{ mb: 8, ...fadeIn("timeline-heading") }}>
            <Typography variant="overline" color="primary" sx={{ display: "block", mb: 1.5 }}>
              Our Journey
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, fontWeight: 200 }}>
              Milestones &{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Achievements
              </Box>
            </Typography>
          </Box>

          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                left: { xs: 20, md: "50%" },
                top: 0,
                bottom: 0,
                width: "1px",
                backgroundColor: "rgba(201,169,110,0.15)",
                transform: { md: "translateX(-50%)" },
              }}
            />
            {milestones.map((m, i) => (
              <Box
                key={m.year}
                ref={setRef(`milestone-${i}`)}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: i % 2 === 0 ? "row" : "row-reverse" },
                  mb: 5,
                  ...fadeIn(`milestone-${i}`, i * 0.1),
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    pr: { xs: 0, md: i % 2 === 0 ? 6 : 0 },
                    pl: { xs: 6, md: i % 2 === 1 ? 6 : 0 },
                    textAlign: { xs: "left", md: i % 2 === 0 ? "right" : "left" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h4" sx={{ color: "primary.main", fontWeight: 200, mb: 0.5 }}>
                    {m.year}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {m.event}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: { xs: "absolute", md: "relative" },
                    left: { xs: 14, md: "auto" },
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "primary.main",
                    border: "2px solid #0a0a0a",
                    outline: "1px solid rgba(201,169,110,0.4)",
                    zIndex: 1,
                    mt: { xs: 0.5, md: 0 },
                    alignSelf: "center",
                    flexShrink: 0,
                  }}
                />
                <Box sx={{ flex: 1 }} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── TEAM ── */}
      <Box id="team" sx={{ py: { xs: 8, md: 14 }, backgroundColor: "#080808" }}>
        <Container maxWidth="xl">
          <Box ref={setRef("team-heading")} sx={{ mb: 8, ...fadeIn("team-heading") }}>
            <Typography variant="overline" color="primary" sx={{ display: "block", mb: 1.5 }}>
              The People Behind the Work
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, fontWeight: 200 }}>
              Meet the{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Team
              </Box>
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {team.map((member, i) => (
              <Grid item xs={12} sm={6} lg={3} key={member.name}>
                <Box
                  ref={setRef(`team-${i}`)}
                  sx={{ ...fadeIn(`team-${i}`, i * 0.1) }}
                >
                  <Card sx={{ p: 3.5, height: "100%", textAlign: "center" }}>
                    <Avatar
                      sx={{
                        width: 72,
                        height: 72,
                        mx: "auto",
                        mb: 2.5,
                        background: "linear-gradient(135deg, #c9a96e, #a07840)",
                        color: "#0a0a0a",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                      }}
                    >
                      {member.initials}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 500, mb: 0.5 }}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="primary.main"
                      sx={{ display: "block", mb: 2, letterSpacing: "0.05em" }}
                    >
                      {member.role}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {member.bio}
                    </Typography>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{ fontWeight: 200, mb: 3, fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Ready to Work with Us?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5, lineHeight: 1.9 }}>
            Whether you have a detailed brief or just a feeling, we'd love to talk.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            color="primary"
            size="large"
            id="about-cta-contact"
            endIcon={<ArrowForwardIcon />}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
