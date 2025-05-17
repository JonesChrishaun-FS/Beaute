import { Box, Image, Input, Stack } from "@chakra-ui/react";

import { Link } from "react-router-dom";

function InstaPage() {
  const wrapper = {
    w: 500,
    h: "50%",
    overflow: "hidden",
    border: "0px solid #000",
    m: "50px auto",
    p: 10,
  };
  const main = {
    h: "40%",
    m: "10px auto",
    bgColor: "#fff",
    border: "2px solid #e6e6e6",
    p: "40px 50px",
  };
  const header = {
    border: "0px solid #000",
    mb: 5,
  };
  const headerImg = {
    h: 50,
    w: 175,
    m: "auto",
    left: 40,
  };
  const part = {
    w: "100%",
  };
  const input = {
    w: "100%",
    mb: 5,
    p: "8px 12px",
    border: "1px solid #dbdbdb",
    boxSizing: "border-box",
    borderRadius: 3,
  };
  const text = {
    pos: "relative",
  };
  const link = {
    color: "#003569",
    textDecoration: "none",
  };
  const input2 = {
    w: "100%",
    mb: 5,
    p: "8px 12px",
    border: "1px solid #dbdbdb",
    boxSizing: "border-box",
    borderRadius: 3,
  };
  const btn = {
    w: "100%",
    bgColor: "#c41d7f",
    border: "1px solid #c41d7f",
    p: "5px 12px",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: 3,
  };
  const subContent = {
    h: "40%",
    m: "10px auto",
    border: "1px solid #e6e6e6",
    p: "20px 50px",
    bgColor: "#fff",
  };
  const sPart = {
    textAlign: "center",
  };
  const sLink = {
    textDecoration: "none",
    color: "#3897f0",
    wordSpacing: "-3px",
    letterSpacing: "-2px",
  };

  return (
    <>
      <Stack background="linear-gradient(180deg, #d0e, #91f)" h="100%">
        <Box sx={wrapper}>
          <Box sx={main}>
            <Box sx={header}>
              <Image src="https://i.imgur.com/zqpwkLQ.png" sx={headerImg} />
            </Box>
            <Box sx={part}>
              <Input type="text" placeholder="Username" sx={input} />
              <Box sx={text}>
                <Input type="password" placeholder="Password" sx={input2} />
                <Link href="#" id="foLink" sx={link}>
                  Forgot?
                </Link>
              </Box>
              <Input type="button" value="Log in" sx={btn} />
            </Box>
          </Box>
          <Box sx={subContent}>
            <Box sx={sPart}>
              Don`t have an account?
              <Link href="#" sx={sLink} id="sLink">
                Sign up
              </Link>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default InstaPage;
