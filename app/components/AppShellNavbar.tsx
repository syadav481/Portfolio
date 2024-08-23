"use client";

import { Center, Group, Pill, Space, useMantineTheme } from "@mantine/core";
import React from "react";
import ToggleColorSchemeButton from "./ToggleColorSchemeButton";
import LinkedinButton from "./LinkedinButton";
import GithubButton from "./GithubButton";
import HomeButton from "./HomeButton";
import GlobalSearch from "./GlobalSearch";

export default function AppShellNavbar() {
  const theme = useMantineTheme()

  return (
    <Center>
      <Group
        style={{
          margin: '0.5rem',
          backgroundColor: theme.colors['gray'][9],
          maxWidth: '800px',
          width: 'auto',
          padding: '0.5rem 1rem', // Add padding to make it pill-shaped
          borderRadius: '9999px', // Fully round the corners for a pill shape
          justifyContent: 'center'
        }}
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
