import { useState } from 'react';
import { Lock, Globe, Clock } from 'lucide-react';

function Toggle({ checked, onChange, label, icon: Icon, hint }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-indigo-600/20 grid place-items-center">
          <Icon className="h-4 w-4 text-indigo-400" />
        </div>
        <div>
          <p className="text-white font-medium">{label}</p>
          {hint && <p className="text-xs text-slate-400">{hint}</p>}
        </div>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${checked ? 'bg-indigo-600' : 'bg-slate-600'}`}
        aria-pressed={checked}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${checked ? 'translate-x-5' : 'translate-x-1'}`}
        />
      </button>
    </div>
  );
}

export default function ParentalControls() {
  const [appLock, setAppLock] = useState(true);
  const [webFilter, setWebFilter] = useState(true);
  const [bedtime, setBedtime] = useState(false);

  return (
    <section id="controls" className="mx-auto max-w-5xl px-4">
      <h2 className="text-lg font-semibold text-slate-200 mb-3">Instant Controls</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Toggle
          checked={appLock}
          onChange={setAppLock}
          label="App Lock"
          icon={Lock}
          hint="Block games and social apps instantly"
        />
        <Toggle
          checked={webFilter}
          onChange={setWebFilter}
          label="Web Filter"
          icon={Globe}
          hint="Auto-block adult and risky sites"
        />
        <Toggle
          checked={bedtime}
          onChange={setBedtime}
          label="Bedtime Schedule"
          icon={Clock}
          hint="Pause internet after lights-out"
        />
      </div>

      <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 border border-white/10">
        <p className="text-sm text-slate-300">
          Tip: Long-press any control for advanced rules like per-app timers and school-time mode.
        </p>
      </div>
    </section>
  );
}
