import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="bg-banner bg-cover h-screen">
      <Header />
      <form className="bg-black bg-opacity-80 fixed w-8/12 md:w-6/12 lg:w-4/12 mx-auto sm:my-36 mt-44 right-0 left-0 text-neutral-50 p-4 sm:p-12 rounded-lg">
        <h1 className="font-bold text-lg sm:text-3xl py-2 sm:py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            id="mail"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-zinc-900 bg-opacity-75 rounded-lg"
          />
        )}
        <input
          type="text"
          id="mail"
          placeholder="Email or Mobile Number"
          className="p-4 my-2 w-full bg-zinc-900 bg-opacity-75 rounded-lg"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="p-4 my-2 w-full bg-zinc-900 bg-opacity-75 rounded-lg"
        />
        <button className="p-4 my-6 bg-rose-700 rounded-lg w-full text-neutral-50 font-semibold">
          Sign In
        </button>
        <p
          className="my-8 select-none font-semibold cursor-pointer"
          onClick={handleToggle}
        >
          New to Netflix? Sign Up Now
        </p>
      </form>
    </div>
  );
};
export default Login;
