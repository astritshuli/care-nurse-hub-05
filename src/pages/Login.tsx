import { AuthForm } from "@/components/AuthForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nurse-100 to-white p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-nurse-700 mb-8 fade-in">
          NurseCare Portal
        </h1>
        <AuthForm />
      </div>
    </div>
  );
};

export default Login;