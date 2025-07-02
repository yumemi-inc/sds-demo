import figma from "@figma/code-connect";
import { Accordion, AccordionItem } from "./Accordion";

figma.connect(AccordionItem, "<FIGMA_PRIMITIVES_ACCORDION_ITEM>", {
  props: {
    title: figma.string("Title"),
    children: figma.string("Content"),
    isExpanded: figma.enum("State", {
      Open: true,
      Closed: false,
    }),
  },
  example: ({ children, ...props }) => (
    <AccordionItem {...props}>
      {children}
    </AccordionItem>
  ),
});

figma.connect(Accordion, "<FIGMA_PRIMITIVES_ACCORDION>", {
  props: {
    children: figma.children(["AccordionItem"]),
    allowsMultipleExpanded: figma.boolean("Multiple Expanded", {
      true: true,
      false: false,
    }),
  },
  example: ({ children, ...props }) => (
    <Accordion {...props}>
      {children}
    </Accordion>
  ),
});