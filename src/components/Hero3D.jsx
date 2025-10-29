import Spline from '@splinetool/react-spline';
import { Shield, Activity } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative h-[440px] w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8xX2J6u2Z7V2p1mG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />

      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-5xl px-4 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-slate-200 mb-3">
            <Shield className="h-3.5 w-3.5" /> Quantum-grade safety for your family
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            See. Guide. Protect.
          </h1>
          <p className="mt-2 text-slate-300 max-w-xl">
            A sci‑fi dashboard to view your child’s activity, set healthy limits, and block apps or
            sites in a tap.
          </p>
          <div className="mt-5 flex gap-3">
            <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/30">
              Get Started
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white transition border border-white/10 inline-flex items-center gap-2">
              <Activity className="h-4 w-4" /> Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
