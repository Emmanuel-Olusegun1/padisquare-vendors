type Props = {
  name: string;
  logo: string;
  heroImage: string;
};

export default function VendorHero({ name, logo, heroImage }: Props) {
  return (
    <section className="relative">
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-5">
          <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
            <img
              src={logo}
              alt={name}
              className="w-10 h-10 object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="text-white/70 text-sm mt-1">
              Verified seller on PadiSquare
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
