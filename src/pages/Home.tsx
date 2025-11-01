import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { CustomerGallery } from "@/components/CustomerGallery";
import { PosterInfoSection } from "@/components/PosterInfoSection";
import { products } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import poster1 from "@/assets/poster1.jpg";
import poster2 from "@/assets/poster2.jpg";
import poster3 from "@/assets/poster3.jpg";
import poster4 from "@/assets/poster4.jpg";

const Home = () => {
  const { getItemCount } = useCart();

  const productImages = [poster1, poster2, poster3, poster4];

  const customizableProducts = products.filter((p) => p.customizable);
  const bestsellerProducts = products.filter((p) => p.featured === "bestseller");
  const newProducts = products.filter((p) => p.featured === "new");

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={getItemCount()} />
      
      <HeroSection />

      <main id="products-section" className="container px-4 md:px-8 py-12 space-y-20">
        {/* Customer Gallery */}
        <CustomerGallery />

        {/* Sana Özel Posterler */}
        <section>
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              <span className="text-primary">Sana Özel</span> Posterler
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Her biri sizin hikayeniz için özel, aşkınız için özel, anılarınız için özel. 
              İstediğiniz gibi kişiselleştirin ve duvarlarınızı kendiniz gibi eşsiz yapın.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizableProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={productImages[index]}
                customizable={product.customizable}
                category={product.categoryLabel}
                showCategory={true}
              />
            ))}
          </div>
        </section>

        {/* Çok Satanlar */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Çok Satanlar</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellerProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={productImages[index]}
                customizable={product.customizable}
                category={product.categoryLabel}
                showCategory={true}
              />
            ))}
          </div>
        </section>

        {/* Poster Info Section */}
        <PosterInfoSection />

        {/* Yeni Gelenler */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Yeni Gelenler</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={productImages[index]}
                customizable={product.customizable}
                category={product.categoryLabel}
                showCategory={true}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-24 py-12">
        <div className="container px-4 md:px-8 text-center text-muted-foreground">
          <p>© 2023 Pituco Arts. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
