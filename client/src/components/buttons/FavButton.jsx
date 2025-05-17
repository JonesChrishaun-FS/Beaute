import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

function FavButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`http://localhost:5001/api/v1/beaute`)
        .then((res) => res.json())
        .then((json) => {
          setFavorites(json.data);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <Button
        leftIcon={<FaHeart />}
        bg="none"
        borderRadius={50}
        p={0}
        color="#F9F0FF"
        ef={btnRef}
        onClick={onOpen}
        alt="Heart button to see all favorite items"
      ></Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#f9f0ff" color="#520339">
          <DrawerCloseButton alt="Close button foe closing favorite menu" />
          <DrawerHeader
            fontFamily="Sarabun, sans-serif"
            fontSize="1.25rem"
            fontWeight="bold"
          >
            Favorites
          </DrawerHeader>

          <DrawerBody>
            {favorites.map((product) => {
              console.log(product);
              return (
                <Card key={product.id} m={5}>
                  <CardBody display="flex" flexDirection="column">
                    <h4 id="searchHead">{product.name}</h4>
                    <h4 id="searchHead2">{product.brand}</h4>
                    <p id="searchPrice">${product.price}</p>
                  </CardBody>
                </Card>
              );
            })}
          </DrawerBody>

          <DrawerFooter>
            <Button
              bgColor="#c41d7f"
              color="#f9f0ff"
              fontFamily="Sarabun, sans-serif"
              fontWeight="medium"
              fontSize="1rem"
              _hover={{ bgColor: "#d3adf7" }}
              alt="Remove button to remove favorites"
            >
              Remove All
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default FavButton;
