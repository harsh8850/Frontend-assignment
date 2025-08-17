# 🎨 React Component Development Assignment  

This project contains two reusable **UI components** built with **React, TypeScript, TailwindCSS, and Storybook**.  
The focus is on **scalable architecture, accessibility, and clean design**.  

---

## 🚀 Components  

### 1️⃣ InputField  
A flexible input component with validation, variants, and multiple states.  

**Features:**  
- Text input with **label, placeholder, helper text, and error message**  
- States: `disabled`, `invalid`, `loading`  
- Variants: `filled`, `outlined`, `ghost`  
- Sizes: `sm`, `md`, `lg`  
- Optional:  
  - 🔄 Clear button  
  - 👁 Password visibility toggle  
  - 🌗 Light & dark theme support  

**Props:**  
```ts
interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}
```

---

### 2️⃣ DataTable  
A customizable data table with sorting and selection.  

**Features:**  
- Display **tabular data**  
- **Column sorting**  
- **Row selection** (single/multiple)  
- **Loading state**  
- **Empty state**  

**Props:**  
```ts
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}
```

---

## 📂 Project Structure  
```
📦 react-ui-components  
├── src  
│   ├── components  
│   │   ├── InputField  
│   │   │   ├── InputField.tsx  
│   │   │   ├── InputField.test.tsx  
│   │   │   ├── InputField.stories.tsx  
│   │   │   └── index.ts  
│   │   ├── DataTable  
│   │   │   ├── DataTable.tsx  
│   │   │   ├── DataTable.test.tsx  
│   │   │   ├── DataTable.stories.tsx  
│   │   │   └── index.ts  
│   ├── index.ts  
│   └── styles (Tailwind setup)  
├── .storybook (Storybook config)  
├── package.json  
├── tsconfig.json  
└── README.md  
```

---

## 🛠️ Tech Stack  
- ⚛️ **React 18+**  
- 🟦 **TypeScript**  
- 🎨 **TailwindCSS**  
- 📚 **Storybook** (UI documentation)  
- ✅ **Jest + React Testing Library** (unit testing)  

---

## 📘 Usage  

### Install dependencies  
```bash
npm install
# or
yarn install
```

### Run Storybook  
```bash
npm run storybook
```
Storybook will be available at [http://localhost:6006](http://localhost:6006).  

### Run Tests  
```bash
npm test
```

### Build Project  
```bash
npm run build
```

---

## 🌐 Deployment  
- Storybook deployed via **Chromatic** or **Vercel**  
- GitHub repository contains full source code and setup instructions  

---

## 📸 Demo & Preview  
- Storybook Live: [LINK_HERE]  
- Vercel Preview: [LINK_HERE]  
- (Optional) GIFs or screenshots showing interactive states  

---

## ✅ Requirements Checklist  
✔ TypeScript with proper typing  
✔ Responsive design  
✔ Basic accessibility (ARIA labels)  
✔ Clean, modern styling with TailwindCSS  
✔ Unit tests included  
✔ Storybook documentation  

---
📝 Approach

The main goal of this project was to build scalable, reusable, and accessible UI components with modern React patterns.

1. Project Setup

Used React + TypeScript to enforce strict typing and catch errors at compile time.

Configured TailwindCSS for utility-first styling and responsiveness.

Added Storybook for component documentation and interactive previews.

Configured Jest + React Testing Library for unit testing.

2. Component Design Principles

Reusability → Both InputField and DataTable were designed with flexible props and multiple states/variants.

Accessibility (a11y) → Added ARIA labels, keyboard navigation, and semantic markup.

Scalability → Components were placed in isolated folders with their own tests, stories, and styles.

Consistency → Followed a unified design system approach (variants, sizes, and themes).

3. InputField Component

Implemented variants (filled, outlined, ghost) and sizes (sm, md, lg) using TailwindCSS classes.

Added validation states (invalid, disabled, loading).

Built optional features: clear button, password toggle, and theme support.

Focused on accessibility: associated label with input, added ARIA attributes for errors and helper text.

4. DataTable Component

Designed a generic table using TypeScript generics (DataTableProps<T>).

Added sortable columns with simple sorting logic.

Implemented row selection with single and multiple modes.

Included loading state (spinner placeholder) and empty state fallback message.

Ensured responsiveness with TailwindCSS (horizontal scrolling on small devices).

5. Documentation & Testing

Storybook stories cover different states, variants, and edge cases.

Added unit tests with Jest to validate rendering, props handling, and interactions.

Ensured code readability with clear naming and separation of concerns.

## 📄 License  
This project is licensed under the MIT License.  
