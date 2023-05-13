import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Cookies from 'js-cookie'
import { useEffect } from "react";

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('x-access-token')

    if (token) {
      navigate('/welcome')
    }
  }, [])
  

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="border px-8 py-12 rounded-md w-96">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-4">Sign in to MERN</h1>
          <p className="text-sm text-gray-400">
            Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-800">Sign up here</Link>
          </p>
         
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
