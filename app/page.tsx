"use client";

import { Stack, Title, Text, Divider, Group } from "@mantine/core";
import { ToggleColorSchemeButton } from "./components/ToggleColorSchemeButton";

export default function HomePage() {
  return (
    <div
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
          <Title>Hi! I&apos;m Swaraj</Title>
        </Group>

        <Divider />
        <Text>
          I&apos;m a senior at the University of Michigan studying computer
          science in my last semester.
        </Text>
      </Stack>
    </div>
  );
}
