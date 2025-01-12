import Image from "next/image";
import SoftwareServices from "@/components/Common/Services/softwareServices";
import { EndService } from "@/types/services";

const ServiceSectionFour = ({
  heading,
  description,
  endToEndServices,
  imagePath,
  customSectionCls = "bg-[#444849]",
  customTextCls = "text-[#7dd3fc]",
}: {
  heading: string;
  description: string;
  imagePath: string;
  customSectionCls?: string;
  customTextCls?: string;
  endToEndServices: EndService[];
}) => {
  return (
    <section id="service-section-four" className={`${customSectionCls}`}>
      <div className="container flex flex-col gap-10 py-10 sm:gap-14 md:flex-row md:py-24 lg:gap-20 lg:py-30 xl:gap-40">
        <div className="opacity-1 top-10 flex w-full flex-1 flex-col gap-10 self-start md:sticky md:gap-16">
          <header>
            <h2 className={`font-light text-6xl ${customTextCls}`}>
              <span>{heading}</span>
            </h2>
          </header>
          <div className="text-[#edf1f4] md:max-w-[570px]">
            <h3 className="font-light text-3xl">
              <span>
                <span style={{ color: "#EDF1F4" }}>{description}</span>
              </span>
            </h3>
          </div>
          <Image
            alt=""
            loading="lazy"
            width="450"
            height="450"
            decoding="async"
            data-nimg="1"
            className="h-auto w-full max-w-[450px] max-md:mx-auto"
            style={{ color: "transparent" }}
            src={imagePath}
          />
        </div>
        <SoftwareServices endToEndServices={endToEndServices} />
      </div>
      <div className="absolute inset-0 z-10 h-full w-full bg-no-repeat bg-hero-doors-roof bg-[length:1028px_400px] bg-top md:bg-auto rotate-180"></div>
      <div className="absolute inset-0 bottom-0 z-0 h-full w-full bg-[length:616px_345px] bg-center bg-no-repeat sm:bg-[length:880px_493px] lg:bg-[length:1232px_690px] xl:bg-[length:1760px_985px] bg-hero-sky-blob"></div>
    </section>
  );
};

export default ServiceSectionFour;
