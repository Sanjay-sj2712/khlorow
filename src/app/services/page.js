"use client";

import { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Divider,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import HandymanIcon from "@mui/icons-material/Handyman";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";

const services = [
  {
    id: "interior",
    icon: <ChairAltIcon sx={{ fontSize: 48 }} />,
    title: "Interior Design",
    tagline: "Spaces that speak to the soul",
    desc: "Our interior design practice is rooted in the belief that every detail matters. From initial concept boards to final styling, we craft environments that are both deeply personal and visually extraordinary. We work with the finest artisans and suppliers to source materials that define spaces for decades.",
    features: [
      "Full space planning and layout optimization",
      "Bespoke material and finish selection",
      "Custom furniture and lighting design",
      "Art curation and styling",
      "FF&E procurement",
      "Final staging and photography",
    ],
    img: "/images/project-residential.jpg",
  },
  {
    id: "architecture",
    icon: <ArchitectureIcon sx={{ fontSize: 48 }} />,
    title: "Architecture",
    tagline: "Structures that endure and inspire",
    desc: "Khlorow's architectural practice spans residential, commercial, and hospitality typologies. We believe the most powerful architecture emerges from a deep understanding of site, client, and context — structures that feel inevitable and timeless the moment they're complete.",
    features: [
      "Site analysis and feasibility studies",
      "Conceptual and schematic design",
      "Design development and documentation",
      "Planning and building permit coordination",
      "Construction administration",
      "Post-occupancy evaluation",
    ],
    img: "/images/project-commercial.jpg",
  },
  {
    id: "consultation",
    icon: <EmojiObjectsIcon sx={{ fontSize: 48 }} />,
    title: "Design Consultation",
    tagline: "Expert guidance, no agenda",
    desc: "Sometimes you need clarity, not a full design engagement. Our consultation sessions offer direct access to our senior designers and architects — whether you're navigating a renovation, evaluating a property, or developing a creative brief. We help you see clearly and act decisively.",
    features: [
      "One-on-one with senior designers",
      "Space and layout review",
      "Material and color direction",
      "Supplier and contractor referrals",
      "Budget and timeline guidance",
      "Follow-up documentation",
    ],
    img: "/images/project-hospitality.jpg",
  },
  {
    id: "renovation",
    icon: <HandymanIcon sx={{ fontSize: 48 }} />,
    title: "Renovation & Refurbishment",
    tagline: "Transforming the existing into the exceptional",
    desc: "Renovations are where we love to solve problems. We approach every existing space as a puzzle — uncovering its potential, resolving its constraints, and transforming it into something extraordinary. From single rooms to full building transformations, our renovation practice brings the same design rigor as new construction.",
    features: [
      "Existing conditions assessment",
      "Design-led renovation strategy",
      "Structural and MEP coordination",
      "Contractor procurement and oversight",
      "Phased delivery planning",
      "Minimal-disruption scheduling",
    ],
    img: "/images/project-residential.jpg",
  },
];

const faqs = [
  {
    q: "How long does a typical interior design project take?",
    a: "Project timelines vary based on scope. A single room typically takes 8–12 weeks from concept to completion. Full-home projects range from 6 to 18 months. We provide detailed schedules at the outset of every engagement.",
  },
  {
    q: "What is your design process?",
    a: "We begin with a discovery session to understand your vision, lifestyle, and goals. From there we develop concept presentations, refine through collaborative feedback, and move into design development, procurement, and finally installation.",
  },
  {
    q: "Do you work with clients outside the USA?",
    a: "Yes. Khlorow has completed projects in Europe and the Americas. We are experienced in managing international procurement, logistics, and contractor coordination across borders.",
  },
  {
    q: "What is your minimum project budget?",
    a: "Our interior design engagements typically begin at $150,000 in construction and furnishing budget. Architectural projects are evaluated case by case. We're happy to discuss your project in a no-obligation consultation.",
  },
  {
    q: "Can I hire Khlorow just for a consultation?",
    a: "Absolutely. Our consultation service is available as a standalone offering. Many clients begin with a consultation and expand into a full design engagement — but there's no obligation to do so.",
  },
];

export default function ServicesPage() {
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
      { threshold: 0.08 }
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
            What We Offer
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2.8rem", md: "5rem" }, fontWeight: 200, mb: 3 }}
          >
            Our{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Services
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540, lineHeight: 1.9 }}>
            From architectural vision to interior finishing, we offer a comprehensive
            suite of design services delivered with uncompromising quality.
          </Typography>
        </Container>
      </Box>

      {/* ── SERVICE SECTIONS ── */}
      {services.map((s, i) => (
        <Box
          key={s.id}
          id={s.id}
          sx={{
            py: { xs: 8, md: 14 },
            backgroundColor: i % 2 === 1 ? "#080808" : "#0a0a0a",
            borderBottom: "1px solid rgba(201,169,110,0.05)",
          }}
        >
          <Container maxWidth="xl">
            <Grid
              container
              spacing={8}
              alignItems="center"
              direction={i % 2 === 1 ? "row-reverse" : "row"}
            >
              {/* Image */}
              <Grid item xs={12} md={5}>
                <Box
                  ref={setRef(`service-img-${i}`)}
                  sx={{ ...fadeIn(`service-img-${i}`) }}
                >
                  <Box
                    sx={{
                      backgroundImage: `url('${s.img}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: { xs: 260, md: 480 },
                      borderRadius: 1,
                      position: "relative",
                      overflow: "hidden",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, rgba(201,169,110,0.06), transparent)",
                      },
                    }}
                  />
                </Box>
              </Grid>

              {/* Content */}
              <Grid item xs={12} md={7}>
                <Box
                  ref={setRef(`service-content-${i}`)}
                  sx={{ ...fadeIn(`service-content-${i}`, 0.2) }}
                >
                  <Box sx={{ color: "primary.main", mb: 2.5 }}>{s.icon}</Box>
                  <Typography
                    variant="overline"
                    color="primary"
                    sx={{ display: "block", mb: 1, fontSize: "0.7rem" }}
                  >
                    {s.tagline}
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 200, mb: 3 }}
                  >
                    {s.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9, mb: 4 }}>
                    {s.desc}
                  </Typography>

                  <Grid container spacing={1.5} sx={{ mb: 4 }}>
                    {s.features.map((f) => (
                      <Grid item xs={12} sm={6} key={f}>
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                          <CheckIcon
                            sx={{ fontSize: 16, color: "primary.main", mt: 0.3, flexShrink: 0 }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {f}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    id={`service-${s.id}-cta`}
                  >
                    Enquire About This Service
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}

      {/* ── FAQ ── */}
      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box ref={setRef("faq-heading")} sx={{ mb: 8, textAlign: "center", ...fadeIn("faq-heading") }}>
            <Typography variant="overline" color="primary" sx={{ display: "block", mb: 1.5 }}>
              FAQ
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, fontWeight: 200 }}>
              Common{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Questions
              </Box>
            </Typography>
          </Box>

          <Box
            ref={setRef("faq-list")}
            sx={{ ...fadeIn("faq-list", 0.2) }}
          >
            {faqs.map((faq, i) => (
              <Accordion
                key={i}
                disableGutters
                elevation={0}
                sx={{
                  backgroundColor: "transparent",
                  borderBottom: "1px solid rgba(201,169,110,0.1)",
                  "&:before": { display: "none" },
                  "&.Mui-expanded": { margin: 0 },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
                  sx={{
                    py: 2,
                    "& .MuiAccordionSummary-content": { my: 1 },
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pb: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9 }}>
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          textAlign: "center",
          borderTop: "1px solid rgba(201,169,110,0.08)",
          background: "linear-gradient(135deg, #1a1205 0%, #0a0a0a 50%, #0d0d10 100%)",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 200, mb: 3, fontSize: { xs: "2rem", md: "3rem" } }}>
            Ready to Begin Your Project?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5, lineHeight: 1.9 }}>
            Whether you need full design services or a focused consultation, we're here
            to help bring your vision to life.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} justifyContent="center" spacing={2}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="primary"
              size="large"
              id="services-cta-contact"
              endIcon={<ArrowForwardIcon />}
            >
              Contact Us
            </Button>
            <Button
              component={Link}
              href="/projects"
              variant="outlined"
              color="primary"
              size="large"
              id="services-cta-portfolio"
            >
              View Portfolio
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
