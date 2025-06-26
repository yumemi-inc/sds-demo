import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import "../src/theme.css";
import theme from "./theme";

const preview: Preview = {
  parameters: {
    docs: {
      theme: theme,
    },
  },

  tags: [],
};

export default preview;
