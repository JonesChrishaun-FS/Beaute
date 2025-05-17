import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function BrandButton() {
  const leftIcon = {
    variant: "outline",
    color: "#fff1f0",
    bgColor: "transparent",
    border: "#fff1f0 solid",
  };
  return (
    <>
      <Button
        sx={leftIcon}
        rightIcon={<ArrowForwardIcon />}
        _hover={{
          bgColor: "#D3ADF7",
          color: "#722ed1",
          border: "#722ed1 solid",
        }}
        fontFamily="Sarabun, sans-serif"
        alt="button to go to Brand page "
        as={Link}
        to="/brands"
      >
        Brands
      </Button>
    </>
  );
}

export default BrandButton;
