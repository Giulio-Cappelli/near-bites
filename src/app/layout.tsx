import "@mantine/core/styles.css";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";
import "./layout.css";

import { MantineProvider, createTheme, mantineHtmlProps } from "@mantine/core";

export const metadata = {
  title: "Near Bites",
  description: "Search restaurant around you!",
};

const theme = createTheme({
  colors: {
    green: [
      "#eef9f0",
      "#e1eee3",
      "#c1dbc6",
      "#9fc7a7",
      "#82b68c",
      "#6fab7b",
      "#65a671",
      "#549160",
      "#488154",
      "#3a7045",
    ],
  },
  primaryColor: "green",
  fontFamily: "Open Sans, sans-serif",
  components: {
    Paper: {
      styles: {
        root: {
          border: "1px solid green",
        },
      },
    },
  },
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang={"en"} {...mantineHtmlProps}>
      <head></head>
      <body>
        <MantineProvider theme={theme} forceColorScheme={"light"}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
};
export default RootLayout;
