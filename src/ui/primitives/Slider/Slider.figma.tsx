import figma from "@figma/code-connect";
import { SliderField } from "./Slider";

figma.connect(SliderField, "<FIGMA_INPUTS_SLIDER_FIELD>", {
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
  },
  example: ({ ...props }) => <SliderField {...props} showOutput />,
});
