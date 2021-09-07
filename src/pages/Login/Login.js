import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div class="flex h-screen">
      <div class="m-auto">
        <h1>Welcome to Evan's fitness dashboard.</h1>
        <h2>This is a companion app to the <a className="underline" href="https://github.com/EvanDaley/webcam-posture-tracker">
          Posture Tracker.</a><br />
        </h2>
        <button className="uppercase h-12 mt-3 text-white w-full rounded bg-blue-700 hover:bg-blue-800"><i className="fa fa-google mr-2"></i>Log in with Google</button>
      </div>
    </div>
  )
}