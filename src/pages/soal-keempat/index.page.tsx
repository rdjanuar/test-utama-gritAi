import { VStack, chakra } from "@chakra-ui/react";
import React from "react";
import { ButtonBack } from "~/components";

const Empat = () => {
  return (
    <VStack align="start">
      <ButtonBack />
      <chakra.a
        textDecor="underline"
        target="_blank"
        href="https://github.com/rdjanuar/test-gritAI/tree/main/debug"
      >
        Jawaban soal no 8
      </chakra.a>
    </VStack>
  );
};

export default Empat;
