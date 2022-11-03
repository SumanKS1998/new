import React, { useEffect } from "react";
import {
  Typography,
  Stack,
  Box,
  Button,
  Paper,
  CircularProgress,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
const Welcome = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/menu");
    }, [500]);
  }, []);
  return (
    <Container sx={{ height: "95vh" }}>
      <Box
        component="img"
        src="/images/bg.png"
        width="100%"
        borderRadius={3}
        mt={3}
      />
      <Stack gap={1} mt={4}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Hey! Welcome
        </Typography>
        <Typography textAlign="center" variant="body1" color="secondary.main">
          We take pride in saying that we do science-based styling, not
          product-based.
        </Typography>
        <CircularProgress sx={{ mx: "auto", mt: 5 }} />
      </Stack>
    </Container>
  );
};

export default Welcome;
