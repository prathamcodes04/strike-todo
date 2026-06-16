# ✅ Strike Todo

A modern and responsive Todo application built with React that helps users efficiently manage their daily tasks. Strike Todo provides a clean interface for creating, organizing, updating, and tracking tasks to improve productivity.

## 🚀 Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as completed
- 🗑️ Delete tasks
- 📌 Newly added tasks appear at the top of the list
- 🔍 Real-time task updates using controlled inputs
- 📱 Responsive design for desktop and mobile devices
- ⚡ Fast and lightweight React application

## 🛠️ Tech Stack

- React
- TypeScript / JavaScript
- CSS
- Vite
- React Hooks (`useState`, `useEffect`, `useMemo` if used)

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── TodoForm
│   ├── TodoList
│   └── TodoItem
│
├── App.tsx
├── main.tsx
└── styles/
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/prathamcodes04/strike-todo.git
```

### 2. Navigate to the project directory

```bash
cd strike-todo
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:5173
```

## 🧠 Learning Concepts Used

This project demonstrates:

- React Components
- Props
- State Management with `useState`
- Controlled Inputs
- Array Methods (`map`, `filter`)
- Event Handling
- Conditional Rendering
- TypeScript Types and Interfaces
- Component Reusability

## 📸 Screenshots

Add screenshots of your application here.

```md
![Home Page](./screenshots/home.png)
```

## 🎯 Future Improvements

- Task categories
- Due dates
- Drag and drop task sorting
- Dark mode
- Local Storage persistence
- Backend integration
- User authentication

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

## 👨‍💻 Author

**Pratham Gupta**

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub.

## 📄 License

This project is licensed under the MIT License.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
