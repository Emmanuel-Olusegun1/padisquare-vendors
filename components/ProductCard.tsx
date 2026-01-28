type Props = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, price, image }: Props) {
  return (
    <div className="rounded-xl bg-[#071a11] border border-white/10 overflow-hidden hover:border-primary/40 transition">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-medium">{name}</h3>
        <p className="text-primary font-semibold mt-2">
          ₦{price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
