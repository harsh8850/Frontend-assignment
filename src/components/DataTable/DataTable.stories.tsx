import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;

const sampleData: User[] = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Sam Wilson", age: 28 },
];

// instead of dataIndex: "id"
const sampleColumns = [
  { key: "id", title: "ID", dataIndex: "id" as const },
  { key: "name", title: "Name", dataIndex: "name" as const },
  { key: "age", title: "Age", dataIndex: "age" as const },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: sampleColumns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: sampleColumns,
  },
};
