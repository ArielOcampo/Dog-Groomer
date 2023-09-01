import { Container, Typography, Link, Grid, Box } from "@mui/material";

import { Facebook, Instagram, Twitter } from "@mui/icons-material";

import "./Footer.less";

const Footer = () => {
  return (
    <Box
      className="footer-container"
      sx={{
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              ¿Quien soy?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Soy un peluquero canino con mas de 25 años de experiencia,
              especializado en raza pomerania.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contactame
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: torres.carlos12321@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              WhatsApp: 3513474101
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Redes Sociales
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://arielocampo.vercel.app/">
              Arioca
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
