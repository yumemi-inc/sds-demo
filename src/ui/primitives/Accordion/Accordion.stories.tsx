import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionItem } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "SDS Primitives/Accordion",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryAccordion: StoryObj<typeof Accordion> = {
  name: "Accordion",
  args: {
    allowsMultipleExpanded: false,
  },
  argTypes: {
    allowsMultipleExpanded: {
      control: { type: "boolean" },
    },
  },
  render: ({ ...props }) => (
    <div style={{ width: 640 }}>
      <Accordion {...props}>
        <AccordionItem title="What is Simple Design System?">
          Simple Design System is a React-based design system with deep Figma integration through Code Connect.
        </AccordionItem>
        <AccordionItem title="How do I use components?">
          Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
        </AccordionItem>
        <AccordionItem title="Can I customize the theme?">
          Yes, the system uses CSS custom properties for design tokens that can be customized.
        </AccordionItem>
        <AccordionItem title="Is TypeScript supported?">
          Yes, all components are built with TypeScript and include comprehensive type definitions.
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const StoryAccordionItem: StoryObj<typeof AccordionItem> = {
  name: "Accordion Item",
  args: {
    title: "Accordion Item Title",
    children: "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
  },
  argTypes: {
    title: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
  },
  render: ({ title, children, ...props }) => (
    <div style={{ width: 640 }}>
      <Accordion>
        <AccordionItem title={title} {...props}>
          {children}
        </AccordionItem>
      </Accordion>
    </div>
  ),
};