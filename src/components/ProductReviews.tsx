import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export const ProductReviews = ({ productId }: { productId: string }) => {
  const [reviews] = useState<Review[]>([
    {
      id: "1",
      author: "Ayşe K.",
      rating: 5,
      comment: "Harika bir ürün! Kalitesi mükemmel ve tam istediğim gibi oldu. Teşekkürler!",
      date: "2024-01-15",
    },
    {
      id: "2",
      author: "Mehmet Y.",
      rating: 5,
      comment: "Çok beğendim, kargo da hızlıydı. Kesinlikle tavsiye ederim.",
      date: "2024-01-10",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Yorumunuz başarıyla gönderildi! İncelendikten sonra yayınlanacak.");
    setNewReview({ name: "", rating: 5, comment: "" });
  };

  const renderStars = (rating: number, interactive: boolean = false, onChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating ? "fill-primary text-primary" : "text-muted-foreground"
            } ${interactive ? "cursor-pointer" : ""}`}
            onClick={() => interactive && onChange?.(star)}
          />
        ))}
      </div>
    );
  };

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div className="space-y-8 py-12">
      <div className="border-t border-border pt-12">
        <h2 className="text-3xl font-serif font-bold mb-6">Müşteri Yorumları</h2>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            {renderStars(Math.round(averageRating))}
            <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
          </div>
          <span className="text-muted-foreground">({reviews.length} yorum)</span>
        </div>

        <div className="space-y-6 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(review.date).toLocaleDateString("tr-TR")}
                  </p>
                </div>
                {renderStars(review.rating)}
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="border border-border rounded-lg p-6 bg-card">
          <h3 className="text-xl font-serif font-bold mb-4">Yorum Yap</h3>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Adınız</Label>
              <Input
                id="name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                placeholder="Adınızı girin"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Puanınız</Label>
              {renderStars(newReview.rating, true, (rating) =>
                setNewReview({ ...newReview, rating })
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment">Yorumunuz</Label>
              <Textarea
                id="comment"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                placeholder="Ürün hakkındaki düşüncelerinizi paylaşın..."
                rows={4}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-bright text-bright-foreground hover:bg-bright/90">
              Yorumu Gönder
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
