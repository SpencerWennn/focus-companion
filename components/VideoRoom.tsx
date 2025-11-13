"use client";

type Props = {
  sessionTitle: string;
};

export default function VideoRoom({ sessionTitle }: Props) {
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-6 h-full">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 flex-1 min-h-[260px]">
          <div className="rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 text-sm">
            <div className="text-center">
              <div className="text-4xl mb-2">🧑‍💻</div>
              <div>You</div>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 text-sm">
            <div className="text-center">
              <div className="text-4xl mb-2">🤖</div>
              <div>Nova (AI companion)</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-900 border border-slate-700 p-4 text-sm text-slate-200 space-y-2">
          <div className="font-semibold text-slate-100">{sessionTitle}</div>
          <p className="text-slate-300">
            This is a placeholder focus room. In a real product, this would host
            a WebRTC video call (e.g., LiveKit) and a chat panel powered by an
            LLM.
          </p>
        </div>
      </div>
      <div className="rounded-2xl bg-slate-900 border border-slate-700 p-4 flex flex-col gap-4">
        <div>
          <div className="font-semibold text-slate-100 mb-1">Nova is here</div>
          <p className="text-xs text-slate-300">
            I&apos;m your quiet coworker. Stay on task, and if you get stuck,
            you can imagine asking me for help or support.
          </p>
        </div>
        <div className="text-xs text-slate-400">
          <p className="mb-1 font-semibold text-slate-200">Session tips</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Write down your top 1–2 goals for this session.</li>
            <li>Mute notifications on your phone and laptop.</li>
            <li>Use the calendar to schedule your next session.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
