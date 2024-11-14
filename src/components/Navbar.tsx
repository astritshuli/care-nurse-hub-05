import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="w-full py-4 px-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-nurse-200 dark:border-nurse-700 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-nurse-700 dark:text-nurse-300">NurseCare</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-nurse-600 hover:text-nurse-700 dark:text-nurse-300 dark:hover:text-nurse-200"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="text-nurse-600 hover:text-nurse-700 hover:bg-nurse-100 dark:text-nurse-300 dark:hover:text-nurse-200 dark:hover:bg-nurse-800"
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};