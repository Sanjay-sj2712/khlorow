"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
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
  return (
    <Box
      sx={{
        backgroundColor: "#f8f5ef",
        color: "#171713",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >

      {/* =====================================================
          01. ABOUT HERO
      ====================================================== */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: {
            xs: "75vh",
            sm: "80vh",
            md: "100vh",
          },
          minHeight: {
            xs: "550px",
            md: "650px",
          },
          overflow: "hidden",
        }}
      >

        {/* DUMMY HERO IMAGE */}

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
            objectPosition: "center",
          }}
        />

        {/* DARK OVERLAY */}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(15,15,10,.62) 0%, rgba(15,15,10,.28) 55%, rgba(15,15,10,.08) 100%)",
          }}
        />

        {/* HERO CONTENT */}

        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            left: {
              xs: "7%",
              md: "5.5%",
            },
            bottom: {
              xs: "9%",
              md: "11%",
            },
            width: {
              xs: "86%",
              sm: "75%",
              md: "650px",
            },
          }}
        >

          {/* LABEL */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: {
                xs: 2,
                md: 2.5,
              },
            }}
          >

            <Box
              sx={{
                width: 18,
                height: "1px",
                backgroundColor: "#e4002b",
                mr: 1.2,
              }}
            />

            <Typography
              sx={{
                color: "#fff",
                fontSize: "7px",
                letterSpacing: "2px",
              }}
            >
              ABOUT KHLOROW
            </Typography>

          </Box>


          {/* SMALL SUBTITLE */}

          <Typography
            sx={{
              color: "rgba(255,255,255,.65)",
              fontSize: "7px",
              letterSpacing: "1.2px",
              mb: 1.5,
            }}
          >
            MONOGRAPH / SPATIAL PHILOSOPHY
          </Typography>


          {/* HERO HEADING */}

          <Typography
            component="h1"
            sx={{
              color: "#fff",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize: {
                xs: "43px",
                sm: "55px",
                md: "72px",
              },
              lineHeight: {
                xs: 0.94,
                md: 0.92,
              },
              letterSpacing: {
                xs: "-1.5px",
                md: "-2.5px",
              },
              maxWidth: "650px",
            }}
          >
            We shape interiors that
            <br />
            feel deeply personal,
            <br />
            calm, and enduring.
          </Typography>


          {/* HERO DESCRIPTION */}

          <Typography
            sx={{
              color: "rgba(255,255,255,.65)",
              fontSize: {
                xs: "8px",
                md: "9px",
              },
              mt: 2,
              maxWidth: "420px",
              lineHeight: 1.5,
            }}
          >
            Crafted with quiet clarity, material honesty, and human-centered
            design.
          </Typography>

        </Box>
      </Box>


      {/* =====================================================
          02. PHILOSOPHY / INTRODUCTION
      ====================================================== */}

      <Box
        sx={{
          backgroundColor: "#faf8f3",
          py: {
            xs: 8,
            md: 11,
          },
          px: {
            xs: 2.5,
            sm: 4,
            md: 4.5,
          },
        }}
      >

        <Grid
          container
          spacing={{
            xs: 5,
            md: 7,
          }}
        >

          {/* LEFT LABEL */}

          <Grid
            size={{
              xs: 12,
              md: 3,
            }}
          >

            <Box
              sx={{
                position: {
                  md: "sticky",
                },
                top: 40,
              }}
            >

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1.3,
                }}
              >

                <Box
                  sx={{
                    width: 18,
                    height: "1px",
                    backgroundColor: "#e4002b",
                    mr: 1.2,
                  }}
                />

                <Typography
                  sx={{
                    color: "#27251f",
                    fontSize: "7px",
                    letterSpacing: "2px",
                  }}
                >
                  ABOUT KHLOROW
                </Typography>

              </Box>

              <Typography
                sx={{
                  color: "#89847b",
                  fontSize: "7px",
                  letterSpacing: "1.1px",
                }}
              >
                MONOGRAPH / SPATIAL PHILOSOPHY
              </Typography>

            </Box>

          </Grid>


          {/* RIGHT CONTENT */}

          <Grid
            size={{
              xs: 12,
              md: 9,
            }}
          >

            {/* MAIN HEADING */}

            <Typography
              sx={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize: {
                  xs: "37px",
                  sm: "45px",
                  md: "55px",
                },
                lineHeight: {
                  xs: 1,
                  md: 0.98,
                },
                letterSpacing: "-1px",
                maxWidth: "650px",
                mb: {
                  xs: 6,
                  md: 8,
                },
              }}
            >
              We shape interiors that feel
              <br className="desktopBreak" />
              deeply personal, calm, and
              <br className="desktopBreak" />
              enduring.
            </Typography>


            {/* DESCRIPTION */}

            <Box
              sx={{
                maxWidth: "720px",
                ml: {
                  xs: 0,
                  md: "auto",
                },
                mb: {
                  xs: 6,
                  md: 8,
                },
              }}
            >

              <Typography
                sx={{
                  color: "#77736b",
                  fontSize: "10px",
                  lineHeight: 1.65,
                  mb: 2.5,
                }}
              >
                At Khlorow, we believe that an interior should never impose;
                it should adapt intuitively to daily rituals and elevate human
                connection. Through meticulous balance between volume, light,
                and natural materials, our work explores how spaces can nurture
                clarity and stillness.
              </Typography>

              <Typography
                sx={{
                  color: "#77736b",
                  fontSize: "10px",
                  lineHeight: 1.65,
                }}
              >
                Every project is approached as a bespoke dialogue between
                architectural context and personal narrative. From monolithic
                stone formations to tactile linen drapery, we curate
                environments that feel effortless, grounded, and enduring.
              </Typography>

            </Box>


            {/* THREE PRINCIPLE CARDS */}

            <Grid
              container
              spacing={2}
            >

              <PrincipleCard
                number="01"
                category="DISCIPLINE"
                title="Spatial Clarity"
                description="Harmonizing volume, natural daylight, and circulation to create effortless living sanctuaries."
                footer="PROPORTION  •  LUMINANCE"
              />

              <PrincipleCard
                number="02"
                category="AUTHENTICITY"
                title="Material Integrity"
                description="Honoring authentic travertine, unlacquered brass, smoked timber, and lime plaster."
                footer="TACTILITY  •  PATINA"
              />

              <PrincipleCard
                number="03"
                category="CRAFTSMANSHIP"
                title="Bespoke Artistry"
                description="Collaborating with master artisans to produce one-of-a-kind custom millwork and finishes."
                footer="ATELIER  •  PRECISION"
              />

            </Grid>

          </Grid>

        </Grid>

      </Box>


      {/* =====================================================
          03. OUR APPROACH
      ====================================================== */}

      <Box
        sx={{
          backgroundColor: "#f8f5ef",
          py: {
            xs: 8,
            md: 11,
          },
          px: {
            xs: 2.5,
            sm: 4,
            md: 4.5,
          },
        }}
      >

        {/* SECTION LABEL */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1.8,
          }}
        >

          <Box
            sx={{
              width: 18,
              height: "1px",
              backgroundColor: "#e4002b",
              mr: 1.2,
            }}
          />

          <Typography
            sx={{
              color: "#e4002b",
              fontSize: "7px",
              letterSpacing: "2px",
            }}
          >
            OUR APPROACH
          </Typography>

        </Box>


        {/* HEADING */}

        <Typography
          sx={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
            fontSize: {
              xs: "37px",
              sm: "44px",
              md: "51px",
            },
            lineHeight: {
              xs: 1,
              md: 0.98,
            },
            letterSpacing: "-1px",
            maxWidth: "850px",
            mb: {
              xs: 5,
              md: 7,
            },
          }}
        >
          Quiet architecture, tactile truth, and
          <br className="desktopBreak" />
          spaces shaped around human ritual.
        </Typography>


        {/* TWO COLUMN APPROACH */}

        <Grid
          container
          spacing={{
            xs: 5,
            md: 7,
          }}
          alignItems="flex-start"
        >

          {/* LEFT */}

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >

            <Typography
              sx={{
                color: "#77736b",
                fontSize: "10px",
                lineHeight: 1.65,
                maxWidth: "500px",
                mb: 3.5,
              }}
            >
              We approach every commission as an intimate dialogue between
              the site&apos;s natural light, authentic materials, and the
              unhurried rhythms of daily living. We reject fleeting
              ornamentation in favor of monolithic forms, hand-applied lime
              plaster, and bespoke joinery that patinas with grace.
            </Typography>


            {/* APPROACH POINT 01 */}

            <ApproachPoint
              number="01"
              title="Spatial Intention"
              description="Choreographing light, volume, and seamless movement to evoke an effortless sense of calm and visual pause."
            />


            {/* APPROACH POINT 02 */}

            <ApproachPoint
              number="02"
              title="Material Honesty"
              description="Honoring raw travertine, blackened timber, unlacquered brass, and tactile linens that mature with character over time."
            />


            {/* APPROACH POINT 03 */}

            <ApproachPoint
              number="03"
              title="Bespoke Execution"
              description="From foundational architectural interventions to custom millwork, curated lighting, and individual art curation."
            />

          </Grid>


          {/* RIGHT IMAGE */}

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >

            <Box
              sx={{
                width: "100%",
                overflow: "hidden",
                borderRadius: "4px",
                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
              }}
            >

              {/* DUMMY IMAGE */}

              <Box
                component="img"
                src={images.approach}
                alt="Khlorow design approach"
                sx={{
                  display: "block",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                }}
              />

            </Box>

          </Grid>

        </Grid>

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
          borderTop: {
            xs: "2px solid #e4002b",
            md: "2px solid #e4002b",
          },
        }}
      >

        <Box
          sx={{
            backgroundColor: "#f0ede7",
            minHeight: {
              xs: "300px",
              md: "240px",
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

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1.5,
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
                  letterSpacing: "1.8px",
                  color: "#36342f",
                }}
              >
                PRIVATE SPATIAL COMMISSION
              </Typography>

            </Box>


            {/* CTA HEADING */}

            <Typography
              sx={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: {
                  xs: "31px",
                  sm: "37px",
                  md: "44px",
                },
                lineHeight: 1,
                mb: 2,
              }}
            >
              Have a space in mind?
            </Typography>


            {/* CTA DESCRIPTION */}

            <Typography
              sx={{
                color: "#77736b",
                fontSize: "10px",
                lineHeight: 1.6,
                maxWidth: "540px",
                mb: 2.5,
              }}
            >
              Every commission begins with an intimate dialogue between site,
              light, and personal ritual. Let us discuss your architectural
              aspirations and archival requirements.
            </Typography>


            {/* CTA BUTTONS */}

            <Stack
              direction="row"
              spacing={2}
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
                  fontSize: "8px",
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
                  fontSize: "8px",
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


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Box
        sx={{
          backgroundColor: "#171713",
          color: "rgba(255,255,255,.55)",
          px: {
            xs: 2.5,
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
            fontFamily: "Georgia, serif",
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
    <Grid
      size={{
        xs: 12,
        sm: 6,
        md: 4,
      }}
    >

      <Box
        sx={{
          position: "relative",
          minHeight: {
            xs: "185px",
            md: "175px",
          },
          backgroundColor: "#f3f0ea",
          p: {
            xs: 2.5,
            md: 3,
          },
          transition: "all .3s ease",

          "&:hover": {
            transform: "translateY(-3px)",
          },
        }}
      >

        {/* TOP */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >

          <Typography
            sx={{
              color: "#857f75",
              fontSize: "6px",
              letterSpacing: "1.8px",
            }}
          >
            {number} / {category}
          </Typography>

          <Typography
            sx={{
              color: "#d1cdc4",
              fontFamily: "Georgia, serif",
              fontSize: "14px",
            }}
          >
            {number}
          </Typography>

        </Box>


        {/* TITLE */}

        <Typography
          sx={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "14px",
            mb: 1.5,
          }}
        >
          {title}
        </Typography>


        {/* DESCRIPTION */}

        <Typography
          sx={{
            color: "#77736b",
            fontSize: "8.5px",
            lineHeight: 1.55,
            maxWidth: "250px",
          }}
        >
          {description}
        </Typography>


        {/* FOOTER */}

        <Typography
          sx={{
            position: "absolute",
            bottom: 18,
            left: {
              xs: 20,
              md: 24,
            },
            color: "#8b867e",
            fontSize: "6px",
            letterSpacing: "1.2px",
          }}
        >
          {footer}
        </Typography>

      </Box>

    </Grid>
  );
}


/* ==========================================================
   APPROACH POINT
========================================================== */

function ApproachPoint({
  number,
  title,
  description,
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#f2efe9",
        px: 2,
        py: 1.8,
        mb: 1.5,
        borderRadius: "4px",
      }}
    >

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 0.7,
        }}
      >

        <Typography
          sx={{
            color: "#e4002b",
            fontSize: "6px",
            letterSpacing: "1px",
            fontWeight: 500,
          }}
        >
          POINT {number}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: "12px",
          }}
        >
          {title}
        </Typography>

      </Box>

      <Typography
        sx={{
          color: "#77736b",
          fontSize: "8px",
          lineHeight: 1.55,
        }}
      >
        {description}
      </Typography>

    </Box>
  );
}