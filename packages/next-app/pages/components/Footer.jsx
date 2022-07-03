import { Container, Divider, Link, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
      <Divider w={"80%"} mx={"auto"} />
      <Container py={"2rem"}>
        <Text textAlign={"center"} fontSize={"1rem"}>
          Built with 💜 by{" "}
          <Link isExternal href="https://twitter.com/Elvolution_20">
            Elvolution
          </Link>
        </Text>
      </Container>
    </>
  );
}

export default Footer;
