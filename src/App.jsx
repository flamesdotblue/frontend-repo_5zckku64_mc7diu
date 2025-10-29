import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ParentalControls from './components/ParentalControls';
import ActivityOverview from './components/ActivityOverview';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero3D />
        <div className="space-y-8 -mt-10">
          <ParentalControls />
          <ActivityOverview />
        </div>
      </main>
      <footer className="mt-10 py-8 text-center text-slate-400">
        Built for parents. Designed for peace of mind.
      </footer>
    </div>
  );
}
