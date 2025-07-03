
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here

    // On successful login
    navigate("/dashboard");
  };

  return (
     <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen font-sans">
      <header className="p-6 flex justify-between items-center bg-gradient-to-br from-black via-gray-900 ">
        <h1 className="text-2xl font-bold text-purple-500">RealAsset Tokenizer</h1>
        <nav>
                 <ul className="flex space-x-6 text-sm uppercase">
                  <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
                   <li><Link to="/dashboard" className="hover:text-purple-400">Dashboard</Link></li>
                   <li><Link to="/about" className="hover:text-purple-400">About</Link></li>
                   <li><Link to="/feature" className="hover:text-purple-400">Feature</Link></li>
                   <li><Link to="/marketplace" className="hover:text-purple-400">Marketplace</Link></li>
                  
                  <li><Link to="/login" className="hover:text-purple-400">Login</Link></li>
                 </ul>
               </nav>
      </header>
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center px-4 font-sans">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Welcome Back</h1>
        <p className="text-center text-gray-400 mb-8">Login to RealAsset Tokenizer</p>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-xl transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account? <a href="/signup" className="text-purple-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
    </div>
  );
}
