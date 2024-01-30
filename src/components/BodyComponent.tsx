import { VStack, Text, Textarea } from "@chakra-ui/react";
import React from "react";

const BodyComponent = () => {
  return (
    <VStack paddingY={6}>
      <Text fontSize="6xl" fontWeight={"bold"}>
        Define how much money you want to save!
      </Text>
      <Text color="rgba(128, 128, 128, 0.5)" fontSize="3xl" fontWeight={"bold"}>
        keep track of your progress and collect it when you reach your goals!
      </Text>
      <Text fontSize="6xl">&#x1F3AF;</Text>
    </VStack>
  );
};

export default BodyComponent;
