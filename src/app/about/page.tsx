"use client";

import { ActionIcon, AppShell, Flex, Paper, Space, Text } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  const height = 60;

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <AppShell header={{ height: height }} padding={"md"}>
      <AppShell.Header>
        <Flex
          h={height}
          bg={"green"}
          gap={"md"}
          justify={"center"}
          align={"center"}
          direction={"row"}
          wrap={"nowrap"}
        >
          <h1>NearBites</h1>
          <ActionIcon
            variant={"outline"}
            color={"black"}
            radius={"md"}
            size={"md"}
            onClick={handleHomeClick}
          >
            <IconHome />
          </ActionIcon>
        </Flex>
      </AppShell.Header>

      <AppShell.Main>
        <Paper shadow={"sm"} radius={"md"} p={"sm"} withBorder>
          <Text>
            Data provided by{" "}
            <a href={"https://www.openstreetmap.org/"} title={"OpenStreetMap"}>
              OpenStreetMap
            </a>{" "}
            with{" "}
            <a href={"https://overpass-turbo.eu/"} title={"OverpassAPI"}>
              OverpassAPI
            </a>
          </Text>
        </Paper>
        <Space h={"md"} />
        <Paper shadow={"sm"} radius={"md"} p={"sm"} withBorder>
          <Text>
            Icons made by{" "}
            <a
              href={"https://www.flaticon.com/authors/hqrloveq"}
              title={"hqrloveq"}
            >
              hqrloveq
            </a>{" "}
            from{" "}
            <a href={"https://www.flaticon.com/"} title={"Flaticon"}>
              'www.flaticon.com'
            </a>
          </Text>
        </Paper>
      </AppShell.Main>
    </AppShell>
  );
};
export default About;
