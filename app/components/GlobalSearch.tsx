"use client";

import { Button, Pill, Space, Text } from "@mantine/core";
import { useOs } from "@mantine/hooks";
import { spotlight, Spotlight, SpotlightActionData } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";

function GlobalSearch() {
  const os = useOs();
  const router = useRouter();
  const actions: SpotlightActionData[] = [
    {
      id: "home",
      label: "Home",
      onClick: () => {
        router.push("/");
      },
    },
    {
      id: "experiencesAndCareer",
      label: "Experiences and Career",
      onClick: () => {
        router.push("/ExperiencesAndCareer");
      },
    },
    {
      id: "education",
      label: "Education",
      onClick: () => {
        router.push("/Education");
      },
    },
    {
      id: "projects",
      label: "Projects",
      onClick: () => {
        router.push("/Projects");
      },
    },
    {
      id: "AboutMe",
      label: "About Me",
      onClick: () => {
        router.push("/AboutMe");
      },
    },
  ];
  return (
    <>
      <Spotlight actions={actions} />
      <Button
        leftSection={<IconSearch size={16} radius="lg" />}
        rightSection={<Text size="sm"></Text>}
        onClick={spotlight.open}
        variant="light"
        radius="lg"
      >
        <Text>Search...</Text>
        <Space w={16} />
        {os === "windows" ? (
          <Pill c="dimmed">ctrl + k</Pill>
        ) : os === "macos" ? (
          <Pill c="dimmed">cmd + k</Pill>
        ) : (
          ""
        )}
      </Button>
    </>
  );
}

export default GlobalSearch;
