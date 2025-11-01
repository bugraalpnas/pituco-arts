import { useState } from "react";
import { EmailSubscriptionDialog } from "./EmailSubscriptionDialog";

export const EmailSubscriptionBanner = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div className="relative bg-primary text-primary-foreground py-2 overflow-hidden cursor-pointer" onClick={() => setDialogOpen(true)}>
        <div className="container px-4">
          <div className="overflow-hidden">
            <div className="animate-[slide_20s_linear_infinite] whitespace-nowrap">
              <span className="inline-block font-semibold">
                🎉 E-posta listemize katılın ve %15 indirim kazanın! • Özel fırsatlardan ilk siz haberdar olun! • 
                🎉 E-posta listemize katılın ve %15 indirim kazanın! • Özel fırsatlardan ilk siz haberdar olun! • 
              </span>
            </div>
          </div>
        </div>
      </div>

      <EmailSubscriptionDialog open={dialogOpen} onOpenChange={setDialogOpen} />

      <style>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};
