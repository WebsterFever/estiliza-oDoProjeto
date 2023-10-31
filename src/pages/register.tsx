
import RegisterForm from "@/components/Register/register";
import { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <main className="body min-h-screen flex items-center justify-center">
      <RegisterForm />
    </main>
  );
};

export default Register;
