import { TechPoint } from "@/types/technology";

const ServiceSectionTwo = ({
  headingFirstWord,
  headingHighlight,
  headingWords,
  techPoints,
}: {
  headingFirstWord: string;
  headingHighlight: string;
  headingWords: string;
  techPoints: TechPoint[];
}) => {
  return (
    <>
      <section
        id="service-section-two"
        className="relative bg-[#1d1f20] text-[#fff]"
      >
        <div className="absolute inset-0 bg-[length:150%_150%] bg-[position:-20%_100%] bg-no-repeat sm:bg-[length:80%_100%]  sm:bg-[position:100%_100%] md:bg-[length:60%_100%] md:bg-right-bottom lg:bg-auto 2xl:bg-[length:50%_100%] bg-sky-problem"></div>
        <div className="container flex w-full flex-col gap-10 py-10 sm:gap-15 sm:py-20 md:flex-row md:gap-24 md:pb-32 md:pt-30 lg:gap-39">
          <div className="opacity-0 translate-x-0 translate-y-0 opacity-100">
            <header className="w-full md:max-w-[602px]">
              <h2 className="font-light text-6xl">
                <span>{headingFirstWord} </span>
                <span>
                  <span style={{ color: "#70C8FF" }}>{headingHighlight}</span>
                </span>
                <span> {headingWords} </span>
              </h2>
            </header>
          </div>
          <div className="opacity-0 md:mt-24 lg:mt-34 translate-x-0 translate-y-0 opacity-100">
            <ul className="flex flex-col gap-4 sm:gap-8 md:max-w-[560px] md:gap-15">
              {techPoints.map((item, index) => (
                <li key={index} className="flex gap-6 sm:gap-8">
                  <div className="flex flex-col gap-2 md:gap-3.5">
                    <div className="flex gap-1.5">
                      <div>
                        <p className="text-3xl">
                          <span>{item.digit}</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl">
                          <span>{item.notation}</span>
                        </p>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="83"
                      height="8"
                      fill="none"
                      className="w-14 fill-white md:w-max max-md:[&amp;>path]:-translate-x-7"
                      style={{ fill: "rgb(141, 212, 255)" }}
                    >
                      <path d="M82.354 4.354a.5.5 0 0 0 0-.708L79.172.464a.5.5 0 1 0-.707.708L81.293 4l-2.829 2.828a.5.5 0 1 0 .708.708zM0 4.5h82v-1H0z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 md:inline md:gap-3.5 md:[&amp;_*]:inline">
                    <div className="mr-2 text-gray-300">
                      <p className="font-light text-2xl">
                        <span>
                          <span style={{ color: "#D5D7D8" }}>{item.text}</span>
                        </span>
                      </p>
                    </div>
                    <div className="text-brand-greyscale-500 empty:hidden">
                      <p className="font-light paragraph-md">
                        <span>
                          <sup>{item.authorText}</sup>
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSectionTwo;
