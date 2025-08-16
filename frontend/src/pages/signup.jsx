// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Signup() {
//   const [user, setUser] = useState({
//     userName: "",
//     email: "",
//     password: "",
//   });
//   const handleInput = (e) => {
//     console.log(e);
//     let name = e.target.name;
//     let value = e.target.value;

//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // alert(user)
//     console.log(user);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 to-purple-700 p-4">
//       <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-xl shadow-xl w-full max-w-sm p-8">
//         <form onSubmit={handleSubmit}>
//           <h2 className="text-white text-2xl font-bold text-center mb-6">
//             Sign up
//           </h2>

//           <label htmlFor="username" className="text-white">
//             Name
//           </label>
//           <input
//             type="text"
//             name="userName"
//             placeholder="Username"
//             id="username"
//             required
//             autoComplete="off"
//             value={user.userName}
//             onChange={handleInput}
//             className="w-full px-4 py-2 mb-4 rounded-md bg-gray-100 focus:outline-none focus:border-2  focus:border-purple-500"
//           />
//           <label htmlFor="email" className="text-white">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Password"
//             id="email"
//             required
//             autoComplete="off"
//             value={user.email}
//             onChange={handleInput}
//             className="w-full px-4 py-2 mb-4 rounded-md bg-gray-100 focus:outline-none focus:border-2  focus:border-purple-500"
//           />
//           <label htmlFor="password" className="text-white">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             id="password"
//             required
//             autoComplete="off"
//             value={user.password}
//             onChange={handleInput}
//             className="w-full px-4 py-2 mb-6 rounded-md bg-gray-100 focus:outline-none focus:border-2  focus:border-purple-500"
//           />

//           <button className="w-full py-2 mb-4 rounded-md bg-purple-500 text-white font-semibold hover:bg-purple-600 transition duration-300">
//             Sign up
//           </button>

//           <div className="text-center">
//             <Link to="/login">
//               <button className="text-purple-100 text-xs">
//                 Already have an account?{" "}
//                 <i className="text-purple-100 text-xl hover:underline">Login</i>
//               </button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending user:", user);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", user);
      alert(res.data.message);
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 to-purple-700 p-4">
      <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-xl shadow-xl w-full max-w-sm p-8">
        <form onSubmit={handleSubmit}>
          <h2 className="text-white text-2xl font-bold text-center mb-6">
            Sign up
          </h2>

          <label htmlFor="username" className="text-white">
            Name
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleInput}
            className="w-full px-4 py-2 mb-4 rounded-md bg-gray-100"
          />

          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
            className="w-full px-4 py-2 mb-4 rounded-md bg-gray-100"
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
            className="w-full px-4 py-2 mb-6 rounded-md bg-gray-100"
          />

          <button className="w-full py-2 mb-4 rounded-md bg-purple-500 text-white font-semibold hover:bg-purple-600 transition duration-300">
            Sign up
          </button>

          <div className="text-center">
            <Link to="/login">
              <button className="text-purple-100 text-xs">
                Already have an account?{" "}
                <i className="text-purple-100 text-xl hover:underline">
                  Login
                </i>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

