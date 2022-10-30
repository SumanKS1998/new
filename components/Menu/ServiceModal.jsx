import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/system";
import { Paper } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 5,
  height: "400px",
  overflow: "auto",
};

export default function ServiceModal({
  open,
  setOpen,
  selectedItem,
  entireData,
}) {
  const handleClose = () => setOpen(false);
  const [dataFound, setDataFound] = React.useState([]);
  React.useEffect(() => {
    setDataFound(entireData.filter((item) => item.service === selectedItem)[0]);
  }, [selectedItem]);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {dataFound ? (
            <Stack gap={2}>
              <Typography variant="h5" fontWeight="bold">
                {dataFound.service}
              </Typography>
              <Box
                sx={{
                  height: "250px",
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                  borderRadius: 5,
                }}
                component="img"
                src={dataFound.categoryImage}
              />
              {dataFound?.servicesArray?.map((serviceItem) => {
                return (
                  <>
                    <Stack
                      className="menu-card"
                      direction="row"
                      justifyContent="space-between"
                      component={Paper}
                      p={2}
                      alignItems="flex-end"
                    >
                      <Stack>
                        <Typography variant="body2">
                          {serviceItem.service}
                        </Typography>
                        <Typography variant="h6">
                          ₹{serviceItem.price}
                        </Typography>
                      </Stack>
                    
                    </Stack>
                  </>
                );
              })}
            </Stack>
          ) : (
            <Box component="img" src="/images/not-found.png" sx={{width:"150px",display:"block",mx:"auto"}}/>
          )}

          <Button
            className="add-btn"
            sx={{ mx: "auto !important", display: "block",mt:2 }}
            onClick={handleClose}
          >
            Okay
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
