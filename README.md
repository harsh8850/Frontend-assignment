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

## 📄 License  
This project is licensed under the MIT License.  
