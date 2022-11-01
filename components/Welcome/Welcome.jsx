import React from "react";
import { Typography, Stack, Box, Button, Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
const Welcome = () => {
  const router = useRouter();
  return (
    <Container sx={{ height: "95vh" }}>
      <Box component="img" src="/images/salon.png" width="100%" />
      <Stack gap={1}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Hey! Welcome
        </Typography>
        <Typography textAlign="center" variant="body1" color="secondary.main">
          We take pride in saying that we do science-based styling, not
          product-based.
        </Typography>
      </Stack>
      <Stack
        direction="row"
        gap={2}
        component={Paper}
        p={3}
        className="option-container"
      >
        <Box
          component="img"
          src="/images/whatsapp.png"
          sx={{ width: "60px", height: "60px" }}
        />
        <Stack>
          <Typography variant="body1">Catalogue via Whatsapp</Typography>
          <Button disabled={true} className="option-btn-wapp" endIcon={<ArrowForwardIosIcon />}>
            <a href="https://wa.me/c/918708509261">Continue</a>
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        gap={2}
        component={Paper}
        p={3}
        className="option-container"
      >
        <Box
          component="img"
          src="/images/web.png"
          sx={{ width: "60px", height: "60px" }}
        />
        <Stack>
          <Typography variant="body1">Catalogue via Web</Typography>
          <Button
            onClick={() => router.push("/menu")}
            className="option-btn"
            endIcon={<ArrowForwardIosIcon />}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Welcome;
