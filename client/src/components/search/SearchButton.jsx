import { Input, Button, Box, Slide, useDisclosure } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

function SearchButton() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<Search2Icon />}
        bg="none"
        borderRadius={50}
        p={0}
        color="#F9F0FF"
        onClick={onToggle}
      ></Button>
      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
        <Box rounded="md" shadow="md">
          <Input
            variant="filled"
            placeholder="Search here for products or brands..."
            bgColor="#ffffff"
            fontFamily="Sarabun, sans-serif"
            color="#f9f0ff"
            outline="transparent"
          />
        </Box>
      </Slide>
    </>
  );
}

export default SearchButton;
