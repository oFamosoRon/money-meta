import React from "react";
import { Box, HStack, Progress, Text, VStack } from "@chakra-ui/react";

interface Props {
  name: string;
  progress: number;
  textColor: string;
}

const PreviewItem = ({ name, progress, textColor }: Props) => {
  return (
    <>
      <HStack w="100%" justifyContent={"space-between"}>
        <Text color={textColor} paddingY={2}>
          {name}
        </Text>
        <Text color={textColor} paddingY={2}>
          {progress + "%"}
        </Text>
      </HStack>
      <Progress
        hasStripe
        value={progress}
        colorScheme="purple"
        borderRadius={"10px"}
      />
    </>
  );
};

export default PreviewItem;
