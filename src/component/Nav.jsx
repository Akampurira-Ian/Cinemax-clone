import bgimg from "../assets/1699516359646.jpg";

const navItems = ["Home", "Series", "Movies", "New & Popular", "My List"];

const Nav = () => {
  return (
    <header className="relative min-h-195 overflow-hidden bg-[#05070d] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url(${bgimg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-8">
            <div className="text-3xl font-black tracking-tight text-red-600">
              CINEMAX
            </div>

            <nav className="hidden items-center gap-6 text-sm text-gray-200 md:flex">
              {navItems.map((item) => (
                <a key={item} href="#" className="transition hover:text-white">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <select className="rounded border border-gray-700 bg-black/60 px-3 py-2 text-sm text-white outline-none">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
            <button className="rounded bg-red-600 px-4 py-2 text-sm font-semibold transition hover:bg-red-500">
              Sign in
            </button>
          </div>
        </div>

        <div className="flex min-h-170 items-center">
          <div className="max-w-3xl py-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-300">
              New season
            </div>

            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
              Unlimited films, series, and more.
            </h1>

            <p className="mt-5 text-lg text-gray-200 md:text-2xl">
              Starts at $2.99/month. Cancel anytime.
            </p>

            <p className="mt-4 max-w-xl text-base text-gray-300">
              Ready to watch? Enter your email to create an account or restart
              your subscription.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full max-w-md rounded-xl border border-gray-600 bg-black/40 px-4 py-3 text-base text-white placeholder:text-gray-400 outline-none ring-0 transition focus:border-red-500"
              />
              <button className="rounded-xl bg-red-600 px-6 py-3 text-base font-semibold transition hover:bg-red-500">
                Get started
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-200">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                4K UHD
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Live sports
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Family favorites
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
