"use client";

import {
  Center,
  Title,
  Text,
  Stack,
  Group,
  Timeline,
  Space,
  UnstyledButton,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconDevicesPc,
  IconGitBranch,
  IconHeartRateMonitor,
  IconSchool,
} from "@tabler/icons-react";
import React from "react";

export default function Page() {
  const [alivioModalOpen, { open: openAlivio, close: closeAlivio }] =
    useDisclosure(false);
  const [eecs281ModalOpen, { open: openEecs281, close: closeEecs281 }] =
    useDisclosure(false);
  const [accumTechModalOpen, { open: openAccumTech, close: closeAccumTech }] =
    useDisclosure(false);
  const [gladosModalOpen, { open: openGlados, close: closeGlados }] =
    useDisclosure(false);

  return (
    <Center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack>
        <Title>Experiences</Title>
        <Text>My work experience and extra curriculars</Text>
        <Space />

        <Modal
          opened={alivioModalOpen}
          onClose={closeAlivio}
          title="Project Alivio"
        ></Modal>

        <Modal
          opened={eecs281ModalOpen}
          onClose={closeEecs281}
          title="EECS 281"
        ></Modal>

        <Modal
          opened={accumTechModalOpen}
          onClose={closeAccumTech}
          title="AccumTech"
        ></Modal>

        <Modal
          opened={gladosModalOpen}
          onClose={closeGlados}
          title="GLaDOS"
        ></Modal>

        <Group>
          <Timeline active={3} bulletSize={24} lineWidth={2}>
            <Timeline.Item
              bullet={<IconGitBranch size={12} />}
              title="AccumTech: Software Developer, Intern, Work Study"
            >
              <Text c="dimmed" size="sm" style={{ maxWidth: "300px" }}>
                I&apos;m working as a Software Developer Intern (and now part
                time) at AccumTech. I&apos;ve worked with React.js, Webpack, and
                TypeScript for frontend and C# and .NET for backend work.
              </Text>
              <UnstyledButton
                variant="subtle"
                size={"sm"}
                onClick={openAccumTech}
              >
                <Text size="sm">more...</Text>
              </UnstyledButton>
            </Timeline.Item>
            <Timeline.Item
              bullet={<IconDevicesPc size={12} />}
              title="UM GLaDOS: Research Assistant"
            >
              <Text c="dimmed" size="sm" style={{ maxWidth: "300px" }}>
                I was a research assistant in the U of M graduate labaratory for
                distributed and operating systems. I worked with a PhD student
                on formal methods for Assured Micropatching for systems software
                in Coq.
              </Text>
              <UnstyledButton variant="subtle" size={"sm"} onClick={openGlados}>
                <Text size="sm">more...</Text>
              </UnstyledButton>
            </Timeline.Item>
            <Timeline.Item
              title="MHEAL, Project Alivio: Software Team Lead"
              bullet={<IconHeartRateMonitor size={12} />}
            >
              <Text c="dimmed" size="sm" style={{ maxWidth: "300px" }}>
                I led a team of students to maintain and iterate upon an app
                that is used by nurses at the San Juan de Dios Hospital to
                reduce pressure ulcers among patients.
              </Text>
              <UnstyledButton variant="subtle" size={"sm"} onClick={openAlivio}>
                <Text size="sm">more...</Text>
              </UnstyledButton>
            </Timeline.Item>

            <Timeline.Item
              title="UM College of Engineering: EECS 281 IA"
              bullet={<IconSchool size={15} />}
            >
              <Text c="dimmed" size="sm" style={{ maxWidth: "300px" }}>
                I currently work as a IA (TA) for EECS 281, Data Structures and
                Algorithms.
              </Text>
              <UnstyledButton
                variant="subtle"
                size={"sm"}
                onClick={openEecs281}
              >
                <Text size="sm">more...</Text>
              </UnstyledButton>
            </Timeline.Item>
          </Timeline>
        </Group>
      </Stack>
    </Center>
  );
}
