"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("demo@focus.ai");
  const [password, setPassword] = useState("test1234");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app you'd call next-auth signIn("credentials", ...)
    alert(
      "This demo is wired for NextAuth credentials, but the UI here is intentionally lightweight. Use demo@focus.ai / test1234."
    );
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-800 p-6">
        <div className="mb-4 text-center space-y-1">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Focus Companion
          </div>
          <h1 className="text-lg font-semibold text-slate-50">Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div className="space-y-1">
            <label className="block text-slate-300">Email</label>
            <input
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="block text-slate-300">Password</label>
            <input
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full rounded-lg bg-sky-600 hover:bg-sky-500 px-3 py-2 mt-2 text-xs font-semibold">
            Sign in (demo only)
          </button>
        </form>
      </div>
    </main>
  );
}
