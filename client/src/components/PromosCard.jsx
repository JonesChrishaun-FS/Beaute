import {
  Stack,
  Button,
  Card,
  Heading,
  CardBody,
  CardFooter,
  Divider,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function PromosCard() {
  const promos = {
    bgColor: "#fff1f0",
  };
  const promoHead = {
    color: "#520339",
    fontFamily: "Josefin Sans, sans-serif",
  };
  const para1 = {
    color: "#520339",
    fontFamily: "Sarabun, sans-serif",
  };
  const para2 = {
    color: "#520339",
    fontFamily: "Sarabun, sans-serif",
    fontSize: "1rem",
  };
  const promoBTN = {
    w: "100%",
    color: "#520339",
    border: "transparent",
    fontFamily: "Sarabun, sans-serif",
    fontSize: "1rem",
  };
  return (
    <>
      <Stack background="linear-gradient(180deg, #d0e, #91f)" h="100%">
        <Heading sx={promoHead} m={10} color="#fff1f0">
          Today`s Offers
        </Heading>
        <SimpleGrid
          spacing={5}
          m={10}
          templateColumns="repeat(auto-fill, minmax(500px, 1fr 1fr))"
        >
          <Card sx={promos}>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading sx={promoHead}>FREE SHIPPING WITH ORDERS $35+</Heading>
                <Text sx={para1}>
                  Receive free shipping on orders $35+. Shipping discount is
                  reflected at checkout.
                </Text>
                <Text sx={para2}>
                  *Only available in US. Beaute offers a CAD $5 flat shipping
                  rate in Canada on orders CAD $35 and above. Beaute offers
                  $9.95 flat rate shipping for orders $50 and above in local
                  currency in the following countries: Canada, Denmark, Finland,
                  Hong Kong, India, Japan, Korea, Norway, Philippines, Poland,
                  Saudia Arabia, Singapore, Spain, Sweden, Taiwan and UAE in
                  country specific currency.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                variant="outline"
                sx={promoBTN}
                _hover={{
                  color: "#f9f0ff",
                  bgColor: "#c41d7f",
                  border: "transparent",
                }}
                as={Link}
                to="/discover"
                alt="Button to send you to shop with discount"
              >
                SHOP NOW
              </Button>
            </CardFooter>
          </Card>
          <Card sx={promos}>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading sx={promoHead}>
                  THANK YOU FOR YOUR SERVICE! GET 25% OFF YOUR PURCHASE
                </Heading>
                <Text sx={para1}>
                  To show our appreciation, we`re giving an exclusive discount
                  to our fellow Teachers, First Responders, Healthcare Workers,
                  and Military. Your cart will be discounted when your order
                  reaches $30+.
                </Text>
                <Text sx={para2}>
                  Disclaimer: Receive 25% off your order of $30 or more when you
                  redeem your coupon code at checkout. This code can only be
                  redeemed once. It cannot be combined with other coupon codes
                  or percent off discounts. Discount will not be applied to any
                  new or sale-priced items. *Only available on the US website.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                variant="outline"
                sx={promoBTN}
                _hover={{
                  color: "#f9f0ff",
                  bgColor: "#c41d7f",
                  border: "transparent",
                }}
                as={Link}
                to="/discover"
                alt="Button to send you to shop to get free shipping"
              >
                GET DISCOUNT
              </Button>
            </CardFooter>
          </Card>
          <Card sx={promos}>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading sx={promoHead}>
                  20% OFF STUDENT & GRADUATE DISCOUNT
                </Heading>
                <Text sx={para1}>
                  Simply verify your status with Student Beans and subscribe to
                  Beaute to redeem your personal promo code, valid for 1 year.
                </Text>
                <Text sx={para2}>
                  Disclaimer: Your student and graduate discount is 20% off your
                  order. You must be signed in to apply the promo code. Your
                  student and graduate discount promo code is combinable with
                  other offers, such as the free gift with purchase and free
                  shipping if you meet the order requirements. See terms and
                  conditions for all details.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                variant="outline"
                sx={promoBTN}
                _hover={{
                  color: "#f9f0ff",
                  bgColor: "#c41d7f",
                  border: "transparent",
                }}
                alt="Button to send you to shop with discount"
              >
                SUBSCRIBE
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Stack>
    </>
  );
}

export default PromosCard;
