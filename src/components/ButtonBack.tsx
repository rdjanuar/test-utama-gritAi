import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

export const ButtonBack = () => {
  const route = useRouter();

  return (
    <Button
      leftIcon={<ArrowBackIcon />}
      colorScheme="teal"
      mt="10"
      onClick={route.back}
    >
      Back
    </Button>
  );
};
