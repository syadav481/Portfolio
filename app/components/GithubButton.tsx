import { ActionIcon } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import React from "react";

export default function GithubButton() {
  const githubUrl = "https://github.com/syadav481";
  return (
    <ActionIcon
      size={"xl"}
      component="a"
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant="subtle"
    >
      <IconBrandGithub />
    </ActionIcon>
  );
}
