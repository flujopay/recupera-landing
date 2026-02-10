type Props = {
  bgColor?: string;
  whiteText: string;
  orangeItalicText: string;
};

export const SectionHeroTitle = ({
  bgColor = "bg-[#3771d1]",
  whiteText,
  orangeItalicText,
}: Props) => {
  return (
    <section className={`${bgColor} flex items-center justify-center pt-12 mb-8 max-w-[1280px] mx-auto pb-24`}>
      <div className="p-4 md:px-10">
        <h1 className="font-canaro text-5xl md:text-5xl lg:text-7xl font-extrabold text-center max-w-[650px] mx-auto">
          <span className="text-brand-primary-dark">{whiteText}</span>{" "}
          <span className="text-brand-primary font-caslon">{orangeItalicText}</span>
          <span className="text-brand-secondary font-caslon">.</span>
        </h1>
      </div>
    </section>
  );
};
