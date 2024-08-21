"use client";

import { AppShell, Center } from "@mantine/core";
import React from "react";
import ToggleColorSchemeButton from "./ToggleColorSchemeButton";
import LinkedinButton from "./LinkedinButton";
import GithubButton from "./GithubButton";
import HomeButton from "./HomeButton";

export default function AppShellNavbar() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Center style={{ marginTop: "5px" }}>
          <ToggleColorSchemeButton key="color-scheme" />
          <HomeButton key="home" />
          <LinkedinButton key="linkedin" />
          <GithubButton key="github" />
        </Center>
      </AppShell.Header>
    </AppShell>
  );
}
