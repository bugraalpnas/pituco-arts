export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  customizable: boolean;
  category: "sana-ozel" | "filmler" | "oyunlar" | "soyut" | "cok-satanlar" | "yeni-gelenler";
  categoryLabel: string;
  customizationOptions?: {
    colors?: boolean;
    text?: boolean;
    name?: boolean;
    photo?: boolean;
  };
  sizes: {
    name: string;
    price: number;
  }[];
  frames: {
    name: string;
    price: number;
  }[];
  featured?: "bestseller" | "new";
}

export const products: Product[] = [
  {
    id: "1",
    title: "Geometrik Sanat",
    description: "Modern geometrik şekiller ve sıcak tonlarla tasarlanmış minimalist poster. Sizin hikayeniz için özel, aşkınız için özel, tarzınız için özel. Her detayı sizin için kişiselleştirilebilir.",
    price: 350,
    images: ["/src/assets/poster1.jpg"],
    customizable: true,
    category: "sana-ozel",
    categoryLabel: "Kişiselleştirilebilir",
    featured: "bestseller",
    customizationOptions: {
      colors: true,
      text: true,
    },
    sizes: [
      { name: "13x18 cm", price: 0 },
      { name: "15x21 cm", price: 50 },
      { name: "21x30 cm", price: 100 },
      { name: "30x40 cm", price: 150 },
      { name: "40x50 cm", price: 200 },
      { name: "50x70 cm", price: 250 },
    ],
    frames: [
      { name: "Çerçevesiz", price: 0 },
      { name: "Siyah Çerçeve", price: 150 },
      { name: "Beyaz Çerçeve", price: 150 },
      { name: "Ahşap Çerçeve", price: 200 },
    ],
  },
  {
    id: "2",
    title: "Botanik Yaprak",
    description: "Zarif monstera yaprağı ile doğanın huzurunu evinize taşıyın. Minimalist ve şık tasarım.",
    price: 320,
    originalPrice: 420,
    images: ["/src/assets/poster2.jpg"],
    customizable: false,
    category: "soyut",
    categoryLabel: "Soyut",
    featured: "new",
    sizes: [
      { name: "13x18 cm", price: 0 },
      { name: "15x21 cm", price: 50 },
      { name: "21x30 cm", price: 100 },
      { name: "30x40 cm", price: 150 },
      { name: "40x50 cm", price: 200 },
      { name: "50x70 cm", price: 250 },
    ],
    frames: [
      { name: "Çerçevesiz", price: 0 },
      { name: "Siyah Çerçeve", price: 150 },
      { name: "Beyaz Çerçeve", price: 150 },
      { name: "Ahşap Çerçeve", price: 200 },
    ],
  },
  {
    id: "3",
    title: "Pembe Günbatımı",
    description: "Dağlar üzerinde pembe gün batımı manzarası. Sizin anılarınız için özel, sevdikleriniz için özel. Renkleri istediğiniz gibi özelleştirin.",
    price: 380,
    images: ["/src/assets/poster3.jpg"],
    customizable: true,
    category: "sana-ozel",
    categoryLabel: "Kişiselleştirilebilir",
    featured: "new",
    customizationOptions: {
      colors: true,
    },
    sizes: [
      { name: "13x18 cm", price: 0 },
      { name: "15x21 cm", price: 50 },
      { name: "21x30 cm", price: 100 },
      { name: "30x40 cm", price: 150 },
      { name: "40x50 cm", price: 200 },
      { name: "50x70 cm", price: 250 },
    ],
    frames: [
      { name: "Çerçevesiz", price: 0 },
      { name: "Siyah Çerçeve", price: 150 },
      { name: "Beyaz Çerçeve", price: 150 },
      { name: "Ahşap Çerçeve", price: 200 },
    ],
  },
  {
    id: "4",
    title: "Tipografi Sanatı",
    description: "Zarif serif fontlarla hazırlanmış modern tipografi posteri. Sevgilinizin adı, özel bir söz veya anlamlı bir tarih ile kişiselleştirin. Sizin hikayenizi anlatın.",
    price: 300,
    images: ["/src/assets/poster4.jpg"],
    customizable: true,
    category: "sana-ozel",
    categoryLabel: "Kişiselleştirilebilir",
    featured: "bestseller",
    customizationOptions: {
      text: true,
      name: true,
    },
    sizes: [
      { name: "13x18 cm", price: 0 },
      { name: "15x21 cm", price: 50 },
      { name: "21x30 cm", price: 100 },
      { name: "30x40 cm", price: 150 },
      { name: "40x50 cm", price: 200 },
      { name: "50x70 cm", price: 250 },
    ],
    frames: [
      { name: "Çerçevesiz", price: 0 },
      { name: "Siyah Çerçeve", price: 150 },
      { name: "Beyaz Çerçeve", price: 150 },
      { name: "Ahşap Çerçeve", price: 200 },
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};
