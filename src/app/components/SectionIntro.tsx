type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-20">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.24em] text-foreground/70 mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl lg:text-5xl mb-6">{title}</h2>
      <p className="text-xl text-muted-foreground">{description}</p>
    </div>
  );
}
