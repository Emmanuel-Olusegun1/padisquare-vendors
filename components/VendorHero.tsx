type Props = {
  name: string;
  logo: string;
  heroImage: string;
};

export default function VendorHero({ name, logo, heroImage }: Props) {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div
        className="h-64 bg-cover bg-center transition-all duration-300"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-5">
          {/* Vendor Logo */}
          <div className="w-16 h-16 rounded-xl bg-white/10 dark:bg-black/20 
                          border border-white/10 dark:border-white/20 
                          flex items-center justify-center transition-colors duration-300">
            <img
              src={logo}
              alt={name}
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Vendor Info */}
          <div>
            <h1 className="text-3xl font-semibold text-black dark:text-white transition-colors duration-300">
              {name}
            </h1>
            <p className="text-black/70 dark:text-white/70 text-sm mt-1 transition-colors duration-300">
              Verified seller on PadiSquare
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
