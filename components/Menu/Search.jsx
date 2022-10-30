import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/system";
import ServiceModal from "./ServiceModal";
export default function ComboBox({ serviceData, entireData }) {
  const [selectedItem, setSelectedItem] = React.useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ServiceModal
        open={open}
        setOpen={setOpen}
        selectedItem={selectedItem}
        entireData={entireData}
      />
      <Stack direction="row" mb={2}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={serviceData}
          sx={{ width: "100%" }}
          inputValue={selectedItem}
          onInputChange={(event, newInputValue) => {
            setSelectedItem(newInputValue);
            console.log(newInputValue);
          }}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          sx={{ boxShadow: "none !important" }}
        >
          <SearchIcon />
        </Button>
      </Stack>
    </>
  );
}
