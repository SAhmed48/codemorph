import Image from "next/image";
import { ContactBannerProps } from "@/types/common";
import Link from "next/link";
const ContactBanner = ({
  mainText,
  shortText,
  contactText,
  contactUrl,
}: ContactBannerProps) => {
  return (
    <section id="contact-banner-section" className="py-16">
      <div className="container w-full">
        <div
          className="opacity-100 relative z-10 w-full overflow-hidden bg-gray-morph p-6 sm:p-13 md:px-20 md:py-24 lg:grid lg:grid-cols-2 lg:py-32"
          style={{
            transform: "translate(0px, 0px)",
            opacity: 1,
            visibility: "inherit",
          }}
        >
          <Image
            src="/images/services/banner.webp"
            alt="code-morph-door-1"
            className="absolute z-0 opacity-40 scale-[59%] translate-x-96"
            width={472}
            height={1099}
            style={{ color: "transparent", top: "-4%", left: "22%" }}
          />
          <Image
            alt="code-morph-door-2"
            fetchPriority="high"
            width={472}
            height={1099}
            decoding="async"
            data-nimg="1"
            className="absolute z-0 opacity-30 scale-[59%] translate-x-96"
            src="/images/services/banner.webp" // Updated source
            style={{ color: "transparent", top: "4%", left: "10.5%" }}
          />
          <Image
            alt="code-morph-door-3"
            fetchPriority="high"
            width={472}
            height={1099}
            decoding="async"
            data-nimg="1"
            className="absolute z-0 opacity-15 scale-[65%] translate-x-96"
            src="/images/services/banner.webp" // Updated source
            style={{ color: "transparent", top: "17%", left: "3%" }}
          />
          <div className="mb-6 flex justify-center items-center bg-gradient-to-r bg-clip-text text-transparent lg:mr-20 xl:mb-0 [&_img]:w-full from-brand-sky-300 to-brand-sky-000">
            <h2 className="font-light text-4xl">
              <span className="text-cyan-300">{mainText}</span>
            </h2>
          </div>
          <div className="lg:max-w-[526px]">
            <div className="mb-6 text-[#edf1f4]">
              <h3 className="font-light text-2xl">
                <span>
                  <span style={{ color: "#EDF1F4" }}>{shortText}</span>
                </span>
              </h3>
            </div>
            <Link
              tabIndex={0}
              className="group inline-block outline-offset-0 transition-all duration-200 max-md:w-full xs:max-w-[320px] py-4 pl-12 pr-10 text-base font-medium swipe-effect bg-sky-300 before:bg-sky-500 focus-within:outline-[3px] focus:outline focus:outline-[3px] focus:outline-brand-greyscale-900 relative z-10 mt-8 xl:mt-12"
              href={contactUrl}
            >
              <div className="flex w-full justify-center">
                <span className="relative p-1 before:absolute before:-left-4 before:top-[1px] before:font-light before:transition-transform before:duration-200 before:content-['→']"></span>
                <span className="relative z-10">{contactText}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
