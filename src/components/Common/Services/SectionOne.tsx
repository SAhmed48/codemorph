import Link from "next/link";

const ServiceSectionOne = ({
  title,
  heading,
  description,
  actionButton = false,
  actionPath = null,
}: {
  title: string;
  heading: string;
  description: string;
  actionButton?: boolean;
  actionPath?: string;
}) => {
  return (
    <>
      <section
        id="service-section-one"
        className="pointer-events-none relative bg-[#313435] text-[#fff]"
      >
        <div className="container grid grid-cols-1 gap-40 pb-10 pt-24 md:pb-24 md:pt-40 lg:grid-cols-2 lg:gap-0 lg:pb-64 lg:pt-96">
          <div className="flex max-w-[679px] flex-col gap-8">
            <div>
              <h1 className="text-base">
                <span>
                  <span
                    style={{
                      color: "#F7F9FA",
                    }}
                  >
                    {heading}
                  </span>
                </span>
              </h1>
            </div>
            <header>
              <h2 className="md:text-4xl lg:text-6xl">
                <span>
                  <span
                    style={{
                      color: "#FFFFFF",
                    }}
                  >
                    {title}
                  </span>
                </span>
              </h2>
            </header>
          </div>
          <div className="max-w-[550px]">
            <div className="relative z-20 lg:mt-14 lg:max-w-none">
              <p className="font-light text-2xl">
                <span>
                  <span>{description}</span>
                </span>
              </p>
            </div>
            {actionButton && (
              <Link
                tabIndex={0}
                className="group text-black inline-block outline-offset-0 transition-all duration-200 max-md:w-full xs:max-w-[320px] py-4 pl-12 pr-10 text-base font-medium swipe-effect bg-sky-300 text-gray-300 before:bg-sky-600 focus-within:outline-[3px] focus:outline focus:outline-[3px] focus:outline-brand-greyscale-900 pointer-events-auto relative z-20 mt-14"
                href={`${actionPath}`}
              >
                <div className="flex w-full justify-center text-black">
                  <span className="relative p-1 before:absolute before:-left-4 before:top-[1px] before:font-light before:transition-transform before:duration-200 before:content-['→']"></span>
                  <span className="relative z-10">Get in touch</span>
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="absolute inset-0 z-10 h-full w-full bg-no-repeat bg-hero-doors-roof bg-[length:1028px_400px] bg-top md:bg-auto rotate-180"></div>
        <div className="absolute inset-0 bottom-0 z-0 h-full w-full bg-[length:616px_345px] bg-center bg-no-repeat sm:bg-[length:880px_493px] lg:bg-[length:1232px_690px] xl:bg-[length:1760px_985px] bg-hero-sky-blob"></div>
      </section>
    </>
  );
};

export default ServiceSectionOne;
