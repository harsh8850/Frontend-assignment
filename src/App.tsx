import React from "react";
import { InputField } from "./components/InputField/InputField";
import { DataTable } from "./components/DataTable/DataTable";

function App() {
  const data = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
  ];

  const columns = [
    { key: "id", title: "ID", dataIndex: "id" as const },
    { key: "name", title: "Name", dataIndex: "name" as const },
    { key: "age", title: "Age", dataIndex: "age" as const },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">UI Components</h1>
      <InputField
        label="Username"
        placeholder="Enter username"
        helperText="This is a helper text"
      />
      <div className="mt-6">
        <DataTable data={data} columns={columns} selectable />
      </div>
    </div>
  );
}

export default App;
