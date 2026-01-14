"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
   
    console.log({ name, email, message });

    // clear form
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Contact Us</h1>

      <form
        onSubmit={(e)=> {
             e.preventDefault();
            handleSubmit()        
        }}
        className="rounded-lg  p-6 shadow-md"
      >
        {/* Name */}
        <div className="mb-4">
          <label className="mb-1 block font-medium">Name</label>
          <input
            type="text"
            className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="mb-1 block font-medium">Email</label>
          <input
            type="email"
            className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="mb-1 block font-medium">Message</label>
          <textarea
            className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
