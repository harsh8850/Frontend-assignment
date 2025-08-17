import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "This is a helper text",
  },
};

export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <InputField label="Outlined" placeholder="Outlined" variant="outlined" />
      <InputField label="Filled" placeholder="Filled" variant="filled" />
      <InputField label="Ghost" placeholder="Ghost" variant="ghost" />
    </div>
  ),
};

export const WithClearButton: Story = {
  args: {
    label: "Search",
    placeholder: "Type something...",
    clearable: true,
  },
};

export const PasswordToggle: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    togglePassword: true,
    type: "password",
  },
};

export const DarkTheme: Story = {
  args: {
    label: "Dark Mode Input",
    placeholder: "Type here...",
    helperText: "Dark theme example",
    theme: "dark",
    variant: "outlined",
    clearable: true,
  },
};

export const CombinedDemo: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <InputField label="Search with Clear" placeholder="Search..." clearable />
      <InputField
        label="Password with Toggle"
        placeholder="Enter password"
        togglePassword
        type="password"
      />
      <InputField
        label="Dark Mode Search"
        placeholder="Dark input..."
        clearable
        theme="dark"
        variant="outlined"
      />
      <InputField
        label="Dark Mode Password"
        placeholder="Enter password"
        togglePassword
        type="password"
        theme="dark"
      />
    </div>
  ),
};
