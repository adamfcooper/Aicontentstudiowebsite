import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';

type CreatorApplicationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CreatorApplicationDialog({ open, onOpenChange }: CreatorApplicationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden rounded-[2rem] border-black/10 bg-background/90 p-0 backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.06),transparent_30%)]" />
        <div className="relative p-8">
          <DialogHeader className="mb-8 text-left">
            <DialogTitle className="text-3xl tracking-tight">Apply as a Creator</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              Share your details and social channels and we&apos;ll review your application.
            </DialogDescription>
          </DialogHeader>

          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              onOpenChange(false);
            }}
          >
            <div className="space-y-4">
              <label htmlFor="full-name" className="text-sm text-foreground/80">
                Full name
              </label>
              <Input
                id="full-name"
                name="fullName"
                placeholder="Your full name"
                className="glass-button h-12 rounded-full border-white/15 bg-white/10 px-5"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="creator-email" className="text-sm text-foreground/80">
                Email
              </label>
              <Input
                id="creator-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="glass-button h-12 rounded-full border-white/15 bg-white/10 px-5"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="social-media-1" className="text-sm text-foreground/80">
                Social Media 1
              </label>
              <Input
                id="social-media-1"
                name="socialMedia1"
                placeholder="@handle or profile URL"
                className="glass-button h-12 rounded-full border-white/15 bg-white/10 px-5"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="social-media-2" className="text-sm text-foreground/80">
                Social Media 2
              </label>
              <Input
                id="social-media-2"
                name="socialMedia2"
                placeholder="@handle or profile URL"
                className="glass-button h-12 rounded-full border-white/15 bg-white/10 px-5"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="social-media-3" className="text-sm text-foreground/80">
                Social Media 3
              </label>
              <Input
                id="social-media-3"
                name="socialMedia3"
                placeholder="@handle or profile URL"
                className="glass-button h-12 rounded-full border-white/15 bg-white/10 px-5"
              />
            </div>

            <button
              type="submit"
              className="glass-button monochrome-button w-full rounded-full px-6 py-3"
            >
              Submit Application
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
