"use client";

import {
  Stack,
  Title,
  Text,
  Divider,
  Group,
  Center,
  Space,
  NavLink,
  Image,
  AspectRatio,
} from "@mantine/core";
import {
  IconBriefcase,
  IconFileCode,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <Center>
      <Stack>
        <Group>
          <AspectRatio ratio={1}>
            <Image
              alt="A picture of me"
              src="/selfie_smaller.png"
              h={80}
              w="auto"
              fit="contain"
              style={{ borderRadius: "50%" }}
            />
          </AspectRatio>
          <Title>Swaraj Yadav</Title>
          <Space />
        </Group>

        <Divider />
        <Text>
          Hi! I&apos;m a senior at the University of Michigan studying computer
          science.
        </Text>

        <Group>
          <NavLink
            href="/AboutMe"
            label="About me"
            leftSection={<IconUser size="1.5rem" stroke={1.5} />}
            variant="subtle"
            component={Link}
          />
          <NavLink
            href="/Education"
            label="Education"
            leftSection={<IconSchool size="1.5rem" stroke={1.5} />}
            variant="subtle"
            component={Link}
          />
          <NavLink
            href="/ExperiencesAndCareer"
            label="Experiences and Career"
            leftSection={<IconBriefcase size="1.5rem" stroke={1.5} />}
            variant="subtle"
            component={Link}

          />
          <NavLink
            href="/Projects"
            label="Projects"
            leftSection={<IconFileCode size="1.5rem" stroke={1.5} />}
            variant="subtle"
            component={Link}
          />
        </Group>
      </Stack>
    </Center>
  );
}
