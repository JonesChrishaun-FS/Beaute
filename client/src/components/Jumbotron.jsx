import { Box, Text, Stack } from "@chakra-ui/react";
import Img from "../images/bg-img.jpeg";
import LookButton from "./buttons/LookButton";
import BrandButton from "./buttons/BrandButton";

function Jumbotron() {
  const boxStyles = {
    margin: "0",
    bgImage: Img,
    bgPosition: "center",
    bgSize: "cover",
    p: 4,
    w: "100%",
    h: "1280px",
    minHeight: "100%",
  };
  const backdrop = {
    backdropFilter: "auto",
    backdropBrightness: "75%",
    boxSize: "full",
  };
  const header = {
    fontFamily: "Sarabun, sans-serif",
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#fff1f0",

    mt: 200,
  };
  const p = {
    fontFamily: "Sarabun, sans-serif",
    fontSize: "1.25rem",
    color: "#fff1f0",
    textAlign: "center",
    pt: 10,
    pr: 52,
    pl: 52,
  };

  return (
    <>
      <Box
        sx={boxStyles}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          sx={backdrop}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text sx={header}>Find Your Makeup Favs!!!</Text>

          <Text sx={p}>
            Here we help provide a more accessible way for you to find all your
            favorite makeup brands and their products that you love. Here you
            can find all promotional codes and offers that they have to give to
            save you money!
          </Text>
          <Stack direction="row" spacing={4} justifyContent="center" p={10}>
            <LookButton />
            <BrandButton />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Jumbotron;
