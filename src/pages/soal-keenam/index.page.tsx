import { VStack, chakra } from "@chakra-ui/react";
import React from "react";
import { ButtonBack } from "~/components";

const Keenam = () => {
  return (
    <VStack align="start">
      <ButtonBack />
      <chakra.a
        textDecor="underline"
        target="_blank"
        href="https://github.com/rdjanuar/test-gritAI/tree/main/express"
      >
        Jawaban soal no 10-11
      </chakra.a>
    </VStack>
  );
};

export default Keenam;
