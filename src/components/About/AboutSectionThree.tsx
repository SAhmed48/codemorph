import Image from "next/image";

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xs uppercase text-indigo-600 tracking-wider pb-8">
            <strong> The values we share </strong>
          </p>
          <h2 className="text-4xl font-bold capitalize pb-12">
            What we believe in
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 mb-4">
            <div className="max-w-[650px]">
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <strong className="text-indigo-600 font-normal">01</strong>{" "}
                  People
                </h3>
                <p className="text-base font-normal leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  They’re the greatest asset that The Software House is built
                  on. We work with them and for them, making sure they feel
                  fulfilled, appreciated, and satisfied.
                </p>
              </div>
            </div>
            <div
              className="relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/people.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/people.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 mb-4">
            <div className="max-w-[650px]">
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <strong className="text-indigo-600 font-normal">02</strong>{" "}
                  Growth
                </h3>
                <p className="text-base font-normal leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We aim high, always learning, to understand every novelty from
                  the world of technology. We support our employees’ learning
                  and practicing so that they can deliver top-class solutions in
                  ambitious projects.
                </p>
              </div>
            </div>
            <div
              className="relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/growth.jpg"
                alt="about growth"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/growth.jpg"
                alt="about growth"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 mb-4">
            <div className="max-w-[650px]">
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <strong className="text-indigo-600 font-normal">03</strong>{" "}
                  Responsibility
                </h3>
                <p className="text-base font-normal leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  To ensure of our clients’ success, we bring in knowledge,
                  technology skills, and high engagement to each project. Our
                  communication remains open for all partners regardless of
                  their continent, culture, or time zone.
                </p>
              </div>
            </div>

            <div
              className="relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/responsibility.jpg"
                alt="about responsibility"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/responsibility.jpg"
                alt="about responsibility"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 mb-4">
            <div className="max-w-[650px]">
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <strong className="text-indigo-600 font-normal">04</strong>{" "}
                  Fulfilment
                </h3>
                <p className="text-base font-normal leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Being fulfilled by our work keeps us energized. We create
                  first-class software that’s fast, efficient, and ready to
                  scale because we want us and our clients to be proud of our
                  work.
                </p>
              </div>
            </div>
            <div
              className="relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/fulfilment.jpg"
                alt="about fulfilment"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/fulfilment.jpg"
                alt="about fulfilment"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
