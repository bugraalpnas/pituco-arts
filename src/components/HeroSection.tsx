import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="container max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight">
            Stilinizi{" "}
            <span className="text-primary italic">Duvar Sanatına</span>
            {" "}Dönüştürün
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Fotoğraflarınızla, metinlerinizle ve tarzınızla kişiselleştirilmiş posterler yaratın. 
            Premium kalitede baskılar, kapınıza kadar teslim.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="h-14 px-8 text-lg bg-bright text-bright-foreground hover:bg-bright/90 shadow-lg"
            onClick={() => navigate("/kategori/sana-ozel")}
          >
            Kendi Posterini Oluştur
          </Button>
          <Button
            size="lg"
            className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Alışverişe Başla
          </Button>
        </div>

        <div className="pt-8 space-y-2">
          <p className="text-sm text-muted-foreground">
            ✨ Sizin hikayeniz için özel • 💕 Aşkınız için özel • 🎨 Tarzınız için özel
          </p>
        </div>
      </div>
    </section>
  );
};
