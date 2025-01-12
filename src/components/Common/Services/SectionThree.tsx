import Image from "next/image";
import {
  TechServiceOne,
  TechServiceThree,
  TechServiceTwo,
} from "@/types/technology";

const ServiceSectionThree = ({
  sectionOne,
  sectionTwo,
  sectionThree,
}: {
  sectionOne: TechServiceOne;
  sectionTwo: TechServiceTwo;
  sectionThree: TechServiceThree;
}) => {
  return (
    <>
      <section id="service-section-three" className="overflow-x-hidden">
        <div className="container relative flex flex-col items-center pb-10 pt-16 text-[#4e5455] md:pb-48">
          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <div className="flex md:justify-center">
              <Image
                className="mb-8 w-full sm:w-4/5 md:mb-0"
                src={`${sectionOne.imageUrl}`}
                alt="web development services"
                loading="lazy"
                width="602"
                height="550"
              />
            </div>
            <div className="flex flex-col justify-normal md:h-[350px] md:justify-between">
              <header className="lg:max-w-[557px] xl:max-w-[950px]">
                <h2 className="font-light text-6xl">
                  <span>
                    <span style={{ color: "#4E5455" }}>
                      {sectionOne.heading}
                    </span>
                  </span>
                </h2>
              </header>
              <div className="mt-5 lg:mt-0 lg:max-w-[680px]">
                <p className="font-light text-base">
                  <span>
                    <span style={{ color: "#313435" }}>
                      {sectionOne.description}
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1920 1306"
            className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 scale-x-125 max-sm:hidden text-sky-100"
          >
            <g filter="url(#now-soon-gradient-desktop_svg__a)">
              <path
                fill="currentColor"
                fillOpacity="0.5"
                d="M1764.19 503.297c-62.17 168.644-246.35 344.095-392.51 435.955C1159.93 1072.34 862.781 1139 586.857 1087.97c-148.386-27.41-288.354-89.014-382.59-178.948-234.65-223.927-94.84-600.176 302.63-640.499 100.983-10.238 208.1 8.63 293.894 51.796 78.558 39.524 142.348 99.323 233.189 118.337 214.33 44.982 289.27-134.065 426.02-205.274 52.65-27.381 122.13-41.732 184.53-25.958 71.52 18.062 118.73 71.976 133.6 126.47 14.56 53.142 7.71 110.857-13.94 169.403"
              ></path>
            </g>
            <defs>
              <filter
                id="now-soon-gradient-desktop_svg__a"
                width="2095.74"
                height="1304.25"
                x="-109.898"
                y="0.882"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_5981_13309"
                  stdDeviation="100"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 360 1311"
            className="absolute left-1/2 top-1/2 max-h-full w-full -translate-x-1/2 -translate-y-1/2 scale-125 sm:hidden text-sky-100"
          >
            <g filter="url(#now-soon-gradient-mobile_svg__a)">
              <path
                fill="currentColor"
                d="M129.587 139.331c105.402 38.862 215.056 153.973 272.466 245.325 83.178 132.345 124.832 318.066 92.938 490.518-17.138 92.741-55.641 180.216-111.851 239.116-139.958 146.65-375.112 59.27-400.307-189.154-6.397-63.115 5.397-130.063 32.377-183.683 24.704-49.099 62.08-88.966 73.964-145.742C117.292 461.755 5.39 414.913-39.114 329.445c-17.113-32.905-26.081-76.332-16.221-115.333 11.29-44.699 44.986-74.202 79.046-83.496 33.214-9.098 69.285-4.815 105.876 8.715"
              ></path>
            </g>
            <defs>
              <filter
                id="now-soon-gradient-mobile_svg__a"
                width="815.141"
                height="1309.84"
                x="-184.424"
                y="0.8"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_6612_875"
                  stdDeviation="62.5"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <div className="relative mt-14">
            <div className="relative z-10 grid bg-white sm:bg-white/50 md:grid-cols-2">
              <div className="border-b p-6 md:border-b-0 md:border-r md:px-10 md:py-14 lg:px-20">
                <div className="mb-4 md:mb-12">
                  <p className="text-3xl">
                    <span>
                      <span style={{ color: "#313435" }}>Now</span>
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-light text-xl">
                    <span>
                      <span style={{ color: "#313435" }}>
                        {sectionTwo.sectionNow.text}
                      </span>
                    </span>
                  </p>
                  <p className="font-light text-xl pt-8">
                    <span>
                      <span style={{ color: "#313435" }}>
                        {sectionTwo.sectionNow.text1}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="pt-6 md:py-14">
                <div className="text-base mb-2 ml-6 flex items-center md:mb-6 md:ml-8">
                  <svg
                    viewBox="0 0 30 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-4 h-9 w-4 lg:mr-8"
                  >
                    <path
                      d="M29.1429 57.2151L0 68V0L29.1429 10.5972V57.2151Z"
                      fill="#8DD4FF"
                    ></path>
                  </svg>
                  <div>
                    <h3 className="text-3xl">
                      <span>
                        <span style={{ color: "#313435" }}>Soon</span>
                      </span>
                    </h3>
                  </div>
                </div>
                <ul className="divide-y">
                  {sectionTwo.sectionSoon.map((item, index) => (
                    <li
                      key={`soon-${index}`}
                      className="flex gap-2 px-6 py-4 md:pl-8"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 17"
                        className="text-sky-400 h-4 shrink-0 translate-y-1 md:h-3 md:translate-y-2"
                      >
                        <path
                          fill="currentColor"
                          d="M8.352.494h3.424l8 8-8 8H8.352l7.296-6.848H0V7.342h15.648z"
                        ></path>
                      </svg>
                      <div className="md:max-w-[340px] lg:max-w-[420px] xl:max-w-[590px]">
                        <p className="font-light text-xl">
                          <span>
                            <span style={{ color: "#313435" }}>
                              {item.text}
                            </span>
                          </span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-36 md:grid-cols-3 md:gap-13 xl:gap-20">
            {sectionThree.sectionTop.map((item, index) => (
              <div key={`section-three-top-${index}`} className="mb-4 md:mb-14">
                <div className="flex items-center gap-6 border-b border-gray-300 pb-6">
                  <span className="shrink-0 text-sky-300">
                    <p className="font-bold text-6xl">0{index + 1}</p>
                  </span>
                  <div className="line-clamp-2 *:tracking-tight">
                    <h3 className="text-3xl">
                      <span>{item.title}</span>
                    </h3>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-light text-xl">
                    <span>
                      <span style={{ color: "#313435" }}>{item.text}</span>
                    </span>
                  </p>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-1 gap-8 md:col-span-2 md:grid-cols-2 md:gap-20 md:border-t md:border-gray-300 md:pt-16">
              <div>
                <h2 className="font-light text-6xl">
                  <span>
                    <span style={{ color: "#313435" }}>
                      {sectionThree.sectionBottom.title}
                    </span>
                  </span>
                </h2>
              </div>
              <div className="space-y-2">
                {sectionThree.sectionBottom.points.map((item, index) => (
                  <p
                    key={`section-three-bottom-${index}`}
                    className="font-light text-xl"
                  >
                    <span>
                      <span style={{ color: "#8DD4FF" }} className="mr-3">
                        →
                      </span>
                    </span>
                    <span>
                      <span style={{ color: "#313435" }}>{item}</span>
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 -200 1500 582"
            className="absolute bottom-0 right-0 w-full max-w-full translate-x-1/3 sm:w-4/6 sm:translate-x-1/4 text-sky-100"
          >
            <g filter="url(#metrics-gradient_svg__a)">
              <path
                fill="currentColor"
                d="M1108.63 263.132c-.25 107.42-66.67 243.107-128.99 324.109-90.278 117.354-241.311 214.401-404.436 240.928-87.721 14.278-177.708 7.621-248.114-24.152-175.311-79.106-174.143-318.984 37.774-421.293 53.842-25.989 116.978-36.817 173.232-29.691 51.51 6.524 98.95 27.424 153.104 19.938 127.796-17.594 133.009-133.429 194.298-200.916 23.603-25.963 59.169-47.96 96.919-51.574 43.263-4.152 80.323 16.754 99.603 44.463 18.83 27.01 26.74 60.883 26.61 98.188"
              ></path>
            </g>
            <defs>
              <filter
                id="metrics-gradient_svg__a"
                width="1308.24"
                height="1115.36"
                x="0.398"
                y="-80.046"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_6146_4654"
                  stdDeviation="100"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default ServiceSectionThree;
