import { Link } from "react-router-dom";
import {
  Stack,
  Box,
  Divider,
  AbsoluteCenter,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Hide,
  HStack,
} from "@chakra-ui/react";
import InstaButton from "./buttons/InstaButton";

function Footer() {
  return (
    <>
      <Stack display="flex" flexDirection="column" w="100%">
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white">
            <Breadcrumb color="#F9F0FF" w="100%" separator="">
              <BreadcrumbItem>
                <BreadcrumbLink
                  as={Link}
                  to="/beaute"
                  fontSize="1.25rem"
                  textDecoration="none"
                  _hover={{ color: "#c41d7f" }}
                  pl={5}
                >
                  BEAUTe
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/brands">
                  Brands
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/discover">
                  Discover
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem pr={10}>
                <BreadcrumbLink as={Link} to="/promotionals">
                  Promotionals
                </BreadcrumbLink>
              </BreadcrumbItem>
              <Hide>
                <BreadcrumbItem pr={10}>
                  <BreadcrumbLink as={Link} to="/instagram">
                    Instagram
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Hide>
              <BreadcrumbItem>
                <HStack ml={100}>
                  <InstaButton />
                </HStack>
              </BreadcrumbItem>
            </Breadcrumb>
          </AbsoluteCenter>
        </Box>
      </Stack>
    </>
  );
}

export default Footer;
