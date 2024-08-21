"use client";

import { AppShell, Center, Space } from "@mantine/core";
import React from "react";
import ToggleColorSchemeButton from "./ToggleColorSchemeButton";
import LinkedinButton from "./LinkedinButton";
import GithubButton from "./GithubButton";
import HomeButton from "./HomeButton";
import GlobalSearch from "./GlobalSearch";

export default function AppShellNavbar() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Center style={{ marginTop: "5px" }}>
          <ToggleColorSchemeButton />
          <HomeButton />
          <LinkedinButton />
          <GithubButton />
          <Space w="lg" />
          <GlobalSearch />
        </Center>
      </AppShell.Header>
    </AppShell>
  );
}
