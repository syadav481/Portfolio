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
import { ToggleColorSchemeButton } from "./components/ToggleColorSchemeButton";
import LinkedinButton from "./components/LinkedinButton";
import GithubButton from "./components/GithubButton";
import {
  IconBriefcase,
  IconFileCode,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";

export default function HomePage() {
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
        <Group>
          <ToggleColorSchemeButton />
          <LinkedinButton />
          <GithubButton />
          <Title>Hi! I&apos;m Swaraj</Title>
          <Space />
          <Image
            alt="A picture of me"
            src="/selfie_smaller.png"
            h={100}
            w="auto"
            fit="contain"
            style={{ borderRadius: "50%" }}
          />
        </Group>

        <Divider />
        <Text>
          I&apos;m a senior at the University of Michigan studying computer
          science.
        </Text>

        <Group>
          <NavLink
            href=""
            label="About me"
            leftSection={<IconUser size="1.5rem" stroke={1.5} />}
            variant="subtle"
          />
          <NavLink
            href=""
            label="Education"
            leftSection={<IconSchool size="1.5rem" stroke={1.5} />}
            variant="subtle"
          />
          <NavLink
            href=""
            label="Experiences and Career"
            leftSection={<IconBriefcase size="1.5rem" stroke={1.5} />}
            variant="subtle"
          />
          <NavLink
            href=""
            label="Projects"
            leftSection={<IconFileCode size="1.5rem" stroke={1.5} />}
            variant="subtle"
          />
        </Group>
      </Stack>
    </Center>
  );
}
