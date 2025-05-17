import { Button, Hide } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron";

function InstaButton() {
  return (
    <>
      <Button
        colorScheme="insta"
        rightIcon={<FaInstagram />}
        borderRadius={50}
        _hover={{ bgColor: "#c41d7f" }}
        p={0}
        as={Link}
        to="/instagram"
        alt="Button to be directed to instagram login"
      ></Button>
      <Hide above="md">
        <Jumbotron />
      </Hide>
    </>
  );
}

export default InstaButton;
