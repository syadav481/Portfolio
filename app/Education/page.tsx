"use client";

import "./styles.css";

import React from "react";
import {
  AspectRatio,
  Stack,
  Image,
  Anchor,
  Title,
  Text,
  Divider,
  Table,
  Box,
  Group,
  Accordion,
  TableCaption,
  Container,
  Center,
  Affix,
  Portal,
  Transition,
} from "@mantine/core";
import {
  IconBrandCpp,
  IconBrandPython,
  IconParentheses,
  IconZoomCheck,
} from "@tabler/icons-react";

interface ClassDescription {
  class: string;
  relevantProjects: string[];
  descriptions: string[];
  icons: React.ReactNode[];
}

function Page() {
  const coursework: ClassDescription[] = [
    {
      class: "EECS 281, Data Structures and Algorithms",
      relevantProjects: ["SQL Server"],
      descriptions: ["An implementation of a SQL engine written in C++"],
      icons: [<IconBrandCpp key={"eecs281cpp1"} />],
    },
    {
      class: "EECS 390, Programming Paradigms",
      relevantProjects: ["Meta-Circular Evaluator", "uC Transpiler / Compiler"],
      descriptions: [
        "Meta-Circular Evaluator: A Scheme interpreter written in Scheme.",
        "uC Transpiler / Compiler: A transpiler for a small C-like programming language that transforms uC to C++.",
      ],
      icons: [
        <IconParentheses key={"eecs390scheme1"} />,
        <IconBrandPython key={"eecs390py2"} />,
      ],
    },
    {
      class: "EECS 485, Web Dev",
      relevantProjects: ["Map Reduce"],
      descriptions: [
        "Map Reduce: A framework for processing and generating large data sets with a distributed algorithm on a cluster",
      ],
      icons: [<IconBrandPython key={"eecs485py1"} />],
    },
    {
      class: "EECS 482, Operating Systems",
      relevantProjects: [
        "Thread Library",
        "Virtual Memory Pager",
        "Multithreaded File System",
      ],
      descriptions: [
        "Thread Library: A library for managing threads and synchronization.",
        "Virtual Memory Pager: A component that manages the virtual memory system, handling paging and memory allocation.",
        "Multithreaded File System: A file system designed to support multi-threading for concurrent file operations.",
      ],
      icons: [
        <IconBrandCpp key={"eecs482cpp1"} />,
        <IconBrandCpp key={"eecs482cpp2"} />,
        <IconBrandCpp key={"eecs482cpp3"} />,
      ],
    },
    {
      class: "EECS 498, Formal Verification of Distributed Systems",
      relevantProjects: ["Distributed Sharded Key-Value Store"],
      descriptions: [
        "Distributed Sharded Key-Value Store: A programmatic proof of a protocol for implementing a Distributed Sharded Key-Value store.",
      ],
      icons: [<IconZoomCheck key={"eecs498dafny1"} />],
    },
  ];

  const rows = coursework.map((course) => {
    const courseProjects = course.relevantProjects.map((projectName, index) => {
      const description = course.descriptions[index];
      const icon = course.icons[index];
      return (
        <Accordion.Item
          key={projectName + "accordion-item"}
          value={projectName}
        >
          <Accordion.Control icon={icon}>{projectName}</Accordion.Control>
          <Accordion.Panel>{description}</Accordion.Panel>
        </Accordion.Item>
      );
    });

    return (
      <Table.Tr key={course.class}>
        <Table.Td>{course.class}</Table.Td>
        <Table.Td>
          <Accordion variant="contained">{courseProjects}</Accordion>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <>
      <Container size="sm">
        <Stack>
          <Title style={{ marginTop: "5rem" }}>Education</Title>
          <Divider variant="dotted" />

          <Text>
            I am doing my bachelors at the University of Michigan - Ann Arbor.
            Below are some courses that I have found useful and some projects I
            did in them.
          </Text>

          <Table
            variant=""
            verticalSpacing="xs"
            withRowBorders={false}
            style={{ margin: "1rem" }}
          >
            <TableCaption>
              Some other classes I have taken: Machine Learning, Discrete Math,
              Computer Architecture, Computer Security
            </TableCaption>
            <Table.Thead>
              <Table.Tr>
                <Table.Th style={{ width: "30%" }}>Class</Table.Th>
                <Table.Th>Projects</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Stack>
        <AspectRatio ratio={1} maw={400} mx="auto">
          <Image
            style={{ padding: "2%", borderRadius: "50%" }}
            src="/umdrawing.png"
            alt="A picture of the University of Michigan, where I am doing my bachelors"
          />
        </AspectRatio>
        <Center>
          <Anchor
            href="https://www.etsy.com/shop/ThatchCityStudio"
            target="_blank"
            style={{ marginTop: "1rem" }}
          >
            Credit
          </Anchor>
        </Center>
      </Container>
    </>
  );
}

export default Page;
