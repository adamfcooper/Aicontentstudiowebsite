import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

type ContactDemoDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  submitLabel?: string;
  subject?: string;
};

export function ContactDemoDialog({
  open,
  onOpenChange,
  title = 'Book a Demo',
  description = "Tell us a little about your brand and project and we'll get back to you.",
  submitLabel = 'Send Enquiry',
  subject,
}: ContactDemoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden rounded-[2rem] border-black/10 bg-background/90 p-0 backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.06),transparent_30%)]" />
        <div className="relative p-8">
          <DialogHeader className="mb-8 text-left">
            <DialogTitle className="text-3xl tracking-tight">{title}</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              {description}
            </DialogDescription>
          </DialogHeader>

          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              onOpenChange(false);
            }}
          >
            {subject ? (
              <div className="space-y-4">
                <label htmlFor="subject" className="text-sm text-foreground/80">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={subject}
                  readOnly
                  className="glass-button h-12 rounded-full border-white/15 bg-white/10 px-5"
                />
              </div>
            ) : null}

            <div className="space-y-4">
              <label htmlFor="business-name" className="text-sm text-foreground/80">
                Business Name
              </label>
              <Input
                id="business-name"
                name="businessName"
                placeholder="Your business name"
                className="glass-button h-12 rounded-full border-white/15 bg-white/10 px-5"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="email" className="text-sm text-foreground/80">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@business.com"
                className="glass-button h-12 rounded-full border-white/15 bg-white/10 px-5"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="project-brief" className="text-sm text-foreground/80">
                Project Brief
              </label>
              <Textarea
                id="project-brief"
                name="projectBrief"
                placeholder="Tell us what you want to create"
                className="glass-button min-h-32 rounded-[1.75rem] border-white/15 bg-white/10 px-5 py-4"
              />
            </div>

            <button
              type="submit"
              className="glass-button monochrome-button w-full rounded-full px-6 py-3"
            >
              {submitLabel}
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
