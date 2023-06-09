import {
  Button,
  Container,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { ButtonBack } from "~/components";

interface Data {
  body: string;
  id: number;
  title: string;
  userId: number;
}

type KeduaProps = {
  data: Data[];
};

const Kedua: React.FC<KeduaProps> = ({ data }) => {
  const [datas, setDatas] = useState<Data[]>(data);

  const handleDelete = (id: number) => {
    const filterData = datas.filter((el) => el.id !== id);
    setDatas(filterData);
  };

  return (
    <>
      <ButtonBack />
      <TableContainer>
        <Table variant="simple" my={24}>
          <TableCaption>Data JSON Placeholder</TableCaption>
          <Thead>
            <Tr>
              <Th>No. </Th>
              <Th>Title</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {datas.map((el, idx) => (
              <Tr key={el.id}>
                <Td>{idx + 1}</Td>
                <Td>{el.title}</Td>
                <Td>
                  <Button onClick={() => handleDelete(el.id)}>Delete</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      data: data.slice(0, 10),
    },
  };
};

export default Kedua;
