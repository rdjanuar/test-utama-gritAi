import { Card, Center, Spinner } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ButtonBack } from "~/components";

const DynamicForm = dynamic(() => import("./component/Form"), {
  loading: () => <Spinner />,
  ssr: false,
});

const Kelima = () => {
  return (
    <>
      <ButtonBack />
      <Center justifyContent="center" h="80vh">
        <Card>
          <DynamicForm />
        </Card>
      </Center>
    </>
  );
};

export default Kelima;
