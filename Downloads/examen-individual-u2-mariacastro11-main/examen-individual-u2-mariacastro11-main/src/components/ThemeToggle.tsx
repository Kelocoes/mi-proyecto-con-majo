import React from "react";

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <button
      className="p-2 border rounded bg-gray-200 dark:bg-gray-700"
      onClick={toggleTheme}
    >
      Cambiar a {theme === "light" ? "oscuro" : "claro"}
    </button>
  );
};

export default ThemeToggle;
