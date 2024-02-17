import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { GoChevronLeft } from "react-icons/go";

const Profile = () => {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      mb={20}
      mt={10}
      w={"90%"}
      mx={"auto"}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
        borderRadius="10px"
        padding="15px"
        color="white"
      >
        <GoChevronLeft />
      </Box>
      <Box
        color="white"
        textAlign="center"
        marginLeft="27%"
        marginRight="auto"
        fontWeight={"600"}
      >
        <Text fontSize={"2xl"}>Profile</Text>
      </Box>
    </Flex>
  );
};

export default Profile;
