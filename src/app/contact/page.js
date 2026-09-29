"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
  Stack,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contactInfo = [
  {
    icon: <EmailIcon />,
    label: "Email",
    value: "hello@khlorow.com",
    href: "mailto:hello@khlorow.com",
  },
  {
    icon: <PhoneIcon />,
    label: "Phone",
    value: "+1 (555) 987-6543",
    href: "tel:+15559876543",
  },
  {
    icon: <LocationOnIcon />,
    label: "Studio",
    value: "123 Design Ave, New York, NY 10001",
    href: "#",
  },
  {
    icon: <ScheduleIcon />,
    label: "Hours",
    value: "Mon – Fri, 9am – 6pm EST",
    href: null,
  },
];

const services = [
  "Interior Design",
  "Architecture",
  "Design Consultation",
  "Renovation & Refurbishment",
  "Other",
];

const budgets = [
  "Under $100K",
  "$100K – $250K",
  "$250K – $500K",
  "$500K – $1M",
  "$1M+",
  "Not Sure Yet",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setOpen(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 1200);
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
            Let's Connect
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2.8rem", md: "5rem" }, fontWeight: 200, mb: 3 }}
          >
            Start a{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Conversation
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, lineHeight: 1.9 }}>
            Every great project begins with a great conversation. Tell us about your
            vision and we'll be in touch within 24 hours.
          </Typography>
        </Container>
      </Box>

      {/* ── CONTENT ── */}
      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={8}>
            {/* Left — Contact Info */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 300, mb: 1, fontSize: { xs: "1.8rem", md: "2.2rem" } }}
              >
                Get In Touch
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, mb: 5 }}>
                Our studio is open to enquiries from new clients. Whether you have a
                detailed brief or just an idea, we'd love to hear from you.
              </Typography>

              <Stack spacing={3.5}>
                {contactInfo.map((info) => (
                  <Box key={info.label} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: "1px solid rgba(201,169,110,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "primary.main",
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.3, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        {info.label}
                      </Typography>
                      {info.href ? (
                        <Typography
                          component="a"
                          href={info.href}
                          variant="body2"
                          sx={{
                            color: "text.primary",
                            textDecoration: "none",
                            transition: "color 0.2s",
                            "&:hover": { color: "primary.main" },
                          }}
                        >
                          {info.value}
                        </Typography>
                      ) : (
                        <Typography variant="body2">{info.value}</Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Stack>

              <Divider sx={{ my: 5 }} />

              <Typography variant="overline" color="primary" sx={{ display: "block", mb: 2, fontSize: "0.7rem" }}>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={1.5}>
                {[
                  { icon: <InstagramIcon />, href: "#", label: "Instagram" },
                  { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
                ].map((s) => (
                  <Box
                    key={s.label}
                    component="a"
                    href={s.href}
                    aria-label={s.label}
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      border: "1px solid rgba(201,169,110,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "text.secondary",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                        borderColor: "primary.main",
                        backgroundColor: "rgba(201,169,110,0.08)",
                      },
                    }}
                  >
                    {s.icon}
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Right — Form */}
            <Grid item xs={12} md={8}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3, md: 5 },
                  border: "1px solid rgba(201,169,110,0.1)",
                  borderRadius: 1,
                  backgroundColor: "#0d0d0d",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 400, mb: 4 }}>
                  Project Enquiry
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      id="contact-first-name"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      id="contact-last-name"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      id="contact-phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="service-label">Service of Interest</InputLabel>
                      <Select
                        labelId="service-label"
                        id="contact-service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        label="Service of Interest"
                      >
                        {services.map((s) => (
                          <MenuItem key={s} value={s}>
                            {s}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="budget-label">Approximate Budget</InputLabel>
                      <Select
                        labelId="budget-label"
                        id="contact-budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        label="Approximate Budget"
                      >
                        {budgets.map((b) => (
                          <MenuItem key={b} value={b}>
                            {b}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Tell us about your project"
                      name="message"
                      id="contact-message"
                      value={form.message}
                      onChange={handleChange}
                      multiline
                      rows={5}
                      required
                      placeholder="Describe your project, timeline, location, and any other details that would help us understand your vision..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      id="contact-submit"
                      disabled={submitting}
                      endIcon={<SendIcon />}
                      sx={{ minWidth: 200 }}
                    >
                      {submitting ? "Sending..." : "Send Enquiry"}
                    </Button>
                    <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 2 }}>
                      We respond to all enquiries within 1 business day.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
          sx={{ backgroundColor: "primary.dark", color: "white" }}
        >
          Thank you! We'll be in touch within 24 hours.
        </Alert>
      </Snackbar>
    </Box>
  );
}
