import { prisma } from "@/lib/prisma";
import VideoRoom from "@/components/VideoRoom";

type Props = { params: { id: string } };

export default async function SessionPage({ params }: Props) {
  const session = await prisma.session.findUnique({
    where: { id: params.id },
  });

  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
        <div className="text-sm text-slate-300">Session not found.</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 mb-1">Focus session</div>
            <div className="font-semibold text-slate-100 text-sm">
              {session.title}
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-6 py-6 h-[calc(100vh-64px)]">
        <VideoRoom sessionTitle={session.title} />
      </div>
    </main>
  );
}
