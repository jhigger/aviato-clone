/* eslint-disable @next/next/no-img-element */
import { useIntersectionObserver } from "usehooks-ts";
import { cn } from "~/lib/utils";

const items = [
  {
    label: "Exit range",
    value: "$120M-340M",
  },
  {
    label: "Potential buyers",
    value: "124",
  },
  {
    label: "TAM size",
    value: "$82.5B",
  },
  {
    label: "Investment grade",
    value: "A+",
  },
];

const Section2 = () => {
  const { isIntersecting, ref } = useIntersectionObserver();

  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="col-span-full mt-16 flex h-72 flex-col space-y-6 overflow-hidden overflow-y-hidden rounded-xl border bg-stone-50 px-5 pt-5 shadow-sm lg:h-[32rem] lg:space-y-8 lg:px-8 lg:pt-8">
        <div className="space-y-2 lg:space-y-4">
          <h1 className="text-xl font-bold lg:text-3xl">Never miss a deal</h1>
          <p className="text-sm font-medium text-[#5B5A59] lg:w-[392px] lg:text-lg">
            Discover emerging talent and new companies first. Get alerts on
            fresh opportunities, never miss out on hot deals.
          </p>
        </div>
        <img
          src="https://placehold.co/1100x600/?text=Image"
          alt="Never miss a deal"
          className="rounded-xl border bg-gray-100 md:rounded-xl"
        />
      </div>

      <div className="col-span-1 flex w-full flex-col justify-between overflow-hidden rounded-xl border bg-stone-50 shadow-sm">
        <div className="ml-5 mt-5 space-y-2 pr-8 lg:ml-8 lg:mt-8 lg:space-y-4">
          <h1 className="text-xl font-bold sm:text-xl lg:text-3xl">
            Your Workflow&apos;s Best Friend
          </h1>
          <p className="text-sm font-medium text-[#5B5A59] lg:w-full lg:text-lg">
            Aviato connects seamlessly with top CRMs and venture fund tools. Our
            powerful API enables easy transition to data-driven choices, no
            process disruption.
          </p>
        </div>
        <div className="mt-10 lg:mt-20" ref={ref}>
          <div
            className={cn(
              "animate-duration-[1500ms] animate-ease-in-out animate-fill-forwards -ml-[3rem] mb-2 mr-[2.8rem] h-[4.9rem] overflow-x-hidden animate-in slide-in-from-left lg:-ml-[2.2rem] lg:mb-4 lg:mr-[5.5rem] lg:h-[7.75rem]",
              isIntersecting ? "running" : "paused",
            )}
          >
            <img
              src="https://placehold.co/900x200/?text=Image"
              alt="Salesforce CRM  Hubspot CRM  Airtable  Affinity CRM  Asana"
              className="h-full rounded-xl bg-gray-100 object-cover object-right"
            />
          </div>
          <div
            className={cn(
              "animate-duration-[1500ms] animate-ease-in-out animate-fill-forwards float-right -mr-[4.8rem] mb-[1rem] h-[4.9rem] overflow-x-hidden animate-in slide-in-from-right lg:-mr-[6.5rem] lg:mb-[1.2rem] lg:h-[7.75rem]",
              isIntersecting ? "running" : "paused",
            )}
          >
            <img
              src="https://placehold.co/900x200/?text=Image"
              alt="Notion  Slack  Gmail  Discord"
              className="h-full rounded-xl bg-gray-100 object-cover object-left"
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 flex w-full flex-col justify-between overflow-hidden rounded-xl border bg-stone-50 p-5 shadow-sm lg:mt-0 lg:p-8">
        <div className="space-y-4">
          <h1 className="text-xl font-bold lg:text-3xl">
            Actionable, ML-based insights
          </h1>
          <p className="text-sm font-medium text-[#5B5A59] lg:w-[30rem] lg:text-lg">
            Identify key metrics such as exit likelihood, potential buyers, and
            TAM size.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-1 sm:h-[40vw] lg:h-[15rem] xl:h-[19.375rem]">
          <div className="aspect-square h-full w-full overflow-hidden rounded-xl border bg-white">
            <img
              src="https://placehold.co/400x400?text=Chart"
              alt="chart"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative hidden w-full flex-col space-y-1 overflow-hidden sm:flex">
            <div className="animate-vertical-scroll flex flex-col space-y-1">
              {items.concat(items).map(({ label, value }, i) => (
                <div
                  key={i}
                  className="h-[82px] rounded-xl border bg-white p-2 font-medium text-stone-900"
                >
                  <div className="flex w-full flex-col rounded-xl bg-stone-50 py-3 pl-2 sm:pl-5">
                    <span className="text-xs">{label}</span>
                    <span className="sm:text-base">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full flex h-72 flex-col space-y-6 overflow-hidden overflow-y-hidden rounded-xl border bg-stone-50 px-5 pt-5 shadow-sm lg:h-[32rem] lg:space-y-8 lg:px-8 lg:pt-8">
        <div className="space-y-2 lg:space-y-4">
          <h1 className="text-xl font-bold lg:text-3xl">Semantic search</h1>
          <p className="text-sm font-medium text-[#5B5A59] lg:w-[692px] lg:text-lg">
            With the simplicity of a Google search, find leading companies
            quickly by entering just a few keywords.
          </p>
        </div>
        <img
          src="https://placehold.co/1100x600/?text=Image"
          alt="Semantic search"
          className="rounded-xl border bg-gray-100 md:rounded-xl"
        />
      </div>
    </div>
  );
};

export default Section2;
