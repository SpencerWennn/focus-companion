"use client";

import { useEffect, useState } from "react";

export type SessionItem = {
  id: string;
  title: string;
  startAt: string;
  endAt: string;
};

type Props = {
  onCreate: (start: Date, end: Date) => void;
  sessions: SessionItem[];
  onOpen: (id: string) => void;
};

export default function CalendarWeek({ onCreate, sessions, onOpen }: Props) {
  const [hours] = useState(Array.from({ length: 12 }, (_, i) => 7 + i)); // 7:00-18:00
  const [days] = useState(Array.from({ length: 5 }, (_, i) => i)); // Mon-Fri

  const base = new Date();
  const monday = new Date(base);
  const day = base.getDay(); // 0-6
  const diff = (day + 6) % 7; // days since Monday
  monday.setDate(base.getDate() - diff);

  const getSlotTime = (dayOffset: number, hour: number) => {
    return new Date(
      monday.getFullYear(),
      monday.getMonth(),
      monday.getDate() + dayOffset,
      hour,
      0,
      0
    );
  };

  const handleClickCell = (d: number, h: number) => {
    const start = getSlotTime(d, h);
    const end = new Date(start.getTime() + 25 * 60 * 1000);
    onCreate(start, end);
  };

  const findSession = (d: number, h: number) => {
    const slotStart = getSlotTime(d, h).getTime();
    return sessions.find((s) => {
      const st = new Date(s.startAt).getTime();
      return st === slotStart;
    });
  };

  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/60">
      <div className="grid grid-cols-[80px_repeat(5,1fr)] border-b border-slate-800 bg-slate-900/70 text-xs text-slate-300">
        <div className="px-3 py-2">Time</div>
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
          <div key={d} className="px-3 py-2 text-center">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[80px_repeat(5,1fr)] text-xs">
        {hours.map((h) => (
          <Fragment key={h}>
            <div className="border-t border-slate-900 px-2 py-2 text-right text-slate-400">
              {String(h).padStart(2, "0")}:00
            </div>
            {days.map((d) => {
              const s = findSession(d, h);
              return (
                <button
                  key={d}
                  className="border-t border-l border-slate-900 h-12 relative hover:bg-slate-800/60 transition-colors"
                  onClick={() => (s ? onOpen(s.id) : handleClickCell(d, h))}
                >
                  {s && (
                    <span className="absolute inset-1 rounded bg-sky-500/20 border border-sky-500/60 text-[11px] flex items-center justify-center text-sky-50">
                      {s.title}
                    </span>
                  )}
                </button>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

import { Fragment } from "react";
