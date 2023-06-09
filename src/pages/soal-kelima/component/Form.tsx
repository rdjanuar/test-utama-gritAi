import {
  CardBody,
  VStack,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useFocus, useLocalStorage } from "~/hooks";

const Form = () => {
  const ref = useFocus();
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const { setLocalStorage, value: localStorageValue } = useLocalStorage(
    "username",
    value.username
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalStorage(value.username);
  };
  return (
    <CardBody minW="96">
      {localStorageValue.length > 0 ? (
        <VStack align="start" spacing={4}>
          <Heading fontSize="20px">Selamat datang {localStorageValue}</Heading>
          <Button
            onClick={() => {
              setLocalStorage("");
              setValue({
                password: "",
                username: "",
              });
            }}
            w="full"
            colorScheme="teal"
          >
            Logout
          </Button>
        </VStack>
      ) : (
        <form onSubmit={handleSubmit}>
          <VStack w="full" spacing={4}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                ref={ref}
                type="username"
                onChange={handleChange}
                value={value.username}
                name="username"
                min={3}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                min={6}
                name="password"
                onChange={handleChange}
                value={value.password}
              />
            </FormControl>
            <Button type="submit" name="password" w="100%" colorScheme="teal">
              Submit
            </Button>
          </VStack>
        </form>
      )}
    </CardBody>
  );
};

export default Form;
