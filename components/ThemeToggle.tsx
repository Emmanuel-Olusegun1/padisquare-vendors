"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light"); // default light

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
      className="text-sm px-3 py-1.5 rounded-md border border-black/20 dark:border-white/20 hover:border-[#159C47]/70 bg-white dark:bg-black text-black dark:text-white transition"
    >
      {theme === "dark" ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
