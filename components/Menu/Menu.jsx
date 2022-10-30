import {
  Button,
  Dialog,
  Divider,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import BasicModal from "./Modal";
import { collection, onSnapshot } from "firebase/firestore";
import { DB } from "../../config/firebase_config";
import Search from "./Search";
import Lottie from "lottie-react";
import animation from "../../public/images/loading.json";
const Menu = () => {
  const [open, setOpen] = useState(false);
  const [serviceData, setServiceData] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(DB, "Categories"), (snapshot) => {
      setServiceData(snapshot.docs.map((item) => item.data()));
    });
    setLoading(false);
    return () => unsub();
  }, []);
  const handleModal = () => {
    setOpen(true);
  };

  return (
    <>
      <BasicModal open={open} setOpen={setOpen} selectedItem={selectedItem} />
      {loading ? (
        <Dialog open={true}>
          <Box sx={{width:'100px'}}>
            <Lottie animationData={animation} loop={true} />
          </Box>
        </Dialog>
      ) : (
        <Container sx={{ my: 2 }}>
          <Search
            serviceData={serviceData.map((item) => item.service)}
            entireData={serviceData}
          />
          {serviceData.length > 0 &&
            serviceData.map((item) => {
              return (
                <Stack key={item.service} gap={2}>
                  <Typography variant="h5" fontWeight="bold">
                    {item.service}
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
                    src={item.categoryImage}
                  />
                  {item?.servicesArray?.map((serviceItem) => {
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
                          <Button
                            className="add-btn"
                            onClick={() => {
                              setSelectedItem(serviceItem);
                              handleModal();
                            }}
                          >
                            View
                          </Button>
                        </Stack>
                      </>
                    );
                  })}

                  <Divider sx={{ my: 2 }} />
                </Stack>
              );
            })}
        </Container>
      )}
    </>
  );
};

export default Menu;
