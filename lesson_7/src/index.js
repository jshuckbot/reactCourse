import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";

const container = document.getElementById("root"); // Получаем ссылку на контейнер
const root = createRoot(container); // Создаем корень приложения

// Используем root.render для рендеринга компонента App
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
