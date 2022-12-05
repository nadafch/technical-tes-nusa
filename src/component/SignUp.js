import React from "react";

function SignUp() {
  return (
    <div className="w-full bg-black text-white flex flex-col items-start gap-3 p-5 text-base font-medium">
      <div className="flex flex-wrap flex-col text-start">
        <h3 className="text-4xl mb-4 font-semibold">SignUp</h3>
        <p className="text-slate-400 font-normal">
          Use your open ID to Sign UP
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="/" className="hover:text-teal-500">
          Email
        </a>
        <p className="text-white border-r-2"></p>
        <a href="">Phone Number</a>
      </div>
      <div className="flex flex-col items-start w-full">
        <label className="mb-5">Email</label>
        <input className="block bg-black w-full p-3 ring-1 ring-white rounded-md" />
      </div>
      <div className="flex flex-col items-start w-full">
        <label className="mb-5">Password</label>
        <input className="block bg-black w-full p-3 ring-1 ring-white rounded-md" />
      </div>
      <div className="flex flex-col items-start w-full">
        <label className="mb-5">Confirm Password</label>
        <input className="block bg-black w-full p-3 ring-1 ring-white rounded-md" />
      </div>
      <div className="flex mt-2 mb-10">
        <p className="mr-5">Referal ID (Optional)</p>
        <button className="text-white">∨</button>
      </div>
      <div className="flex ml-3 mb-7">
        <input type="checkbox" className="w-10 h-10 mr-7 mx-auto my-auto" />
        <p className="font-normal text-slate-200 text-start">
          By signing up I agree that I'm 18 years of age or older, to the User
          Agreements, Privacy Policy, Cookie Policy, E-signing Consent
        </p>
      </div>
      <button className="w-full h-14 rounded-md text-center bg-gradient-to-br from-teal-300 to-sky-700">
        SignUp
      </button>
    </div>
  );
}

export default SignUp;
