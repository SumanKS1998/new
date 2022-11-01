import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { DB } from "../../config/firebase_config";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
export default function Gallery() {
  const [categoryData, setCategoryData] = React.useState([]);
  const router = useRouter();
  const { gallery } = router.query;
  React.useEffect(() => {
    const unsub = onSnapshot(collection(DB, "Categories"), (snapshot) => {
      let arr = [];
      snapshot.docs.filter((item) => {
        if (item.id === gallery) {
          arr.push(item.data());
        }
      });
      console.log(arr);
      setCategoryData(arr);
    });
    return () => unsub();
  }, []);

  return (
    <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
      <Typography variant="h6">
        Images for {gallery?.replaceAll("_", " ")}
      </Typography>
      <ImageList variant="masonry" cols={2} gap={8}>
        {categoryData.length > 0 &&
          categoryData[0].galleryImages.map((item) => (
            <ImageListItem key={item.url}>
              <img
                src={`${item.url}?w=248&fit=crop&auto=format`}
                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  );
}
