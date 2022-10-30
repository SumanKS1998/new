import { Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import BasicModal from "./Modal";
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BasicModal open={open} setOpen={setOpen} />
      <Container sx={{ my: 2 }}>
        <Stack direction="row" sx={{ mb: 2 }}>
          <TextField
            label="Search"
            fullWidth
            InputProps={{
              sx: {
                borderRadius: "2em 0 0 2em",
              },
            }}
          />
          <Button variant="contained" className="search-btn">
            <SearchIcon />
          </Button>
        </Stack>
        <Typography variant="h5" fontWeight="medium">
          Title
        </Typography>
        <Box
          sx={{ width: "300px", display: "block" }}
          component="img"
          src="/images/salon.png"
        />
        <Typography fontWeight="medium" my={2}>
          Sub-Title
        </Typography>
        <Stack
          className="menu-card"
          direction="row"
          justifyContent="space-between"
          component={Paper}
          p={2}
          alignItems="flex-end"
        >
          <Stack>
            <Typography variant="body2">Menu Item</Typography>
            <Typography variant="h6">₹98</Typography>
          </Stack>
          <Button className="add-btn" onClick={() => setOpen(true)}>
            View
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Menu;
