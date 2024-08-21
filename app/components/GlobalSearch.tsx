import { Button, Group, Modal, Pill, Space, Text } from "@mantine/core";
import { useDisclosure, useHotkeys, useOs } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";

interface Suggestion {
  path: string;
  name: string;
}

const suggestions: Suggestion[] = [
  { path: "/", name: "Home" },
  { path: "/ExperiencesAndCareer", name: "Experiences and Career" },
  // Add more suggestions as needed
];
function GlobalSearch() {
  const [query, setQuery] = useState<string>("");
  const [searchModalOpen, { open, close }] = useDisclosure(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>(
    []
  );

  const os = useOs();

  useHotkeys([["ctrl+k", () => open()]]);

  return (
    <>
      <Modal opened={searchModalOpen} onClose={close}></Modal>

      <Button
        leftSection={<IconSearch size={16} />}
        rightSection={<Text size="sm"></Text>}
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
