import React from "react";

function SignUp() {
  return (
    <div className="w-1/2 bg-black text-white flex flex-col items-start gap-3 p-5">
      <div className="flex flex-wrap flex-col">
        <h3 className="text-4xl">SignUp</h3>
        <p>Use your open ID to Sign UP</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="/">Email</a>
        <p className="text-white border-r-2"></p>
        <a href="">Phone Number</a>
      </div>
      <div className="flex flex-col items-start">
        <p className="mb-5">Email</p>
        <input className="block bg-black ring-1 ring-white rounded-md" />
      </div>
      <div className="flex flex-col items-start">
        <p className="mb-5">Password</p>
        <input className="bg-black ring-1 ring-white rounded-md" />
      </div>
    </div>
  );
}

export default SignUp;
