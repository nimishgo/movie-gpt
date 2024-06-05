import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClickForm = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMsg(message);
  };

  return (
    <div className="bg-black sm:bg-banner sm:bg-cover h-screen">
      <Header />
      <form
        className="bg-black bg-opacity-80 fixed w-8/12 md:w-6/12 lg:w-4/12 mx-auto sm:my-36 mt-44 right-0 left-0 text-neutral-50 p-4 sm:p-12 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-lg sm:text-3xl py-2 sm:py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            id="mail"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-zinc-900 bg-opacity-75 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          id="mail"
          placeholder="Email or Mobile Number"
          className="p-4 my-2 w-full bg-zinc-900 bg-opacity-75 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          id="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-zinc-900 bg-opacity-75 rounded-lg"
        />
        <p className="text-rose-700 py-2 font-bold">{errorMsg}</p>
        <button
          className="p-4 my-4 bg-rose-700 rounded-lg w-full text-neutral-50 font-semibold hover:bg-rose-400"
          onClick={handleClickForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
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
