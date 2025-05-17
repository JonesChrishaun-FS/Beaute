import { FaSearch } from "react-icons/fa";
import {
  Button,
  Stack,
  Input,
  SimpleGrid,
  Card,
  Image,
  Collapse,
  CardBody,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../../App.css";

function Search() {
  //To pull api url info
  const [brands, setBrands] = useState("");
  const [brandNames, setBrandNames] = useState([]);
  //To collaspe some of the info for description
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  useEffect(() => {
    if (brands !== "") {
      fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brands}`
      )
        .then((res) => res.json())
        .then((json) => {
          const brandNames = json.filter((product) => product);
          //console.log(brandNames);
          setBrandNames(brandNames);
        });
    }
  }, [brands, brandNames]);

  const addFavorite = (prod) => {
    console.log(prod);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify content type if sending JSON data
      },
      body: JSON.stringify(prod), // Convert JavaScript object to JSON string
    };
    fetch(`http://localhost:5001/api/v1/beaute`, requestOptions)
      .then((res) => res.json())
      .then((json) => {
        setBrandNames(json);
      });
  };

  const handleChange = (value) => {
    setBrands(value);
  };

  const leftIcon = {
    bgColor: "#c41d7f",
    color: "#f9f0ff",
    borderRadius: "none",
    p: 0,
  };
  //Styling cards for products
  const brandCard = {
    m: 6,
    p: 25,
    color: "#520339",
    bgColor: "#fff",
    fontFamily: "Sarabun, sans-serif",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };
  const button = {
    fontFamily: "Sarabun, sans-serif",
    bgColor: "transparent",
    color: "#520339",
  };
  const favButton = {
    bgColor: "transparent",
    p: 0,
    color: "#520339",
  };

  return (
    <>
      <Stack margin={10} display="flex" flexDirection="row">
        <Input
          variant="flushed"
          placeholder="Search here for brands..."
          borderBottom="1px solid #c41d7f"
          fontFamily="Sarabun, sans-serif"
          color="#520339"
          value={brands}
          onChange={(e) => handleChange(e.target.value)}
        />

        <Button leftIcon={<FaSearch />} sx={leftIcon} id="btnDisc"></Button>
      </Stack>
      <SimpleGrid templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        {brandNames.map((product) => (
          <Card
            sx={brandCard}
            key={product.id}
            _hover={{ boxShadow: "6px 6px 65px  #c41d7f" }}
          >
            <Button
              onClick={() => addFavorite(product)}
              leftIcon={<FaHeart />}
              alt="Heart button to add favorite items"
              sx={favButton}
              _hover={{ bgColor: "transparent", color: "#c41d7f" }}
            ></Button>
            <Image src={product.api_featured_image} w="65%" />
            <CardBody display="flex" flexDirection="column">
              <h4 id="searchHead">{product.name}</h4>
              <h4 id="searchHead2">{product.brand}</h4>
              <p id="searchPrice">${product.price}</p>
              <a href={product.product_link} target="_blank" id="searchBTN">
                Buy
              </a>
            </CardBody>
            <Collapse startingHeight={6} in={show}>
              <p>{product.description}</p>
            </Collapse>
            <Button
              size="sm"
              onClick={handleToggle}
              mt="1rem"
              sx={button}
              _hover={{ bgColor: "transparent", textColor: " #c41d7f" }}
            >
              Show {show ? "Less" : "More"}
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Search;
