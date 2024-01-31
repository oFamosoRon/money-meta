import { Box, Center, HStack, Progress, Text, VStack } from "@chakra-ui/react";
import React from "react";
import PreviewItem from "./PreviewItem";
import { color } from "framer-motion";

const PreviewSampleComponent = () => {
  const textColor = "#FAF5FF";
  return (
    <Box w={"60%"} bg={"#2D3748"} padding={6} borderRadius="lg">
      <Center>
        <Text fontStyle={"italic"} color={textColor}>
          You're goals
        </Text>
      </Center>
      <PreviewItem name="Trip to Brazil" progress={64} textColor={textColor} />
      <PreviewItem name="Buy a car" progress={9} textColor={textColor} />
      <PreviewItem
        name="Get a new computer"
        progress={89}
        textColor={textColor}
      />
    </Box>
  );
};

export default PreviewSampleComponent;
