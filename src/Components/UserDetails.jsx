import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [profileDetails, setProfileDetails] = useState({});
  const [pointsAndLevel, setPointsAndLevel] = useState({});
  const [rank, setRank] = useState("");
  const [allBadges, setAllBadges] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = "u-a2399489-9cd0-4c94-ad12-568379202b08";
        const entityId = "e-0000000000";
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc";

        const profileDataResponse = await fetch(
          `https://staging.questprotocol.xyz/api/users/${userId}`,
          {
            headers: {
              apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
              apisecret: "profile-data-quest-labs",
              userid: userId,
              token: token,
              "Content-Type": "application/json",
            },
          }
        );
        const profilePointsResponse = await fetch(
          `https://staging.questprotocol.xyz/api/entities/${entityId}/users/${userId}/xp`,
          {
            headers: {
              apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
              apisecret: "profile-data-quest-labs",
              userid: userId,
              token: token,
              "Content-Type": "application/json",
            },
          }
        );
        const profileRankResponse = await fetch(
          `https://staging.questprotocol.xyz/api/entities/${entityId}/users/${userId}/xp-leaderboard-rank`,
          {
            headers: {
              apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
              apisecret: "profile-data-quest-labs",
              userid: userId,
              token: token,
              "Content-Type": "application/json",
            },
          }
        );
        const profileBadgesResponse = await fetch(
          `https://staging.questprotocol.xyz/api/entities/${entityId}/users/${userId}/badges`,
          {
            headers: {
              apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
              apisecret: "profile-data-quest-labs",
              userid: userId,
              token: token,
              "Content-Type": "application/json",
            },
          }
        );

        if (
          !profileDataResponse.ok ||
          !profilePointsResponse.ok ||
          !profileRankResponse.ok ||
          !profileBadgesResponse.ok
        ) {
          throw new Error("Failed to fetch data");
        }

        const profileDetails = await profileDataResponse.json();
        const pointsAndLevel = await profilePointsResponse.json();
        const rankData = await profileRankResponse.json();
        const allBadgesData = await profileBadgesResponse.json();

        setProfileDetails(profileDetails.data);
        setPointsAndLevel(pointsAndLevel);
        setRank(rankData.data.position);
        setAllBadges(allBadgesData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Box
      width={"90%"}
      margin={"auto"}
      backgroundColor={"white"}
      textAlign={"center"}
      borderTopRadius={"8"}
    >
      <Flex justifyContent="space-between">
        <Flex display="flex" justifyContent="center">
          <Image
            src={profileDetails?.imageUrl}
            w="30%"
            mt={"-15%"}
            border="2px solid white"
            borderRadius={"50%"}
            boxShadow="2xl"
          />
        </Flex>
      </Flex>
      <Text fontSize="2xl" py={5} fontWeight={"500"}>
        {profileDetails?.name}
      </Text>
      <Grid
        width={"90%"}
        margin={"auto"}
        templateColumns="repeat(3, 1fr)"
        gap={4}
        textColor={"white"}
      >
        <Box backgroundColor={"#7052ff"} borderRadius={"8"} py={"5"}>
          <Text>{pointsAndLevel?.data}</Text>
          <Text>Points</Text>
        </Box>
        <Box backgroundColor={"#7052ff"} borderRadius={"8"} py={"5"}>
          <Text>#{rank}</Text>
          <Text>Rank</Text>
        </Box>
        <Box backgroundColor={"#7052ff"} borderRadius={"8"} py={"5"}>
          <Text>{pointsAndLevel?.tier}</Text>
          <Text>Level</Text>
        </Box>
      </Grid>
      <Flex px={1}>
        <Tabs position="relative" variant="unstyled" defaultIndex={1}>
          <TabList>
            <Tab>Membership</Tab>
            <Tab>Badges</Tab>
            <Tab>Point History</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
        </Tabs>
      </Flex>
      <Box width={"90%"} mt={22} mx={"auto"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {allBadges?.map((el, index) => (
            <Flex justifyContent={"center"} key={index}>
              <Image
                src={el?.imageUrl}
                w={"70%"}
                onClick={() => onOpen(el?.imageUrl)}
              />
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Image src={el?.imageUrl} w={"70%"} />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Flex>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default UserDetails;
