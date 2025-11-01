import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface EmailSubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EmailSubscriptionDialog = ({ open, onOpenChange }: EmailSubscriptionDialogProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Harika! İndirim kodunuz e-posta adresinize gönderildi.");
      setEmail("");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">%15 İndirim Kazanın!</DialogTitle>
          <DialogDescription className="text-base pt-2">
            E-posta listemize katılın ve ilk siparişinizde kullanabileceğiniz %15 indirim kodunu hemen alın. 
            Ayrıca yeni ürünler, özel kampanyalar ve ilham verici tasarımlardan ilk siz haberdar olun.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <Input
            type="email"
            placeholder="E-posta adresinizi girin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12"
          />
          <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90">
            İndirim Kodumu Gönder
          </Button>
          <Button 
            type="button" 
            variant="ghost" 
            className="w-full hover:bg-transparent" 
            onClick={() => onOpenChange(false)}
          >
            ❌ Hayır, indirim kullanmak istemiyorum
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
