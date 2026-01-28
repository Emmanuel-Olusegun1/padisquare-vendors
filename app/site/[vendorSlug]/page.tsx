import { notFound } from "next/navigation";
import { vendors, products } from "../../../lib/data";
import ProductBrowser from "../../../components/ProductBrowser";

type PageProps = {
  params: Promise<{
    vendorSlug: string;
  }>;
};

export const revalidate = 60;

export async function generateMetadata({ params }: PageProps) {
  const { vendorSlug } = await params;
  const vendor = vendors.find(v => v.slug === vendorSlug);

  if (!vendor) {
    return { title: "Vendor Not Found | PadiSquare" };
  }

  return {
    title: `${vendor.name} | PadiSquare`,
    description: `Discover products from ${vendor.name} on PadiSquare.`,
  };
}

export default async function VendorPage({ params }: PageProps) {
  const { vendorSlug } = await params;
  const vendor = vendors.find(v => v.slug === vendorSlug);

  if (!vendor) notFound();

  const vendorProducts = products.filter(p => p.vendorSlug === vendor.slug);

  return (
    <main className="min-h-screen bg-[#04100a] text-white transition-colors duration-300">

      {/* HERO */}
      <section className="relative">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${vendor.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 flex items-center gap-5">
            <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <img
                src={vendor.logo}
                alt={vendor.name}
                className="w-15 h-15 object-contain rounded-xl"
              />
            </div>

            <div>
              <h1 className="text-3xl font-semibold">{vendor.name}</h1>
              <p className="text-white/70 text-sm mt-1">
                Verified seller on PadiSquare
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Products</h2>
        <ProductBrowser products={vendorProducts} />
      </section>


      <footer className="py-2">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-white/70">
            &copy; {new Date().getFullYear()} PadiSquare. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
