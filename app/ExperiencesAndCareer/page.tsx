"use client";

import {
  Center,
  Title,
  Text,
  Stack,
  Group,
  Timeline,
  Space,
  Modal,
  Divider,
  List,
  ListItem,
  Container,
  Button,
  Image,
  Anchor,
  AspectRatio,
  Flex,
  ActionIcon,
  Tooltip,
  ThemeIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowsMaximize,
  IconBrandCSharp,
  IconBrandDocker,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandVisualStudio,
  IconDevicesPc,
  IconGitBranch,
  IconHeartRateMonitor,
  IconMedicalCross,
  IconNotes,
  IconSchool,
} from "@tabler/icons-react";
import React from "react";

// a lot of yapping in the jsx for this file 😂
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
    <>
      <Modal
        opened={alivioModalOpen}
        onClose={closeAlivio}
        withCloseButton={false}
        size="lg"
        centered
      >
        <Container>
          <Stack>
            <Group>
              <Title size="h4">Project Alivio</Title>
              <Tooltip
                label={
                  "Checkout the official Project Alivio page hosted by UMich! (Or just look at it in the embedded page below)"
                }
              >
                <ActionIcon
                  variant="subtle"
                  component="a"
                  href="https://mheal.engin.umich.edu/projectalivio"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconMedicalCross />
                </ActionIcon>
              </Tooltip>
              <Tooltip label={
                "Checkout the alivio official documentation for technical details on things like architecture, deployment etc!"
              }
              >
                <ActionIcon
                  variant="subtle"
                  component="a"
                  href="https://project-alivio.github.io/Documentation/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconNotes />
                </ActionIcon>
              </Tooltip>
            </Group>
            <Divider />
            <Text>
              I was the software team lead for Project Alivio where we developed
              software to help nurses fight pressure ulcers.
            </Text>
            <AspectRatio ratio={16 / 9} mx="auto" maw={600}>
              <iframe
                src="https://mheal.engin.umich.edu/projectalivio"
                style={{ border: 0, width: "100%", height: "800px" }}
              />
            </AspectRatio>
          </Stack>
        </Container>
      </Modal>

      <Modal
        opened={eecs281ModalOpen}
        onClose={closeEecs281}
        withCloseButton={false}
        centered
        size="lg"
      >
        <Container>
          <Stack>
            <Title size="h3">EECS 281 IA (Teaching Assistant)</Title>
            <Divider />
            <Text>
              I work as an IA for EECS 281, Data Structures and Algorithms
              during the school year.
            </Text>
            <Title size="h4">Content</Title>
            <List>
              <ListItem>
                The content of this class is like any standard DS & A class.
              </ListItem>
              <List withPadding>
                <ListItem>
                  We cover data structures such as vectors, stacks, queues,
                  heaps, hashmaps, binary search trees, graphs etc.
                </ListItem>
                <ListItem>
                  We also cover algorithm patterns and families like
                  backtracking, dynamic programming, graph algorithms etc.
                </ListItem>
              </List>
            </List>
            <Title size="h4">Teaching</Title>
            <List>
              <ListItem>
                As an IA I run labs, hold office hours and grade exams.
              </ListItem>
              <List withPadding>
                <ListItem>
                  Labs / Discussion sections are weekly sessions where we teach
                  content to students ~20-30 students at a time.
                </ListItem>
                <ListItem>
                  I also hold office hours. This is mostly just debugging
                  student code for their projects (Travelling Salesperson,
                  Shortest Paths etc...)
                </ListItem>
              </List>
            </List>
          </Stack>
        </Container>
      </Modal>

      <Modal
        opened={accumTechModalOpen}
        onClose={closeAccumTech}
        withCloseButton={false}
        size="lg"
        centered
      >
        <Container>
          <Stack>
            <Title size="h3">AccumTech</Title>
            <Divider />
            <Text>
              I interned at AccumTech for the summer of 2024 and am returning
              for a Work-Study in the fall. In my time at AccumTech I have
              worked on both frontend and backend tasks.
            </Text>
            <Group gap="xs">
              <Title size="h4">Frontend</Title>
              <ThemeIcon variant="outline" size="sm">
                <IconBrandReact />
              </ThemeIcon>
              <ThemeIcon variant="outline" size="sm">
                <IconBrandTypescript />
              </ThemeIcon>
            </Group>
            <List>
              <ListItem>
                My exposure to frontend work in this role was almost entirely
                through a project where I wrote a Reusable Modal component for
                the companies front-end library.
              </ListItem>
              <ListItem>
                This modal in behavior and design is similar to what is
                available in popular front-end libraries such as Mantine (what
                this site is built with!)
              </ListItem>
              <ListItem>
                The stack that I worked with for this project was an ASP.NET
                core server, webpack, React.js and TypeScript.
              </ListItem>
            </List>
            <Group gap="xs">
              <Title size="h4">Backend</Title>
              <ThemeIcon variant="outline" size="sm">
                <IconBrandCSharp />
              </ThemeIcon>
              <ThemeIcon variant="outline" size="sm">
                <IconBrandDocker />
              </ThemeIcon>
              <ThemeIcon variant="outline" size="sm">
                <IconBrandVisualStudio />
              </ThemeIcon>
            </Group>
            <List>
              <ListItem>
                My exposure to backend work was almost entirely through another
                large project where we changed existing microservices to use
                priority queues.
              </ListItem>
              <ListItem>
                The work mostly involved refactoring message handlers in
                microservices and configuring the message broker to use priority
                queues for existing datastreams.
              </ListItem>
              <ListItem>
                The stack that I worked with for this project was .NET, C#, SQL,
                RabbitMQ, ServiceFabric, Docker and Rebus.
              </ListItem>
            </List>
          </Stack>
        </Container>
      </Modal>

      <Modal
        opened={gladosModalOpen}
        onClose={closeGlados}
        withCloseButton={false}
        size="lg"
        centered
      >
        <Container>
          <Stack>
            <Title size="h4">Research Assistant: GLaDOS</Title>
            <Divider />
            <Text>
              The picture below might be a little small. It is a presentation I
              made on the research topic that my team and I were working on. The
              gist of it is to analyze LLVM Intermediate Representation to make
              provably correct micropatches for systems software where
              documentation is limited and source code might be inaccessible and
              or failure is unacceptable. For example, code running on
              government satellites or critical infrastructure.
            </Text>
            <Text>
              I unfortunately only got to work on this project for around 8
              months as the PhD student I was working under had to take leave
              from the program for personal reasons and there was no longer
              anyone for me to work with after. The PhD student I worked under,
              Mia Kelly, was also great and really helped me learn a lot.
            </Text>
            <Image
              src="/ampresearch.png"
              alt="A picture of a poster presentation I made while working in the Graduate Lab for Operating and Distributed Systems"
            />
          </Stack>
        </Container>
      </Modal>
      <Center>
        <Container
        >
          <Stack>
            <Title>Experiences</Title>
            <Text>My work experience and extra curriculars</Text>
            <Space />

            <Group>
              <Timeline
                active={3}
                bulletSize={24}
                lineWidth={2}
                style={{ maxWidth: "24rem" }}
              >
                <Timeline.Item
                  bullet={<IconGitBranch size={12} />}
                  title="AccumTech: Software Developer Intern, Work Study"
                >
                  <Stack>
                    <Text c="dimmed" size="sm">
                      I&apos;m working as a Software Developer Intern (and now
                      part time) at AccumTech. I&apos;ve worked with React.js,
                      Webpack, and TypeScript for frontend and C# and .NET for
                      backend work.
                    </Text>
                    <Button
                      variant="light"
                      size="xs"
                      onClick={openAccumTech}
                      leftSection={<IconArrowsMaximize />}
                    >
                      More...
                    </Button>
                  </Stack>
                </Timeline.Item>
                <Timeline.Item
                  bullet={<IconDevicesPc size={12} />}
                  title="UM GLaDOS: Research Assistant"
                >
                  <Stack>
                    <Text c="dimmed" size="sm" style={{ maxWidth: "300px" }}>
                      I was a research assistant in the U of M graduate lab for
                      distributed and operating systems. I worked with a PhD
                      student on formal methods for Assured Micropatching for
                      systems software in Coq.
                    </Text>
                    <Button
                      variant="light"
                      size="xs"
                      onClick={openGlados}
                      leftSection={<IconArrowsMaximize />}
                    >
                      More...
                    </Button>
                  </Stack>
                </Timeline.Item>
                <Timeline.Item
                  title="MHEAL, Project Alivio: Software Team Lead"
                  bullet={<IconHeartRateMonitor size={12} />}
                >
                  <Stack>
                    <Text c="dimmed" size="sm" style={{ maxWidth: "300px" }}>
                      I led a team of students to maintain and iterate upon an app
                      that is used by nurses at the San Juan de Dios Hospital to
                      reduce pressure ulcers among patients.
                    </Text>
                    <Button
                      variant="light"
                      size="xs"
                      onClick={openAlivio}
                      leftSection={<IconArrowsMaximize />}
                    >
                      More...
                    </Button>
                  </Stack>
                </Timeline.Item>

                <Timeline.Item
                  title="UM College of Engineering: EECS 281 IA"
                  bullet={<IconSchool size={15} />}
                >
                  <Stack>
                    <Text c="dimmed" size="sm" style={{ maxWidth: "300px" }}>
                      I currently work as a IA (TA) for EECS 281, Data Structures
                      and Algorithms.
                    </Text>
                    <Button
                      variant="light"
                      size="xs"
                      onClick={openEecs281}
                      leftSection={<IconArrowsMaximize />}
                    >
                      More...
                    </Button>
                  </Stack>
                </Timeline.Item>
              </Timeline>
            </Group>
          </Stack>
        </Container>
      </Center>
    </>
  );
}
