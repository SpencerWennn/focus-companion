import Link from "next/link";
import CalendarWeek, { SessionItem } from "@/components/CalendarWeek";

async function getSessions(): Promise<SessionItem[]> {
  const res = await fetch("http://localhost:3000/api/sessions", {
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

export default async function HomePage() {
  const sessions = await getSessions();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-xs font-bold">
              FC
            </div>
            <div>
              <div className="font-semibold text-slate-100 text-sm">
                Focus Companion
              </div>
              <div className="text-[11px] text-slate-400">
                Virtual co-working with an AI companion
              </div>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-xs">
            <Link
              href="/login"
              className="px-3 py-1.5 rounded-full border border-slate-700 hover:border-sky-500 hover:text-sky-100 transition-colors"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-[260px_minmax(0,1fr)] gap-6">
        <aside className="space-y-4">
          <button className="w-full h-40 rounded-2xl bg-sky-600 hover:bg-sky-500 text-slate-50 font-semibold text-sm shadow-lg shadow-sky-900/40">
            Book session
          </button>
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 text-xs space-y-3">
            <div>
              <div className="font-semibold mb-1 text-slate-100">
                Session settings
              </div>
              <p className="text-slate-400">
                Click on a calendar cell to create a 25-minute focus session.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 text-xs space-y-2">
            <div className="font-semibold text-slate-100 mb-1">
              How to use this demo
            </div>
            <ul className="list-disc pl-4 space-y-1 text-slate-400">
              <li>Log in as <code>demo@focus.ai</code> / <code>test1234</code>.</li>
              <li>Click any empty calendar cell to create a session.</li>
              <li>Click a blue session block to open the room view.</li>
            </ul>
          </div>
        </aside>

        <section className="space-y-4">
          <CalendarWeek
            sessions={sessions}
            onCreate={async (start, end) => {
              "use server";
            }}
            onOpen={() => {}}
          />
          <p className="text-xs text-slate-500">
            Note: this server component version shows the layout; to wire up
            booking, you can use a client component wrapper that calls
            <code> /api/sessions</code>.
          </p>
        </section>
      </div>
    </main>
  );
}
