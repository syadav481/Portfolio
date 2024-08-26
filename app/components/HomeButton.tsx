import { ActionIcon, Tooltip } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export default function HomeButton() {
  return (
    <Tooltip label="Go to the home page">
      <ActionIcon
        size={"xl"}
        component={Link}
        href="/"
        rel="noopener noreferrer"
        variant="subtle"
      >
        <IconHome />
      </ActionIcon>
    </Tooltip>
  );
}
