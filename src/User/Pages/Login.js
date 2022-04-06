import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", 
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login successful");
      navigate("/following");
    }
  };

  return (
    <div>
      <div
        class="bg-login
                      w-full bg-cover bg-no-repeat flex h-screen justify-center items-center "
      >
        <div class="bg-gray-100 p-8 rounded-3xl shadow-x1 w-80 m-0 flex-col">
          <h2 class="text-3xl text-center font-bold mb-4 text-indigo-500">
            Login
          </h2>
          <form method="POST" class="space-y-4">
            <div>
              <label class="block mb-1 font-bold text-gray-500">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-blue-400"
              ></input>
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Password</label>
              <input
                type="password"
                name="email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-blue-400"
              ></input>
            </div>

            <button
              class="block w-full bg-yellow-300 p-4 rounded text-indigo-500 hover:bg-yellow-500 hover:text-white font-bold transition duration-300"
              onClick={loginUser}
            >
              Login
            </button>
            <div class="italic text-blue-600 hover:text-blue-800 visited:text-purple-600">
              <Link to="/signup">Don't have an Account? SignUp here!</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
