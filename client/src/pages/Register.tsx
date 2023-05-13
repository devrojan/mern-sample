import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="border px-8 py-12 rounded-md w-96">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-4">Sign Up</h1>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
