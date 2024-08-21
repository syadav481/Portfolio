import { ActionIcon } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export default function HomeButton() {
  return (
    <ActionIcon
      size={"xl"}
      component={Link}
      href="/"
      rel="noopener noreferrer"
      variant="subtle"
    >
      <IconHome />
    </ActionIcon>
  );
}
