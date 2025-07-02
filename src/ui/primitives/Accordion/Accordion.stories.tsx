import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionItem } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "SDS Primitives/Data Display",
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
        <AccordionItem title="What is this component?">
          Answer the frequently asked question in a simple sentence, a longish
          paragraph, or even in a list.
        </AccordionItem>
        <AccordionItem title="How do I use it?">
          You can use this accordion component to display collapsible content
          sections. Each item can be expanded to reveal more information.
        </AccordionItem>
        <AccordionItem title="Can I customize it?">
          Yes, you can customize the appearance using CSS variables and modify
          the behavior through props like allowsMultipleExpanded.
        </AccordionItem>
      </Accordion>
    </div>
  ),
};