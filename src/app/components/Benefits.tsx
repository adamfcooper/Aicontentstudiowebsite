import { homePageContent } from '../data/siteContent';

type BenefitsProps = {
  onGetInTouch: () => void;
};

export function Benefits({ onGetInTouch }: BenefitsProps) {
  const { benefits } = homePageContent;

  return (
    <section id={benefits.id} className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-6xl">
          <h2 className="max-w-5xl text-4xl leading-tight lg:text-6xl">
            {benefits.title}
          </h2>
          <button
            type="button"
            onClick={onGetInTouch}
            className="mt-10 inline-flex text-base underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
