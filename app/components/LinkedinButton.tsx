import { ActionIcon, Tooltip } from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons-react";
import React from "react";

export default function LinkedinButton() {
  const linkedinUrl =
    "https://www.linkedin.com/in/swaraj-yadav-657801237/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BZgKpj5oASWivhIqqvMwIog%3D%3D";
  return (
    <Tooltip label="My LinkedIn">
      <ActionIcon
        size={"xl"}
        component="a"
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="subtle"
      >
        <IconBrandLinkedin />
      </ActionIcon>
    </Tooltip>
  );
}
