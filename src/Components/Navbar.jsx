import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import BatteryIcon from "../assets/Right Side.png";

const Navbar = () => {
  return (
    <Flex
      width={"90%"}
      textColor={"white"}
      justify={"space-between"}
      // border={"1px solid black"}
      margin={"auto"}
      pt={"4"}
      pl={"6"}
      pr={"4"}
    >
      <Box>9:41</Box>
      <Box>
        <Image src={BatteryIcon} />
      </Box>
    </Flex>
  );
};

export default Navbar;
