import figma from "@figma/code-connect";
import { Accordion, AccordionItem } from "./Accordion";

figma.connect(AccordionItem, "<FIGMA_PRIMITIVES_ACCORDION_ITEM>", {
  props: {
    title: figma.string("Title"),
    children: figma.string("Content"),
    state: figma.enum("State", {
      Open: undefined,
      Closed: undefined,
    }),
  },
  example: ({ title, children, ...props }) => (
    <AccordionItem title={title} {...props}>
      {children}
    </AccordionItem>
  ),
});

figma.connect(Accordion, "<FIGMA_PRIMITIVES_ACCORDION>", {
  props: {
    children: figma.children(["Accordion Item"]),
  },
  example: ({ children, ...props }) => (
    <Accordion {...props}>
      {children}
    </Accordion>
  ),
});