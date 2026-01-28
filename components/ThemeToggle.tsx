"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light";
    if (savedTheme) setTheme(savedTheme);
    else setTheme("light");
  }, []);

  // Apply theme class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))}
      className="w-12 h-12 flex items-center justify-center rounded-full border border-black/20 dark:border-white/20 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
