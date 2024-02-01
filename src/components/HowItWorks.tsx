import {
  Flex,
  Grid,
  GridItem,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const HowItWorks = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"right left"`,
      }}
      templateColumns={{
        lg: "1fr 1fr",
      }}
    >
      <GridItem area={"right"} paddingY={10}>
        <Text fontSize="4xl" fontWeight={"bold"} align={"center"}>
          {" "}
          With money meta you can define goals you want to achieve, save the
          money for it and see your budget grow step by step!
        </Text>

        <Flex justifyContent={"center"} alignItems={"center"} paddingY={"80px"}>
          <List spacing={3}>
            <ListItem fontSize={18} fontWeight={"bold"}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Create a new goal and how much you can save
            </ListItem>

            <ListItem fontSize={18} fontWeight={"bold"}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Choose the frequency you can apply the money
            </ListItem>

            <ListItem fontSize={18} fontWeight={"bold"}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Report it to Money Meta and we will tell your progress
            </ListItem>
            <ListItem fontSize={18} fontWeight={"bold"}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              See how long it will take for you to reach your goal
            </ListItem>
            <ListItem fontSize={18} fontWeight={"bold"}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Watch your savings growing towards your goals
            </ListItem>
          </List>
        </Flex>

        <Text align={"center"}>
          {" "}
          Create your first goals for free! &#x1F389;.{" "}
        </Text>
      </GridItem>
      <GridItem area={"left"}>Another column</GridItem>
    </Grid>
  );
};

export default HowItWorks;
