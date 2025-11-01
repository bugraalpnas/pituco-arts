import { CheckCircle } from "lucide-react";

export const PosterInfoSection = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">Kaliteli Üretim, Kalıcı Anılar</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Her posteriniz özenle seçilmiş malzemelerle üretiliyor
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500" 
                alt="Baskı Süreci" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Premium Baskı Kağıdı</h3>
            <p className="text-muted-foreground">
              300 gsm premium mat kağıt kullanarak uzun ömürlü ve canlı renkler sunuyoruz.
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=500" 
                alt="Çerçeve Malzemeleri" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Kaliteli Çerçeveler</h3>
            <p className="text-muted-foreground">
              Doğal ahşap ve modern metal çerçeve seçenekleri ile dekorasyonunuza uyum sağlar.
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500" 
                alt="Detay Görseli" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Profesyonel Detay</h3>
            <p className="text-muted-foreground">
              Her poster özenle paketlenir ve hasarsız teslim garantisi ile gönderilir.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">UV Korumalı Baskı</h4>
                <p className="text-sm text-muted-foreground">
                  Renklerin solmasını önleyen özel UV koruma teknolojisi
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Su Bazlı Mürekkep</h4>
                <p className="text-sm text-muted-foreground">
                  Çevre dostu, kokusuz ve insan sağlığına zararsız mürekkep
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Hızlı ve Güvenli Kargo</h4>
                <p className="text-sm text-muted-foreground">
                  Özel koruyucu ambalaj ile 2-4 iş günü teslimat
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Memnuniyet Garantisi</h4>
                <p className="text-sm text-muted-foreground">
                  30 gün içinde koşulsuz iade ve değişim hakkı
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
