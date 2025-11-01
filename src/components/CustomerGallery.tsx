import poster1 from "@/assets/poster1.jpg";
import poster2 from "@/assets/poster2.jpg";
import poster3 from "@/assets/poster3.jpg";
import poster4 from "@/assets/poster4.jpg";

export const CustomerGallery = () => {
  const galleryImages = [
    { src: poster1, alt: "Müşteri görseli 1" },
    { src: poster2, alt: "Müşteri görseli 2" },
    { src: poster3, alt: "Müşteri görseli 3" },
    { src: poster4, alt: "Müşteri görseli 4" },
    { src: poster1, alt: "Müşteri görseli 5" },
    { src: poster2, alt: "Müşteri görseli 6" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Müşterilerimizin <span className="text-primary">Özel Anıları</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Binlerce mutlu müşterimizin evlerini süsleyen özel tasarımlardan ilham alın
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg bg-muted group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
