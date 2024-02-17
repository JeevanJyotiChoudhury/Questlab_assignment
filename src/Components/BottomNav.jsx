import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";

const BottomNav = () => {
  return (
    <Flex backgroundColor={"white"} justifyContent={"space-around"}>
      <Box py={"5"}>
        <GoHomeFill color="grey" size={"30px"} />
      </Box>
      <Box py={"5"}>
        <CiSearch color="grey" size={"30px"} />
      </Box>
      <Box py={"5"}>
        <HiShoppingBag color="grey" size={"30px"} />
      </Box>
      <Box py={"5"} borderTop={"2px solid black"}>
        <FaUser size={"30px"} />
      </Box>
    </Flex>
  );
};

export default BottomNav;
