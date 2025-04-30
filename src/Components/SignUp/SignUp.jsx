// @ts-nocheck

import React, { useContext } from "react";
import { NavLink } from "react-router";

import { AuthContext } from "../../Context/AuthContext";
const SignUp = () => {
  const { SignUp } = useContext(AuthContext);
  const handleFormSubmitWithSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;

    console.log(name, email, password, confirmPassword);

    if (password.length < 6) {
      alert(" Password must be equal or grater than 6");
      return;
    }
    if (password !== confirmPassword) {
      alert(" Password  and  confirm Password must be same ");
      return;
    }
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!strongPasswordRegex.test(password)) {
      alert(
        "Password must contain at least 6 characters, including uppercase, lowercase, number, and special character."
      );
      return;
    }

    SignUp(email, password)
      .then((result) => {
        console.log(result);
        alert("Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex mx-auto mt-5 flex-col max-w-md p-6 rounded-md sm:p-10 bg-black text-white">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm dark:text-gray-600">Sign Up new account</p>
        </div>
        <form
          onSubmit={handleFormSubmitWithSignUp}
          noValidate
          action=""
          className="space-y-12"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe "
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Confirm Password
              </label>
              <input
                type="text"
                name="confirm_password"
                id="confirm_password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-green-600 text-white cursor-pointer"
            >
              Sign Up
            </button>
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account?{" "}
              <NavLink to="/signin" className="hover:underline text-green-500">
                Sign In
              </NavLink>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
