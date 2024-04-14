/* eslint-disable @next/next/no-img-element */
const items = [
  {
    src: "https://placehold.co/50x50?text=Image",
    title: "Complex Filters",
    description:
      "Perform complex filters to discover companies similar to tech giants like Google, started by their ex-employees, and much more.",
  },
  {
    src: "https://placehold.co/50x50?text=Image",
    title: "Company Profiles",
    description:
      "Get in top of the market analysis on the companies and Identify key metrics such as exit likelihood, potential buyers, and TAM size.",
  },
  {
    src: "https://placehold.co/50x50?text=Image",
    title: "Set Outbound",
    description:
      "Aviato auto-generates personalized emails for startups and integrates prospects into your CRM.",
  },
];

const Section1 = () => {
  return (
    <div className="mt-12 flex w-full flex-col items-center sm:mt-20">
      <div className="flex flex-col flex-wrap items-center justify-center gap-y-[3.75rem] whitespace-normal text-center md:flex-row md:gap-x-[3.75rem]">
        {items.map(({ src, title, description }) => (
          <div key={title} className="flex flex-col items-center space-y-5">
            <img
              className="w-12 rounded-full transition-all hover:rotate-45"
              src={src}
              alt="Icon"
            />
            <div className="space-y-3">
              <h1 className="text-xl font-bold lg:text-2xl">{title}</h1>
              <p className="w-80 text-base font-medium text-[#5B5A59] lg:w-96 lg:text-lg">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
