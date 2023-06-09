import { Button, Container, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonBack } from "~/components";
import { hash } from "~/utils";

const Ketiga = () => {
  const [value, setValue] = useState("");

  const handleHash = () => {
    const result = hash("09062023rizkyifabula");
    console.log(result);
    setValue(result);
  };

  return (
    <>
      <ButtonBack />
      <VStack align="start" mt={10}>
        <Button colorScheme="red" onClick={handleHash}>
          Generate Hash
        </Button>
        <Text>sha256: {value}</Text>
      </VStack>
    </>
  );
};

export default Ketiga;
