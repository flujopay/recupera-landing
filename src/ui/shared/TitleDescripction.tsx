type Props = {
  title: string;
  subtitle?: string;
  description: string;
};

export const TitleDescripction = ({ title, subtitle, description }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <p className="font-adobe text-brand-primary-dark text-2xl sm:text-4xl font-black">{title}</p>
        <p className="font-adobe text-brand-primary-dark text-2xl sm:text-4xl font-black">{subtitle}</p>
      </div>
      <p className="font-adobe text-black mt-2 text-lg leading-5">
        {description}
      </p>
    </div>
  );
};
