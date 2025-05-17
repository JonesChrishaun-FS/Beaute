import { Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

function LookButton() {
  const rightIcon = {
    variant: "solid",
    bgColor: "#c41d7f",
    color: "#ffffff",
  };
  return (
    <>
      <Stack>
        <Button
          sx={rightIcon}
          rightIcon={<SearchIcon />}
          _hover={{ bgColor: "#D3ADF7", color: "#722ed1" }}
          fontFamily="Sarabun, sans-serif"
          alt="button to go to Discover page"
          as={Link}
          to="/discover"
        >
          Look Here
        </Button>
      </Stack>
    </>
  );
}

export default LookButton;
