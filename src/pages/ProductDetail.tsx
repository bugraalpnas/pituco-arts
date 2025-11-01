import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProductReviews } from "@/components/ProductReviews";
import ProductCard from "@/components/ProductCard";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart } from "@/contexts/CartContext";
import { getProductById, products } from "@/lib/products";
import { toast } from "sonner";
import { Minus, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import poster1 from "@/assets/poster1.jpg";
import poster2 from "@/assets/poster2.jpg";
import poster3 from "@/assets/poster3.jpg";
import poster4 from "@/assets/poster4.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, getItemCount } = useCart();
  const product = getProductById(id || "");

  const productImages = [poster1, poster2, poster3, poster4];
  const productImage = productImages[parseInt(id || "1") - 1] || poster1;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0].name || "");
  const [selectedFrame, setSelectedFrame] = useState(product?.frames[0].name || "");
  const [customText, setCustomText] = useState("");
  const [customName, setCustomName] = useState("");
  const [customColor, setCustomColor] = useState("#000000");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [giftPackage, setGiftPackage] = useState(false);
  const [fastShipping, setFastShipping] = useState(false);

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  const sizePrice = product.sizes.find((s) => s.name === selectedSize)?.price || 0;
  const framePrice = product.frames.find((f) => f.name === selectedFrame)?.price || 0;
  const giftPackagePrice = giftPackage ? 25 : 0;
  const fastShippingPrice = fastShipping ? 40 : 0;
  const totalPrice = product.price + sizePrice + framePrice + giftPackagePrice + fastShippingPrice;
  
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    const customizations: { [key: string]: string } = {};
    if (customText) customizations.text = customText;
    if (customName) customizations.name = customName;
    if (customColor) customizations.color = customColor;

    addItem({
      productId: product.id,
      title: product.title,
      price: totalPrice,
      image: productImage,
      quantity: quantity,
      size: selectedSize,
      frame: selectedFrame,
      giftPackage,
      fastShipping,
      customizations: Object.keys(customizations).length > 0 ? customizations : undefined,
    });

    toast.success("Ürün sepete eklendi!");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/sepet");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={getItemCount()} />

      <main className="container px-4 md:px-8 py-12">
        <div className="grid lg:grid-cols-[auto_450px_1fr] gap-12 max-w-7xl mx-auto">
          {/* Thumbnail Gallery - Left */}
          <div className="flex lg:flex-col gap-2 order-2 lg:order-1">
            {productImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImageIndex === idx ? "border-primary" : "border-transparent"
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image - Center */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden sticky top-24 relative group">
              <img
                src={productImages[selectedImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setSelectedImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Product Info - Right Side */}
          <div className="space-y-6 order-3">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                {product.categoryLabel}
              </p>
              <h1 className="text-3xl font-serif font-bold mb-4">{product.title}</h1>
              <div className="flex items-center gap-3 mb-6">
                {product.originalPrice && (
                  <p className="text-2xl text-muted-foreground line-through">
                    {product.originalPrice} ₺
                  </p>
                )}
                <p className="text-4xl font-bold text-foreground">{totalPrice} ₺</p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold">Adet</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Boyut</Label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedSize === size.name
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:border-primary/50"
                    }`}
                  >
                    {size.name} {size.price > 0 && `(+${size.price} ₺)`}
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Selection */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Çerçeve</Label>
              <div className="flex flex-wrap gap-2">
                {product.frames.map((frame) => (
                  <button
                    key={frame.name}
                    onClick={() => setSelectedFrame(frame.name)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedFrame === frame.name
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:border-primary/50"
                    }`}
                  >
                    {frame.name} {frame.price > 0 && `(+${frame.price} ₺)`}
                  </button>
                ))}
              </div>
            </div>

            {/* Customization Options */}
            {product.customizable && (
              <div className="space-y-4 p-4 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-lg">Tasarımını Özelleştir</h3>
                
                {product.customizationOptions?.text && (
                  <div className="space-y-2">
                    <Label htmlFor="customText">Metin Ekle</Label>
                    <Textarea
                      id="customText"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder="Posterinize eklemek istediğiniz metni yazın"
                    />
                  </div>
                )}

                {product.customizationOptions?.name && (
                  <div className="space-y-2">
                    <Label htmlFor="customName">İsim Ekle</Label>
                    <Input
                      id="customName"
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value)}
                      placeholder="İsim girin"
                    />
                  </div>
                )}

                {product.customizationOptions?.colors && (
                  <div className="space-y-2">
                    <Label htmlFor="customColor">Renk Seçin</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="customColor"
                        type="color"
                        value={customColor}
                        onChange={(e) => setCustomColor(e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <span className="text-sm text-muted-foreground">{customColor}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Cross-sell Options */}
            <div className="space-y-3 p-4 bg-muted/50 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-semibold">Hediye Paketiyle Gelsin</p>
                  <p className="text-sm text-muted-foreground">Özel hediye kutusu ve kurdele ile</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">+25 ₺</span>
                  <Switch
                    checked={giftPackage}
                    onCheckedChange={setGiftPackage}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex-1">
                  <p className="font-semibold">Hızlı Kargo</p>
                  <p className="text-sm text-muted-foreground">1-2 iş günü içinde teslimat</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">+40 ₺</span>
                  <Switch
                    checked={fastShipping}
                    onCheckedChange={setFastShipping}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 sticky bottom-0 bg-background pb-4">
              <Button 
                onClick={handleAddToCart} 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold" 
              >
                Sepete Ekle
              </Button>
              <Button 
                onClick={handleBuyNow} 
                variant="secondary" 
                className="w-full h-12" 
              >
                Hemen Satın Al
              </Button>
            </div>
          </div>
        </div>

        {/* Cross-sell / Up-sell Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold mb-8">Bunlar da İlginizi Çekebilir</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <ProductCard
                key={relatedProduct.id}
                id={relatedProduct.id}
                title={relatedProduct.title}
                price={relatedProduct.price}
                image={productImages[index]}
                customizable={relatedProduct.customizable}
                category={relatedProduct.categoryLabel}
                showCategory={false}
              />
            ))}
          </div>
        </div>

        {/* Product Details Accordion */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details">
              <AccordionTrigger className="text-lg font-semibold">
                Ürün Özellikleri
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <p>• Premium 300 gsm mat kağıt</p>
                <p>• UV korumalı baskı teknolojisi</p>
                <p>• Su bazlı, çevre dostu mürekkep</p>
                <p>• Profesyonel kalite baskı</p>
                <p>• Çerçeve seçenekleri mevcut</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq">
              <AccordionTrigger className="text-lg font-semibold">
                Sıkça Sorulan Sorular
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Teslimat süresi ne kadar?</p>
                  <p>Siparişiniz 2-4 iş günü içinde özel koruyucu ambalajla kargoya verilir.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">İade ve değişim yapabilir miyim?</p>
                  <p>Evet, 30 gün içinde koşulsuz iade ve değişim hakkınız bulunmaktadır.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Çerçeve dahil mi?</p>
                  <p>Çerçeve seçenekleri ek ücret karşılığında sunulmaktadır. Ürün sayfasından seçim yapabilirsiniz.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="customization">
              <AccordionTrigger className="text-lg font-semibold">
                Sana Özel Kişiselleştirme
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>Kişiselleştirilebilir ürünlerimizde istediğiniz metni, ismi veya rengi ekleyebilirsiniz. 
                Her poster sizin hikayenize özel tasarlanır ve üretilir. Kişiselleştirme seçenekleri için 
                yukarıdaki formu kullanabilirsiniz.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping">
              <AccordionTrigger className="text-lg font-semibold">
                Kargo & Ödeme
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <p>• Ücretsiz kargo (200 TL üzeri siparişlerde)</p>
                <p>• Kredi kartı, banka kartı ile güvenli ödeme</p>
                <p>• Kapıda ödeme seçeneği</p>
                <p>• Taksit imkanları mevcut</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <ProductReviews productId={product.id} />
      </main>
    </div>
  );
};

export default ProductDetail;
