import Link from "next/link";
import React from "react";
import { logIn } from "../../action/user";
import { auth, signIn } from "../../auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <div>
      <div className="max-w-md border p-8 mx-auto bg-white rounded-xl space-y-3 shadow-xl">
        <h1 className="flex justify-center items-center text-[#27634D] text-3xl font-bold">
          Login
        </h1>
        <form action={logIn} className="space-y-6">
          <div className="space-y-2 text-sm">
            <label htmlFor="email" className="block">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
            />
          </div>
          <button className="w-full px-4 py-3 rounded-md bg-[#27634D] hover:bg-[#398e6f] text-white text-lg font-medium duration-200">
            Login
          </button>
        </form>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button className="w-full px-4 py-3 rounded-md hover:bg-gray-200 text-lg font-medium flex justify-center items-center gap-3 border duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 256 262"
            >
              <path
                fill="#4285f4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              />
              <path
                fill="#34a853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              />
              <path
                fill="#fbbc05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
              />
              <path
                fill="#eb4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              />
            </svg>
            Sign in with google
          </button>
        </form>
        <p className="flex justify-center items-center gap-2">
          Don't have an account?
          <Link href={"./sign-up"} className="text-indigo-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
