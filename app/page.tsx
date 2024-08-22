"use client";

import {
  Stack,
  Title,
  Text,
  Divider,
  Group,
  Center,
  Space,
  NavLink,
  Image,
} from "@mantine/core";
import {
  IconBriefcase,
  IconFileCode,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <Center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "10px",
      }}
    >
      <Stack>
        <Group>
          <Image
            alt="A picture of me"
            src="/selfie_smaller.png"
            h={100}
            w="auto"
            fit="contain"
            style={{ borderRadius: "50%", marginLeft: "15%" }}
          />
          <Title>Swaraj Yadav</Title>
          <Space />
        </Group>

        <Divider />
        <Text>
          Hi! I&apos;m a senior at the University of Michigan studying computer
          science.
        </Text>

        <Group>
          <NavLink
            href="/AboutMe"
            label="About me"
            leftSection={<IconUser size="1.5rem" stroke={1.5} />}
            variant="subtle"
            component={Link}
          />
          <NavLink
            href="/Education"
            label="Education"
            leftSection={<IconSchool size="1.5rem" stroke={1.5} />}
            variant="subtle"
            component={Link}
          />
          <NavLink
            href="/ExperiencesAndCareer"
            label="Experiences and Career"
            leftSection={<IconBriefcase size="1.5rem" stroke={1.5} />}
            variant="subtle"
            component={Link}
          />
          <NavLink
            href="/Projects"
            label="Projects"
            leftSection={<IconFileCode size="1.5rem" stroke={1.5} />}
            variant="subtle"
            component={Link}
          />
        </Group>
      </Stack>
    </Center>
  );
}
