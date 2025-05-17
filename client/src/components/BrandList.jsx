import { useState } from "react";
import {
  SimpleGrid,
  Stack,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Collapse,
  Button,
  Heading,
  Link,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

function BrandList() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  const brandCard = {
    m: 6,
    color: "#520339",
    bgColor: "#fff1f0",
    fontFamily: "Sarabun, sans-serif",
  };
  const heading = {
    p: 10,
    color: "#fff1f0",
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: "3rem",
    fontWeight: 800,
  };
  const info = {
    textAlign: "center",
    pr: 75,
    pl: 75,
    color: "#fff1f0",
    fontFamily: "Sarabun, sans-serif",
  };
  const button = {
    fontFamily: "Sarabun, sans-serif",
    bgColor: "transparent",
    color: "#520339",
  };
  const link = {
    fontFamily: "Sarabun, sans-serif",
    fontSize: "1rem",
    fontWeight: "medium",
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <Stack className="containBrands">
        <Stack display="flex" align="center">
          <Heading sx={heading}>Our Top Brands</Heading>
          <Text sx={info}>
            Below you will get some insight on some of the top brands of makeup
            products we have on the site. Some maybe your favorite or you might
            find another that interest you!
          </Text>
        </Stack>
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {[0, 1, 2, 3].map((index) => (
            <motion.li key={index} className="item" variants={item} />
          ))}
          <SimpleGrid
            className="body"
            spacing={5}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          >
            <Card sx={brandCard} as={motion.li}>
              <CardHeader>
                <Heading
                  fontSize="2.063rem"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  Almay
                </Heading>
              </CardHeader>
              <CardBody>
                <Collapse startingHeight={100} in={show}>
                  Almay has been changing the beauty game since 1931. In a world
                  of heavy, highly fragranced, irritating products, chemist and
                  founder Alfred Woititz embarked on a beauty line that defied
                  the times. His inspiration? His wife, Fanny May, who had
                  sensitive skin, a delicate complexion, and strong opinions
                  that helped shape our brand. Together, they developed products
                  that would help all women of all skin types look and feel
                  their best. With the help of dermatologist Dr. Marion
                  Sulzberger, the duo created the first hypoallergenic,
                  fragrance-free cosmetic line. They coined it Almay, a perfect
                  combination of Al+May. The rest is history.
                </Collapse>
                <Button
                  size="sm"
                  onClick={handleToggle}
                  mt="1rem"
                  sx={button}
                  _hover={{ bgColor: "#fff0f6" }}
                >
                  Show {show ? "Less" : "More"}
                </Button>
              </CardBody>
              <CardFooter>
                <Link
                  href="https://www.almay.com/?gclsrc=aw.ds&gad_source=1&gclid=*"
                  alt="click here to go to Almay website"
                  sx={link}
                >
                  <ArrowRightIcon mx="2px" /> Almay
                </Link>
              </CardFooter>
            </Card>
            <Card sx={brandCard}>
              <CardHeader>
                <Heading
                  fontSize="2.063rem"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  {" "}
                  Fenty
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  “MAKEUP IS THERE FOR YOU TO PLAY WITH. IT`S THERE FOR YOU TO
                  HAVE FUN WITH. IT SHOULD NEVER FEEL LIKE PRESSURE, AND IT
                  SHOULD NEVER FEEL LIKE A UNIFORM.” - RIHANNA FOUNDER, CEO &
                  AND OWNER OF FENTY BEAUTY
                </Text>
              </CardBody>
              <CardFooter>
                <Link
                  href="https://fentybeauty.com/"
                  alt="click here to go to Fenty website"
                  sx={link}
                >
                  <ArrowRightIcon mx="2px" /> Fenty
                </Link>
              </CardFooter>
            </Card>
            <Card sx={brandCard}>
              <CardHeader>
                <Heading
                  fontSize="2.063rem"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  e.l.f.
                </Heading>
              </CardHeader>
              <CardBody>
                {" "}
                Professional quality affordable makeup and skincare products.
                Clean beauty at its best. Vegan, cruelty free and leaping bunny
                certified at drugstore prices.
              </CardBody>
              <CardFooter>
                <Link
                  href="https://www.elfcosmetics.com/"
                  alt="click here to go to e.l.f. website"
                  sx={link}
                >
                  <ArrowRightIcon mx="2px" /> e.l.f.
                </Link>
              </CardFooter>
            </Card>
            <Card sx={brandCard}>
              <CardHeader>
                <Heading
                  fontSize="2.063rem"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  L`OREAL
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  a French multinational personal care company headquartered in
                  Clichy, Hauts-de-Seine, with a registered office in Paris. It
                  is the world`s largest cosmetics company and has developed
                  activities in the field, concentrating on hair color, skin
                  care, sun protection, make-up, perfume, and hair care.
                </Text>
              </CardBody>
              <CardFooter>
                <Link
                  href="https://www.lorealparisusa.com/?gad_source=1&gclid=CjwKCAjwxLKxBhA7EiwAXO0R0CtBA2xKfk2v_tYlJH5WoA1yXHmC0fIJAfOWuMNdYquG7l2SAbXkuhoClOwQAvD_BwE&gclsrc=aw.ds"
                  alt="click here to go to L`OREAL website"
                  sx={link}
                >
                  <ArrowRightIcon mx="2px" /> L`OREAL
                </Link>
              </CardFooter>
            </Card>
            <Card sx={brandCard}>
              <CardHeader>
                <Heading
                  fontSize="2.063rem"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  {" "}
                  COVERGIRL
                </Heading>
              </CardHeader>
              <CardBody>
                <Collapse startingHeight={100} in={show}>
                  COVERGIRL, a cosmetics category leader, celebrates
                  authenticity, diversity and self-expression through makeup.
                  Born in 1961, COVERGIRL offers accessible, affordable, and
                  inclusive makeup for everyone. Through the years, COVERGIRL
                  has partnered with a number of inspirational,
                  barrier-breaking, and diverse women as the faces of the brand.
                  In 2018, COVERGIRL became the largest makeup brand to be
                  Leaping Bunny Certified by Cruelty-Free International, which
                  means all of our products are certified cruelty free, no
                  matter where we are sold.
                </Collapse>
                <Button
                  size="sm"
                  onClick={handleToggle}
                  mt="1rem"
                  sx={button}
                  _hover={{ bgColor: "#fff0f6" }}
                >
                  Show {show ? "Less" : "More"}
                </Button>
              </CardBody>
              <CardFooter>
                <Link
                  href="https://www.covergirl.com/?cid=usa_search_google_covergirl_exact&gad_source=1&gclid=CjwKCAjwxLKxBhA7EiwAXO0R0PUdhQtUuFW3sFPQxxtQo0VmDWX0KdplDiUsaNlv_XuGUnBljUfgJhoCxkQQAvD_BwE&gclsrc=aw.ds"
                  alt="click here to go to COVERGIRL website"
                  sx={link}
                >
                  <ArrowRightIcon mx="2px" /> COVERGIRL
                </Link>
              </CardFooter>
            </Card>
            <Card sx={brandCard}>
              <CardHeader>
                <Heading
                  fontSize="2.063rem"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  MAYBELLINE
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Maybelline products are conceptualized in our headquarters in
                  NYC and we then work with an extensive team of scientists,
                  dermatologists, toxicologists, chemists and make up experts
                  located across our 120 markets worldwide to formulate the
                  products and test them extensively. This ensures we bring you
                  not only the most on trend, innovative products but that they
                  also meet our highest standards in efficacy and quality.
                </Text>
              </CardBody>
              <CardFooter>
                <Link
                  href="https://www.maybelline.com/"
                  alt="click here to go to MAYBELLINE website"
                  sx={link}
                >
                  <ArrowRightIcon mx="2px" /> MAYBELLINE
                </Link>
              </CardFooter>
            </Card>
            <Card sx={brandCard}>
              <CardHeader>
                <Heading
                  fontSize="2.063rem"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  MILANI
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Founded over 20 years ago, and continue to innovate for their
                  diverse community and relentlessly test the limits of what`s
                  available at affordable prices.
                </Text>
              </CardBody>
              <CardFooter>
                <Link
                  href="https://www.milanicosmetics.com/?utm_medium=affiliates&utm_source=flyboys&utm_campaign=%3CLSNPUBGROUP%3E&utm_content=3&ranMID=50546&ranEAID=F5yitGtnoBk&ranSiteID=F5yitGtnoBk-Sk6ld2VsG1BuUV4amBYVKg&gclid=CjwKCAjwxLKxBhA7EiwAXO0R0MFDoMNZ6nHKC3Tg7r5UO7pPsabDnlpMyo5c4Z7dCGgVtIdXeI3-WhoCja0QAvD_BwE"
                  alt="click here to go to MILANI website"
                  sx={link}
                >
                  <ArrowRightIcon mx="2px" /> MILANI
                </Link>
              </CardFooter>
            </Card>
            <Card sx={brandCard}>
              <CardHeader>
                <Heading
                  fontSize="2.063rem"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  NYX
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  AT NYX PROFESSIONAL MAKEUP, WE ALWAYS WANT TO BE THE BRIGHTEST
                  PART OF YOUR DAY! On the Bright Side, we pledge to be on the
                  right (or should we say BRIGHT) side of positive change in our
                  world and the people within it; Always committing to the best
                  quality products.
                </Text>
              </CardBody>
              <CardFooter>
                <Link
                  href="https://www.nyxcosmetics.com/?GeoRedirectOff=True&gad_source=1&gclid=CjwKCAjwxLKxBhA7EiwAXO0R0CJi5gDACgGCAlhXHsN-lfbJOEph-sviEYC-kcOyFnfaRhST6UZ1HRoC9eMQAvD_BwE&gclsrc=aw.ds"
                  alt="click here to go to NYX website"
                  sx={link}
                >
                  <ArrowRightIcon mx="2px" />
                  NYX
                </Link>
              </CardFooter>
            </Card>
            <Card sx={brandCard}>
              <CardHeader>
                <Heading
                  fontSize="2.063rem"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  REVLON
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Revlon Consumer Products LLC is a leading global beauty
                  company with a portfolio of iconic brands that transform the
                  lives of women and men around the world. Our Company
                  manufactures and markets color cosmetics, hair color and care,
                  skincare, beauty care and fragrances through a diverse
                  portfolio of 15+ brands sold in more than 150 countries.
                </Text>
              </CardBody>
              <CardFooter>
                <Link
                  href="https://www.revlon.com/?gad_source=1&gclid=CjwKCAjwxLKxBhA7EiwAXO0R0IOE1Wi_L4TBzIlpPLu2rx9BkmPzFwa9M-DCvbkluUsrgDKax47OfxoCOUAQAvD_BwE"
                  alt="click here to go to Fenty website"
                  sx={link}
                >
                  <ArrowRightIcon mx="2px" /> REVLON
                </Link>
              </CardFooter>
            </Card>
            <Card sx={brandCard}>
              <CardHeader>
                <Heading
                  fontSize="2.063rem"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  DIOR
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Rooted in scientific research and decades of experience as a
                  parfumeur-créateur, our formulas are composed with the highest
                  quality ingredients. We pay special attention to combining the
                  benefits of naturality, sustainability and science to deliver
                  the highest standard of performance and sensory experience.
                </Text>
              </CardBody>
              <CardFooter>
                <Link
                  href="https://www.dior.com/en_us/beauty/store-page-folder/whats-new.html?cgid=what-s-new"
                  alt="click here to go to DIOR website"
                  sx={link}
                >
                  <ArrowRightIcon mx="2px" /> DIOR
                </Link>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </motion.ul>
      </Stack>
    </>
  );
}

export default BrandList;
