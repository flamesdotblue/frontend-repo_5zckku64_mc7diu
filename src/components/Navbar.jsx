import { Shield, Settings, Smartphone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-gradient-to-b from-slate-950/90 to-slate-900/60 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-indigo-600/90 grid place-items-center shadow-lg shadow-indigo-600/30">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold tracking-tight">Aegis Parental</p>
            <p className="text-xs text-slate-400 -mt-1">Sci‑Fi family safety</p>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-slate-300">
          <a href="#controls" className="hover:text-white transition">Controls</a>
          <a href="#activity" className="hover:text-white transition">Activity</a>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white transition border border-white/10">
            <Smartphone className="h-4 w-4" /> Pair Device
          </button>
          <button className="p-2 rounded-lg hover:bg-white/10 text-slate-200" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}
