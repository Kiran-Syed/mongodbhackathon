import React from "react";
import { useState } from "react";

export default function Login() {

    const [user, setUser] = useState({
        email:"",
        password:""
    
      })

 const handleInput = (e)=>{
     console.log(e);
     let name = e.target.name;
     let value = e.target.value

     setUser({
      ...user,
      [name]:value,
     })
  };

  return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 to-purple-700 p-4">
        <form action="">
            <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-xl shadow-xl w-full max-w-sm p-8">
          <h2 className="text-white text-2xl font-bold text-center mb-6">
            Login
          </h2>

          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Password"
            id="email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
            className="w-full px-4 py-2 mb-4 rounded-md bg-gray-100 focus:outline-none focus:border-2  focus:border-purple-500"
          />
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInput}
            className="w-full px-4 py-2 mb-6 rounded-md bg-gray-100 focus:outline-none focus:border-2  focus:border-purple-500"
          />
           <Link to="../pages/components\header.jsx">
           <button className="w-full py-2 mb-4 rounded-md bg-purple-500 text-white font-bold hover:bg-purple-600 transition duration-300">
            Login
          </button>
           </Link>
        </div>
        </form>
      </div>
    
  );
}
