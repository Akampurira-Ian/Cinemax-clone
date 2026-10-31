const trendingMovies = [
  {
    title: "The Last Horizon",
    year: "2025",
    genre: "Action • Sci‑Fi",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Midnight City",
    year: "2024",
    genre: "Drama • Thriller",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Echoes of Tomorrow",
    year: "2025",
    genre: "Adventure • Mystery",
    image:
      "https://images.unsplash.com/photo-1524989941526-cf7c1050d6a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Glass Heart",
    year: "2023",
    genre: "Romance • Drama",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Night Shift",
    year: "2024",
    genre: "Crime • Thriller",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

const continueWatching = [
  { title: "Dark Horizons", progress: 72, image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80" },
  { title: "Summer Run", progress: 48, image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80" },
  { title: "Neon Dawn", progress: 86, image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80" },
];

const genres = ["Action", "Drama", "Comedy", "Sci‑Fi", "Documentary", "Animation"];

function Trends() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <section className="pt-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-red-600">Latest Trends</h2>
          <button className="rounded-full border border-red-500/50 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white">
            Browse all
          </button>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-200"
            >
              {genre}
            </span>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {trendingMovies.map((movie) => (
            <article
              key={movie.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d1320] shadow-lg shadow-black/20"
            >
              <div
                className="relative h-72 overflow-hidden bg-cover bg-center transition duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${movie.image})` }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
                <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white">
                  {movie.year}
                </div>
              </div>

              <div className="space-y-2 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
                  <button className="rounded-full bg-red-600 px-2 py-1 text-xs font-medium text-white hover:bg-red-500">
                    +
                  </button>
                </div>
                <p className="text-sm text-gray-400">{movie.genre}</p>
                <div className="flex items-center gap-3 pt-2">
                  <button className="flex-1 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500">
                    Play
                  </button>
                  <button className="rounded-lg border border-gray-700 px-3 py-2 text-sm font-medium text-gray-200 hover:border-gray-500">
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-12">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Continue Watching</h2>
          <a href="#" className="text-sm font-medium text-red-400 hover:text-red-300">
            See all
          </a>
        </div>

        <div className="space-y-4">
          {continueWatching.map((show) => (
            <div
              key={show.title}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b1019] p-3"
            >
              <div
                className="h-24 w-28 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${show.image})` }}
              />

              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold text-white">{show.title}</h3>
                  <span className="text-sm text-gray-300">{show.progress}%</span>
                </div>

                <div className="h-2.5 rounded-full bg-gray-800">
                  <div
                    className="h-2.5 rounded-full bg-red-600"
                    style={{ width: `${show.progress}%` }}
                  />
                </div>
              </div>

              <button className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-200 hover:border-gray-500">
                Resume
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Trends;
