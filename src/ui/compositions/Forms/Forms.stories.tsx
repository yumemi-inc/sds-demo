import { Meta, StoryObj } from "@storybook/react-vite";
import { FormBox } from "./Forms";
import { Button, ButtonGroup, CheckboxField, InputField } from "primitives";

const meta: Meta<typeof FormBox> = {
  component: FormBox,
  title: "SDS Compositions/Forms",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryFormBox: StoryObj<typeof FormBox> = {
  name: "Forms",
  render: (args) => (
    <FormBox {...args} onSubmit={() => {}}>
      <InputField label="Email" />
      <InputField label="Password" />
      <CheckboxField label="Label" description="Description" />
      <ButtonGroup align="justify">
        <Button onPress={() => {}} variant="primary">
          Register
        </Button>
      </ButtonGroup>
    </FormBox>
  ),
};
