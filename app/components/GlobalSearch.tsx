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
      description: "Get to home page",
      onClick: () => {
        router.push("/");
      },
    },
    {
      id: "experiencesAndCareer",
      label: "Experiences and Career",
      description: "Get to the Experiences and Career page",
      onClick: () => {
        router.push("/ExperiencesAndCareer");
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
