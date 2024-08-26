import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript, Space } from "@mantine/core";
import { theme } from "../theme";
import "@mantine/spotlight/styles.css";
import AppShellNavbar from "./components/AppShellNavbar";

export const metadata = {
  title: "Swaraj Yadav",
  description: "My portfolio site",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <AppShellNavbar />
          {children}
          <Space style={{ marginBottom: '2rem' }} />
        </MantineProvider>
      </body>
    </html >
  );
}
