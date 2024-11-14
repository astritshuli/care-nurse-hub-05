import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock authentication - in a real app, you'd integrate with a backend
    if (email && password) {
      toast.success(`Successfully ${isLogin ? "logged in" : "signed up"}!`);
      navigate("/dashboard");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto glass-card fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center text-nurse-700">
          {isLogin ? "Welcome Back" : "Create Account"}
        </CardTitle>
        <CardDescription className="text-center">
          {isLogin
            ? "Enter your credentials to access your account"
            : "Fill in your information to get started"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-nurse-500 hover:bg-nurse-600">
            {isLogin ? "Sign In" : "Sign Up"}
          </Button>
          <p className="text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-nurse-500 hover:text-nurse-600 font-medium"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};