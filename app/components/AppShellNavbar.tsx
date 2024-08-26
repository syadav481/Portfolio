"use client";

import { Center, Group, Space } from "@mantine/core";
import ToggleColorSchemeButton from "./ToggleColorSchemeButton";
import LinkedinButton from "./LinkedinButton";
import GithubButton from "./GithubButton";
import HomeButton from "./HomeButton";
import GlobalSearch from "./GlobalSearch";

export default function AppShellNavbar() {
  return (
    <Center>
      <Group
        style={{ padding: '0.5rem', margin: '0.5rem' }}
        justify="center"
      >
        <ToggleColorSchemeButton />
        <HomeButton />
        <LinkedinButton />
        <GithubButton />
        <Space w="lg" />
        <GlobalSearch />
      </Group>
    </Center>
  );
}
