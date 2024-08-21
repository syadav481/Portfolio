"use client";

import {
  Stack,
  Title,
  Text,
  Divider,
  Group,
  Center,
  Tabs,
} from "@mantine/core";
import { ToggleColorSchemeButton } from "./components/ToggleColorSchemeButton";
import LinkedinButton from "./components/LinkedinButton";
import GithubButton from "./components/GithubButton";

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
        </Group>

        <Divider />
        <Text>
          I&apos;m a senior at the University of Michigan studying computer
          science in my last semester.
        </Text>
      </Stack>
    </Center>
  );
}
