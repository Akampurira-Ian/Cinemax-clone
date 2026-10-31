import Nav from "./component/Nav";
import Trends from "./component/Trends";

const App = () => {
  return (
    <div className="min-h-screen bg-[#05070d] text-white">
      <Nav />
      <Trends />

      <footer className="border-t border-white/10 bg-[#05070d] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-gray-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="text-lg font-bold tracking-tight text-red-600">CINEMAX</div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white">Help Center</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
          <p>© 2025 Cinemax. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
