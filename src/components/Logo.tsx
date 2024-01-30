import { Box, HStack, Text } from "@chakra-ui/react";
import { PiCoinsFill } from "react-icons/pi";
import React from "react";

const Logo = () => {
  return (
    <Box border={"1px"} padding={2} borderRadius={"lg"} borderColor={"#805AD5"}>
      <HStack>
        <PiCoinsFill size={"40px"} color="#805AD5" />
        <Text fontWeight={"bold"} color="#805AD5">
          Money Meta
        </Text>
      </HStack>
    </Box>
  );
};

export default Logo;
