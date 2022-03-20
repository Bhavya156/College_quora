import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

  const navigate = useNavigate(); // to use the navigation functionality of React router
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  }); //store user data in state

  //*****************start of handleInputs method************************//
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };//set values of the fields in user according to the values entered in the respective input fields


  //*****************start of postData method************************//
  const postData = async (e) => {
    try {
      e.preventDefault();//prevent the page from being refreshed
      const { fName, lName, email, password } = user; //object destructuring for user

      const res = await fetch("/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          fName,
          lName,
          email,
          password,
        }),
      }); //sending data to the server via fetch API

      const data = await res.json();

      if (data.status === 422 || !data) {
        window.alert("Registration Unsuccessful");
      } else {
        window.alert("Registration Successful");
        navigate("/login");
      } //checking for registration errors and confirming status to the user
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div
        className="bg-login
                      w-full  h-screen bg-cover bg-no-repeat flex  justify-center items-center"
      >
        <form method="POST">
          <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-96 overflow-hidden py-0  mb-10">
            <div class="md:flex w-full">
              <div class="w-full py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                  <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
                  <p>Enter your information to register</p>
                </div>
                <div>
                  <div class="flex -mx-3">
                    <div class="w-1/2 px-3 mb-5">
                      <label for="" class="text-xs font-semibold px-1">
                        First Name
                      </label>
                      <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          name="fName"
                          type="text"
                          class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          value={user.fName}
                          onChange={handleInputs}
                        ></input>
                      </div>
                    </div>
                    <div class="w-1/2 px-3 mb-5">
                      <label for="" class="text-xs font-semibold px-1">
                        Last name
                      </label>
                      <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          name="lName"
                          type="text"
                          class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          value={user.lName}
                          onChange={handleInputs}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label for="" class="text-xs font-semibold px-1">
                        Email
                      </label>
                      <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          name="email"
                          type="email"
                          class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          value={user.email}
                          onChange={handleInputs}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-12">
                      <label for="" class="text-xs font-semibold px-1">
                        Password
                      </label>
                      <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          name="password"
                          type="password"
                          class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          value={user.password}
                          onChange={handleInputs}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <button
                        class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                        onClick={postData}
                      >
                        REGISTER NOW
                      </button>
                    </div>
                  </div>

                  <div className="italic text-blue-600 hover:text-blue-800">
                    <Link to="/">Already have an Account? Login here!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
