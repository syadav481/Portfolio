import { Autocomplete, Button, Modal, Pill, Space, Text } from "@mantine/core";
import {
  getHotkeyHandler,
  useDisclosure,
  useHotkeys,
  useOs,
} from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const pageNameToRoute: { [key: string]: string } = {
  Home: "/",
  "Experiences and Career": "ExperiencesAndCareer",
};

const suggestions = [
  { group: "Pages", items: ["Home", "Experiences and Career"] },
  // Add more suggestions as needed
];
function GlobalSearch() {
  const [searchModalOpen, { open, close }] = useDisclosure(false);
  const [searchQuery, setSearchQuery] = useState("");
  const os = useOs();

  useHotkeys([["mod+k", () => open()]]);

  const router = useRouter();

  return (
    <>
      <Modal
        centered
        opened={searchModalOpen}
        onClose={close}
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 5,
        }}
        radius="lg"
      >
        <Autocomplete
          placeholder="look for a page"
          data={suggestions}
          data-autofocus
          comboboxProps={{
            transitionProps: { transition: "pop", duration: 100 },
          }}
          leftSection={<IconSearch size={16} />}
          onChange={(value) => setSearchQuery(value)}
          onKeyDown={getHotkeyHandler([
            [
              "enter",
              () => {
                if (searchQuery in pageNameToRoute) {
                  router.push(pageNameToRoute[searchQuery]);
                }
              },
            ],
          ])}
        />
      </Modal>

      <Button
        leftSection={<IconSearch size={16} />}
        rightSection={<Text size="sm"></Text>}
        onClick={open}
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
