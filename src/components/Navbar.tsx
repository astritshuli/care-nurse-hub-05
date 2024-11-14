import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm border-b border-nurse-200 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-nurse-700">NurseCare</span>
        </div>
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="text-nurse-600 hover:text-nurse-700 hover:bg-nurse-100"
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};