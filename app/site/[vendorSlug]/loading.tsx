export default function LoadingVendorPage() {
  return (
    <div className="min-h-screen bg-[#04100a] px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* HERO SKELETON */}
        <div className="h-64 rounded-xl bg-white/5 animate-pulse mb-12" />

        {/* SEARCH BAR */}
        <div className="flex gap-4 mb-8">
          <div className="h-10 w-64 rounded-lg bg-white/5 animate-pulse" />
          <div className="h-10 w-40 rounded-lg bg-white/5 animate-pulse" />
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-64 rounded-xl bg-white/5 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
