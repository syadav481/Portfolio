"use client"

import { Text, Image, Container, Divider, Stack, Title, Grid, Tooltip, AspectRatio, Button, Group, ActionIcon, LoadingOverlay, Loader, Center } from "@mantine/core";
import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { IconCat } from "@tabler/icons-react";

function Page() {
  const [catImageUrl, setCatImageUrl] = useState<string>('');

  const getCat = async () => {
    setCatImageUrl('')
    try {
      const reqUrl = `https://cataas.com/cat?${new Date().getTime()}`
      const response = await axios.get<string>(reqUrl);

      console.log('old', catImageUrl)
      setCatImageUrl(response.request.responseURL);
      console.log('new', catImageUrl)
    } catch (error) {
      console.error('Error fetching the cat image:', error);
    }
  };

  useEffect(() => { getCat() }, [])

  return (
    <Container size="sm">
      <Stack>
        <Group style={{ marginTop: "5rem" }}>
          <Title h="h3" >
            About Me
          </Title>
          <Tooltip label="Get a cat! You might have to wait a little...">
            <ActionIcon variant="subtle">
              <IconCat onClick={getCat} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <Divider variant="dotted" />
        <Tooltip label="I wanted to show my Valorant stats on this page but the Riot games won't give me an API key :(">
          <Text>
            Hi! I'm a senior at UMich. Some things I'm interested in are
            going to the gym, silly cats, playing
            VALORANT, and Systems Programming.
          </Text>
        </Tooltip>
        <Grid grow>
          <Tooltip label="My main on Valorant">
            <Grid.Col span={4}>
              <AspectRatio ratio={0.5}>
                <Image alt="An image of Omen from Valorant" src="/omen.png" />
              </AspectRatio>
            </Grid.Col>
          </Tooltip>

          <Grid.Col span={8}>
            <AspectRatio ratio={1}>
              {
                catImageUrl === ''
                  ? (
                    <Tooltip label="wait for it...">
                      <Center>
                        <Loader />
                      </Center>
                    </Tooltip>
                  )
                  : (
                    <Tooltip label="CAT 😼">
                      <Image radius="lg" alt="An image of a cat" src={catImageUrl} />
                    </Tooltip>
                  )
              }
            </AspectRatio>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container >
  );
}

export default Page;
