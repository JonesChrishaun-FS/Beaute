import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Hide,
} from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchButton from "./search/SearchButton";
import FavButton from "./buttons/FavButton";
import InstaButton from "./buttons/InstaButton";

function Header() {
  return (
    <>
      <Breadcrumb
        separator=""
        spacing="8px"
        color="#F9F0FF"
        justifyContent="flex-end"
        w="100%"
      >
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to="/beaute"
            fontSize="2.75rem"
            textDecoration="none"
            pr={50}
            _hover={{ color: "#c41d7f" }}
          >
            BEAUTe
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem pr={5}>
          <BreadcrumbLink as={Link} to="/brands">
            Brands
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem pr={5}>
          <BreadcrumbLink as={Link} to="/discover">
            Discover
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem pr={15}>
          <BreadcrumbLink as={Link} to="/promotionals">
            Promotionals
          </BreadcrumbLink>
        </BreadcrumbItem>
        <Hide>
          <BreadcrumbItem pr={15}>
            <BreadcrumbLink as={Link} to="/instagram">
              Instagram
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Hide>
        <BreadcrumbItem>
          <HStack ml={300}>
            <SearchButton />
            <FavButton />
            <InstaButton />
          </HStack>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}

export default Header;
