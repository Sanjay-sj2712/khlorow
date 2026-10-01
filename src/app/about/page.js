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
   Replace these paths with your actual downloaded images
========================================================== */

const images = {
  hero: "/images/about-hero.jpg",
  approach: "/images/about-approach.jpg",
};


/* ==========================================================
   ABOUT PAGE
========================================================== */

export default function AboutPage() {
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

      {/* =====================================================
          01. ABOUT HERO
      ====================================================== */}

      {/* =====================================================
    ABOUT HERO
===================================================== */}

      <Box
        component="section"
        sx={{
          position: "relative",
          width: "100%",

          height: {
            xs: "560px",
            sm: "600px",
            md: "640px",
            lg: "690px",
          },

          overflow: "hidden",
          backgroundColor: "#24241f",
        }}
      >
        {/* ================= BACKGROUND IMAGE ================= */}

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
              sm: "center center",
              md: "center center",
            },

            transform: `scale(${1 + Math.min(scrollY * 0.0001, 0.02)})`,
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
          }}
        />

        {/* ================= DARK OVERLAY ================= */}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,

            background: `
        linear-gradient(
          90deg,
          rgba(20, 21, 16, 0.52) 0%,
          rgba(20, 21, 16, 0.30) 48%,
          rgba(20, 21, 16, 0.15) 100%
        ),
        linear-gradient(
          180deg,
          rgba(15, 16, 12, 0.04) 0%,
          rgba(15, 16, 12, 0.06) 58%,
          rgba(15, 16, 12, 0.38) 100%
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
              md: "5.5%",
            },

            /*
             * In the reference the content is vertically
             * centered slightly below the middle.
             */
            top: {
              xs: "50%",
              md: "51%",
            },

            transform: "translateY(-50%)",

            width: {
              xs: "calc(100% - 48px)",
              sm: "75%",
              md: "700px",
            },
          }}
        >
          {/* ================= LABEL ================= */}

          <AnimateOnScroll animation="fade-up" delay="0s">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                mb: {
                  xs: 2.2,
                  md: 2.5,
                },
              }}
            >
              {/* RED LINE */}

              <Box
                sx={{
                  width: {
                    xs: 18,
                    md: 22,
                  },

                  height: "1px",

                  backgroundColor: "#e3133d",

                  mr: {
                    xs: 1.2,
                    md: 1.4,
                  },

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

                  letterSpacing: {
                    xs: "1.6px",
                    md: "2px",
                  },

                  lineHeight: 1,

                  color: "rgba(255,255,255,0.88)",

                  textTransform: "uppercase",
                }}
              >
                ABOUT US
              </Typography>
            </Box>
          </AnimateOnScroll>

          {/* ================= HEADING ================= */}

          <AnimateOnScroll animation="fade-up" delay="0.1s">
            <Typography
              component="h1"
              sx={{
                m: 0,

                color: "#ffffff",

                fontFamily:
                  "var(--font-cormorant), 'Cormorant Garamond', Georgia, 'Times New Roman', serif",

                fontWeight: 500,

                fontSize: {
                  xs: "42px",
                  sm: "52px",
                  md: "70px",
                },

                lineHeight: {
                  xs: 1.02,
                  md: 0.98,
                },

                letterSpacing: {
                  xs: "-1.4px",
                  md: "-2px",
                },

                maxWidth: {
                  xs: "100%",
                  md: "700px",
                },
              }}
            >
              We shape interiors that
              <br />
              feel deeply personal,
              <br />
              calm, and enduring.
            </Typography>
          </AnimateOnScroll>

          {/* ================= DESCRIPTION ================= */}

          <AnimateOnScroll animation="fade-up" delay="0.22s">
            <Typography
              sx={{
                mt: {
                  xs: 2.3,
                  md: 2.5,
                },

                fontSize: {
                  xs: "9px",
                  sm: "10px",
                  md: "16px",
                },

                fontWeight: 300,

                lineHeight: 1.6,

                color: "rgba(255,255,255,0.68)",

                maxWidth: "520px",
              }}
            >
              Crafted with quiet luxury, material honesty, and human-centered design.
            </Typography>
          </AnimateOnScroll>
        </Box>
      </Box>


      {/* =====================================================
          02. PHILOSOPHY / INTRODUCTION
      ====================================================== */}

      {/* =====================================================
    ABOUT KHLOROW — PHILOSOPHY
===================================================== */}

      <Box
        component="section"
        sx={{
          backgroundColor: "#faf8f3",

          py: {
            xs: 8,
            md: 10,
            lg: 11,
          },

          px: {
            xs: 3,
            sm: 5,
            md: "5%",
          },
        }}
      >
        {/* =====================================================
      TOP CONTENT
  ===================================================== */}

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
          }}
        >
          {/* =================================================
        LEFT LABEL
    ================================================= */}

          <AnimateOnScroll animation="fade-up" delay="0s">
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  mb: 1.4,
                }}
              >
                {/* Red line */}
                <Box
                  sx={{
                    width: 20,
                    height: "1px",

                    backgroundColor: "#e3133d",

                    mr: 1.3,

                    flexShrink: 0,
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Arial, Helvetica, sans-serif",

                    fontSize: {
                      xs: "6px",
                      md: "14px",
                    },

                    fontWeight: 500,

                    letterSpacing: "1.8px",

                    lineHeight: 1,

                    color: "#37352f",

                    textTransform: "uppercase",
                  }}
                >
                  ABOUT US
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Arial, Helvetica, sans-serif",

                  fontSize: {
                    xs: "5.5px",
                    md: "8px",
                  },

                  fontWeight: 400,

                  letterSpacing: "1.15px",

                  lineHeight: 1.4,

                  color: "#99948b",

                  textTransform: "uppercase",
                }}
              >
                MONOGRAPH / SPATIAL PHILOSOPHY
              </Typography>
            </Box>
          </AnimateOnScroll>

          {/* =================================================
        RIGHT CONTENT
    ================================================= */}

          <Box>
            {/* HEADING */}

            <AnimateOnScroll animation="fade-up" delay="0s">
              <Typography
                component="h2"
                sx={{
                  m: 0,

                  fontFamily:
                    "var(--font-cormorant), 'Cormorant Garamond', Georgia, 'Times New Roman', serif",

                  fontWeight: 400,

                  fontSize: {
                    xs: "38px",
                    sm: "44px",
                    md: "50px",
                    lg: "52px",
                  },

                  lineHeight: {
                    xs: 1.03,
                    md: 1.02,
                  },

                  letterSpacing: {
                    xs: "-1px",
                    md: "-1.4px",
                  },

                  color: "#292922",

                  maxWidth: "690px",

                  mb: {
                    xs: 5,
                    md: 8,
                  },
                }}
              >
                We shape interiors that feel
                <br />
                deeply personal, calm, and
                <br />
                enduring.
              </Typography>
            </AnimateOnScroll>

            {/* DESCRIPTION */}

            <AnimateOnScroll animation="fade-up" delay="0.15s">
              <Box
                sx={{
                  maxWidth: "690px",

                  mb: {
                    xs: 6,
                    md: 8,
                  },
                }}
              >
                <Typography
                  sx={{

                    color: "#716e67",

                    fontSize: {
                      xs: "10px",
                      md: "16px",
                    },

                    fontWeight: 300,

                    lineHeight: 1.65,

                    mb: 2.3,
                  }}
                >
                  At Khlorow, we believe that an interior should never impose; it
                  should adapt intuitively to daily rituals and elevate human
                  connection. Through meticulous balance between volume, light, and
                  natural materials, our work explores how spaces can nurture clarity
                  and stillness.
                </Typography>

                <Typography
                  sx={{

                    color: "#716e67",

                    fontSize: {
                      xs: "10px",
                      md: "16px",
                    },

                    fontWeight: 300,

                    lineHeight: 1.65,
                  }}
                >
                  Every project is approached as a bespoke dialogue between
                  architectural context and personal narrative. From monolithic stone
                  formations to tactile linen drapery, we curate environments that feel
                  effortless, grounded, and enduring.
                </Typography>
              </Box>
            </AnimateOnScroll>
          </Box>
        </Box>

        {/* =====================================================
      PRINCIPLE CARDS
      Separate from top grid so cards span full width
  ===================================================== */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },

            gap: {
              xs: 2,
              md: 2.5,
            },

            mt: {
              xs: 0,
              md: 1,
            },
          }}
        >
          <AnimateOnScroll animation="fade-up" delay="0s">
            <PrincipleCard
              number="01"
              category="DISCIPLINE"
              title="Spatial Clarity"
              description="Harmonizing volume, natural daylight, and circulation to create effortless living sanctuaries."
              footer="PROPORTION  •  LUMINANCE"
            />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay="0.12s">
            <PrincipleCard
              number="02"
              category="AUTHENTICITY"
              title="Material Integrity"
              description="Honoring authentic travertine, unlacquered brass, smoked timber, and lime plaster."
              footer="TACTILITY  •  PATINA"
            />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay="0.22s">
            <PrincipleCard
              number="03"
              category="CRAFTSMANSHIP"
              title="Bespoke Artistry"
              description="Collaborating with master artisans to produce one-of-a-kind custom millwork and finishes."
              footer="ATELIER  •  PRECISION"
            />
          </AnimateOnScroll>
        </Box>
      </Box>


      {/* =====================================================
          03. OUR APPROACH
      ====================================================== */}

      <Box
        component="section"
        sx={{
          backgroundColor: "#f8f5ef",

          py: {
            xs: 8,
            md: 10,
            lg: 11,
          },

          px: {
            xs: 3,
            sm: 5,
            md: "5%",
          },
        }}
      >
        {/* ================= SECTION LABEL ================= */}

        <AnimateOnScroll animation="fade-up" delay="0s">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",

              mb: {
                xs: 2,
                md: 2.2,
              },
            }}
          >
            <Box
              sx={{
                width: 20,
                height: "1px",
                backgroundColor: "#e3133d",
                mr: 1.3,
                flexShrink: 0,
              }}
            />

            <Typography
              sx={{
                fontFamily: "Arial, Helvetica, sans-serif",

                color: "#e3133d",

                fontSize: {
                  xs: "6px",
                  md: "14px",
                },

                fontWeight: 500,
                letterSpacing: "1.8px",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              OUR APPROACH
            </Typography>
          </Box>
        </AnimateOnScroll>

        {/* ================= MAIN HEADING ================= */}

        <AnimateOnScroll animation="fade-up" delay="0.08s">
          <Typography
            component="h2"
            sx={{
              m: 0,

              fontFamily:
                "var(--font-cormorant), 'Cormorant Garamond', Georgia, 'Times New Roman', serif",

              fontWeight: 400,

              fontSize: {
                xs: "38px",
                sm: "45px",
                md: "49px",
                lg: "52px",
              },

              lineHeight: {
                xs: 1.04,
                md: 1.02,
              },

              letterSpacing: {
                xs: "-1px",
                md: "-1.4px",
              },

              color: "#292922",

              maxWidth: {
                xs: "100%",
                md: "900px",
              },

              mb: {
                xs: 5,
                md: 7,
              },
            }}
          >
            Quiet architecture, tactile truth, and
            <br />
            spaces shaped around human ritual.
          </Typography>
        </AnimateOnScroll>

        {/* =====================================================
      CONTENT
  ===================================================== */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "0.95fr 1.05fr",
            },

            columnGap: {
              md: 5,
              lg: 6,
            },

            rowGap: {
              xs: 5,
            },

            alignItems: "start",
          }}
        >
          {/* =================================================
        LEFT
    ================================================= */}

          <Box>
            {/* DESCRIPTION */}

            <AnimateOnScroll animation="fade-left" delay="0s">
              <Typography
                sx={{

                  color: "#716e67",

                  fontSize: {
                    xs: "10px",
                    md: "16px",
                  },

                  fontWeight: 300,

                  lineHeight: 1.7,

                  maxWidth: "540px",

                  mb: {
                    xs: 4,
                    md: 4.5,
                  },
                }}
              >
                We approach every commission as an intimate dialogue between the
                site&apos;s natural light, authentic materials, and the unhurried
                rhythms of daily living. We reject fleeting ornamentation in favor of
                monolithic forms, hand-applied lime plaster, and bespoke joinery that
                patinas with grace.
              </Typography>
            </AnimateOnScroll>

            {/* POINTS */}

            <Stack
              spacing={{
                xs: 1.5,
                md: 2,
              }}
            >
              <AnimateOnScroll animation="fade-up" delay="0.08s">
                <ApproachPoint
                  number="01"
                  title="Spatial Intention"
                  description="Choreographing light, volume, and seamless movement to evoke an effortless sense of calm and visual pause."
                />
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay="0.18s">
                <ApproachPoint
                  number="02"
                  title="Material Honesty"
                  description="Honoring raw travertine, blackened timber, unlacquered brass, and tactile linens that mature with character over time."
                />
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay="0.28s">
                <ApproachPoint
                  number="03"
                  title="Bespoke Execution"
                  description="From foundational architectural interventions to custom millwork, curated lighting, and individual art curation."
                />
              </AnimateOnScroll>
            </Stack>
          </Box>

          {/* =================================================
        RIGHT IMAGE
    ================================================= */}

          <AnimateOnScroll animation="fade-right" delay="0.1s">
            <Box
              sx={{
                width: "100%",

                overflow: "hidden",

                borderRadius: "5px",

                boxShadow: "0 6px 18px rgba(35,30,20,0.10)",
              }}
            >
              <Box
                component="img"
                src={images.approach}
                alt="Khlorow design approach"
                sx={{
                  display: "block",

                  width: "100%",

                  height: {
                    xs: "430px",
                    sm: "520px",
                    md: "535px",
                    lg: "550px",
                  },

                  objectFit: "cover",

                  objectPosition: "center center",
                }}
              />
            </Box>
          </AnimateOnScroll>
        </Box>
      </Box>

      {/* =====================================================
          04. CALL TO ACTION
      ====================================================== */}

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
   PRINCIPLE CARD
========================================================== */
function PrincipleCard({
  number,
  category,
  title,
  description,
  footer,
}) {
  return (
    <Box
      sx={{
        position: "relative",

        minHeight: {
          xs: 230,
          md: 245,
        },

        backgroundColor: "#f5f2ed",

        px: {
          xs: 3,
          md: 3.5,
          lg: 4,
        },

        py: {
          xs: 3.5,
          md: 4,
        },
      }}
    >
      {/* ===============================================
          TOP ROW
      =============================================== */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          mb: {
            xs: 3,
            md: 3.5,
          },
        }}
      >
        {/* CATEGORY */}

        <Typography
          sx={{
            fontFamily: "Arial, Helvetica, sans-serif",

            fontSize: "12px",

            fontWeight: 500,

            letterSpacing: "1.5px",

            color: "#8f5d52",

            textTransform: "uppercase",
          }}
        >
          {number} / {category}
        </Typography>

        {/* LARGE FADED NUMBER */}

        <Typography
          sx={{
            fontFamily:
              "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",

            fontSize: "24px",

            fontWeight: 400,

            lineHeight: 1,

            color: "#d7d2ca",
          }}
        >
          {number}
        </Typography>
      </Box>

      {/* ===============================================
          TITLE
      =============================================== */}

      <Typography
        sx={{
          fontFamily:
            "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",

          fontSize: {
            xs: "19px",
            md: "24px",
          },

          fontWeight: 400,

          lineHeight: 1.15,

          color: "#34332d",

          mb: 2,
        }}
      >
        {title}
      </Typography>

      {/* ===============================================
          DESCRIPTION
      =============================================== */}

      <Typography
        sx={{

          fontSize: {
            xs: "10px",
            md: "14px",
          },

          fontWeight: 300,

          lineHeight: 1.7,

          color: "#65625c",

          maxWidth: "250px",

          mb: 6,
        }}
      >
        {description}
      </Typography>

      {/* ===============================================
          FOOTER
      =============================================== */}

      <Typography
        sx={{
          position: {
            md: "absolute",
          },

          left: {
            md: 28,
            lg: 32,
          },

          bottom: {
            md: 30,
          },

          fontSize: "10px",

          fontWeight: 400,

          letterSpacing: "1.1px",

          color: "#9c978e",

          textTransform: "uppercase",
        }}
      >
        {footer}
      </Typography>
    </Box>
  );
}

/* ==========================================================
   APPROACH POINT
========================================================== */

function ApproachPoint({ number, title, description }) {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f0eb",

        px: {
          xs: 2.5,
          md: 3,
        },

        py: {
          xs: 2.5,
          md: 2.7,
        },

        minHeight: {
          md: 105,
        },

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        borderRadius: "4px",
      }}
    >
      {/* NUMBER + TITLE */}

      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",

          gap: {
            xs: 1.2,
            md: 1.4,
          },

          mb: 1.2,
        }}
      >
        <Typography
          component="span"
          sx={{

            color: "#e3133d",

            fontSize: {
              xs: "6px",
              md: "10px",
            },

            fontWeight: 600,

            letterSpacing: "1.1px",

            whiteSpace: "nowrap",

            textTransform: "uppercase",
          }}
        >
          POINT {number}
        </Typography>

        <Typography
          component="h3"
          sx={{
            m: 0,

            fontFamily:
              "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",

            color: "#38362f",

            fontSize: {
              xs: "16px",
              md: "20px",
            },

            fontWeight: 400,

            lineHeight: 1.1,
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* DESCRIPTION */}

      <Typography
        sx={{

          color: "#67645e",

          fontSize: {
            xs: "9px",
            md: "14px",
          },

          fontWeight: 300,

          lineHeight: 1.65,

          maxWidth: "95%",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

