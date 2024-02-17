import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const Badge = ({ elem, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blur" backgroundColor="rgba(255, 255, 255, 0.1)" />
      <ModalContent width={"20%"}>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent={"center"}>
            <Image src={elem?.imageUrl} w={"40%"} />
          </Flex>
          <Flex mt={"6"} flexDirection={"column"} alignItems={"center"} mb={8}>
            <Text textAlign={"center"} fontSize={"l"} as="b">
              Badge Unlocked! ✨
            </Text>
            <Text textAlign={"center"} fontSize={"xs"} mt={"2"}>
              🎉Level up! Earned a Shiny new badge 🏅 ✨
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Badge;
