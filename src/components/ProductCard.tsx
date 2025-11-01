import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  customizable?: boolean;
  category?: string;
  showCategory?: boolean;
}

const ProductCard = ({ id, title, price, image, customizable, category, showCategory }: ProductCardProps) => {
  return (
    <Link to={`/urun/${id}`}>
      <Card className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300">
        <div className="aspect-[4/5] overflow-hidden bg-muted relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {showCategory && category && (
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-semibold">
              {category}
            </div>
          )}
        </div>
        <div className="p-4 space-y-1">
          <h3 className="font-serif text-lg font-medium group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xl font-bold text-foreground">
            {price} ₺
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
