import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import { ReactComponentElement, useState } from "react";

const AuthenticationForm = () => {
  const [input, setInput] = useState("");

  return (
    <Flex justifyContent={"center"} alignItems={"center"} paddingY={"80px"}>
      <FormControl w={"50%"}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={input}
          onChange={() => console.log("on change")}
        />

        <FormLabel>Senha</FormLabel>
        <Input
          type="senha"
          value={input}
          onChange={() => console.log("on change")}
        />
      </FormControl>
    </Flex>
  );
};

export default AuthenticationForm;
