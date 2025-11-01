import { ShoppingCart, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { EmailSubscriptionBanner } from "./EmailSubscriptionBanner";
import { SiTiktok } from "react-icons/si";

interface HeaderProps {
  cartItemCount?: number;
}

const Header = ({ cartItemCount = 0 }: HeaderProps) => {
  return (
    <>
      <EmailSubscriptionBanner />
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-20 items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-bright flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Pituco Arts" className="h-10 w-10 object-cover" />
            </div>
            <span className="ml-3 text-2xl font-serif font-bold tracking-tight">pituco arts</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <Link to="/kategori/sana-ozel" className="text-sm font-medium hover:text-primary transition-colors">
              Sana Özel Posterler
            </Link>
            <Link to="/kategori/cok-satanlar" className="text-sm font-medium hover:text-primary transition-colors">
              Çok Satanlar
            </Link>
            <Link to="/kategori/yeni-gelenler" className="text-sm font-medium hover:text-primary transition-colors">
              Yeni Gelenler
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <SiTiktok className="h-5 w-5" />
              </a>
            </Button>
            <Link to="/sepet">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge 
                    variant="default" 
                    className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-primary text-primary-foreground"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
