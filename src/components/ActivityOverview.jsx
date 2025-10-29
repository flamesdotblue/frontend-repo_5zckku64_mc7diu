import { Activity, Smartphone } from 'lucide-react';

const sample = [
  { id: 1, app: 'YouTube', time: '22m', category: 'Video', color: 'bg-rose-500' },
  { id: 2, app: 'Minecraft', time: '35m', category: 'Games', color: 'bg-emerald-500' },
  { id: 3, app: 'Chrome', time: '15m', category: 'Web', color: 'bg-amber-500' },
  { id: 4, app: 'Duolingo', time: '12m', category: 'Learning', color: 'bg-sky-500' },
];

export default function ActivityOverview() {
  return (
    <section id="activity" className="mx-auto max-w-5xl px-4 mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-slate-200">Today’s Activity</h2>
        <div className="text-xs text-slate-400 inline-flex items-center gap-2">
          <Activity className="h-4 w-4" /> Live sync
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
        {sample.map((item, idx) => (
          <div
            key={item.id}
            className={`flex items-center justify-between px-4 py-3 ${idx !== sample.length - 1 ? 'border-b border-white/10' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-md ${item.color} grid place-items-center text-white font-semibold`}>{item.app[0]}</div>
              <div>
                <p className="text-white font-medium leading-tight">{item.app}</p>
                <p className="text-xs text-slate-400 -mt-0.5">{item.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Smartphone className="h-4 w-4 opacity-70" />
              <span className="font-semibold">{item.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-xs text-slate-400">Screen time</p>
          <p className="text-2xl font-bold text-white">1h 24m</p>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-xs text-slate-400">Blocked attempts</p>
          <p className="text-2xl font-bold text-white">3</p>
        </div>
      </div>
    </section>
  );
}
