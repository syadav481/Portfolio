"use client";

import {
  Text, Container,
  Divider,
  Stack,
  Title, Tooltip, Group
} from "@mantine/core";

function Page() {
  return (
    <Container size="sm">
      <Stack>
        <Group style={{ marginTop: "5rem" }}>
          <Title h="h3">About Me</Title>
        </Group>
        <Divider variant="dotted" />
        <Tooltip label="I wanted to show my Valorant stats on this page but the Riot games won't give me an API key :(">
          <Text>
            Hi! I&apos;m a senior at UMich. Some things I&apos;m interested in
            are going to the gym, silly cats, playing VALORANT, and Systems
            Programming.
          </Text>
        </Tooltip>
      </Stack>
    </Container>
  );
}

export default Page;
