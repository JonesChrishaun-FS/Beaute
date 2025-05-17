import { Box, Heading, Stack } from "@chakra-ui/react";
import Search from "../components/search/Search";
import "../App.css";

function Discover() {
  const choices = {
    border: "2px solid #c41d7f",
    p: 5,
    m: 8,
    lineHeight: 2,
    spacing: 5,
    display: "flex",
    flexDirection: "column",
    flexWrap: "warp",
    fontFamily: "Sarabun, sans-serif",
    color: "#c41d7f",
    borderRadius: 20,
  };
  return (
    <>
      <Stack bgColor="#fff0f6" minH="100vh">
        <Box sx={choices}>
          <Heading pr={4}>Choice of Brands:</Heading>
          almay - alva - anna sui - annabelle - benefit - boosh - burt`s bees -
          butter london - c`est moi - cargo cosmetics - china glaze - clinique -
          coastal classic creation - colourpop - covergirl - dalish - deciem -
          dior - dr. hauschka - e.l.f. - essie - fenty - glossier - green people
          - iman - l`oreal - lotus cosmetics usa - maia`s mineral galaxy -
          marcelle - marienatie - maybelline - milani - mineral fusion - misa -
          mistura - moov - nudus - nyx - orly - pacifica - penny lane organics -
          physicians formula - piggy paint - pure anada - rejuva minerals -
          revlon - sally b`s skin yummies - salon perfect - sante - sinful
          colours - smashbox - stila - suncoat - w3llpeople - wet n wild - zorah
          - zorah biocosmetiques
        </Box>
        <Search />
      </Stack>
    </>
  );
}

export default Discover;
