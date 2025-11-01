import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import poster1 from "@/assets/poster1.jpg";
import poster2 from "@/assets/poster2.jpg";
import poster3 from "@/assets/poster3.jpg";
import poster4 from "@/assets/poster4.jpg";

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, getTotalPrice, getItemCount } = useCart();

  const productImages = [poster1, poster2, poster3, poster4];
  const suggestedProducts = products.slice(0, 3);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header cartItemCount={0} />
        <main className="container px-4 md:px-8 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-serif font-bold">Sepetiniz Boş</h1>
            <p className="text-muted-foreground">Alışverişe başlamak için ürünlerimize göz atın</p>
            <Button onClick={() => navigate("/")} size="lg">
              Alışverişe Başla
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={getItemCount()} />

      <main className="container px-4 md:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold mb-8">Sepetim</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.productId} className="p-4">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-32 object-cover rounded"
                  />
                  <div className="flex-1 space-y-2">
                    <h3 className="font-serif text-lg font-semibold">{item.title}</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Boyut: {item.size}</p>
                      <p>Çerçeve: {item.frame}</p>
                      {item.customizations && (
                        <div className="mt-2 p-2 bg-muted rounded text-xs">
                          {Object.entries(item.customizations).map(([key, value]) => (
                            <p key={key}>
                              {key}: {value}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-xl font-bold">{item.price * item.quantity} ₺</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.productId)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 space-y-4 sticky top-24">
              <h2 className="text-2xl font-serif font-bold">Sipariş Özeti</h2>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ara Toplam</span>
                  <span>{getTotalPrice()} ₺</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Kargo</span>
                  <span className="text-primary">Ücretsiz</span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between text-xl font-bold">
                <span>Toplam</span>
                <span>{getTotalPrice()} ₺</span>
              </div>
              <Button className="w-full" size="lg" onClick={() => navigate("/odeme")}>
                Ödemeye Geç
              </Button>
            </Card>
          </div>
        </div>

        {/* Upsell Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold mb-8">Bunlar da İlginizi Çekebilir</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={productImages[index]}
                customizable={product.customizable}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
