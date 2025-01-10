import { Metric } from "@/types/metric";

const MetricsSection = ({
  metricTitle,
  metrics,
}: {
  metricTitle: string;
  metrics: Metric[];
}) => {
  return (
    <section
      id="metrics-section"
      className="w-full bg-metrics-desktop-blob bg-cover bg-center bg-no-repeat text-brand-greyscale-800 md:bg-metrics-desktop-blob"
    >
      <div className="container py-10 md:py-24 lg:py-34">
        <header>
          <h2 className="font-light text-6xl">{metricTitle}</h2>
        </header>
        <div className="opacity-0 mt-8 flex w-full flex-col md:mt-20 lg:flex-row lg:mt-34 translate-x-0 translate-y-0 opacity-100">
          {metrics.map((item, index) => (
            <div
              key={"metric" + index}
              className="h-60 border border-[#d5d7d8] bg-[#ffffff80] h-auto w-full lg:pt-44 p-6"
            >
              <div className="relative">
                <p
                  className={`ml-9 door-icon ${item.customDoorCls} heading-2xl `}
                >
                  <span>
                    <span style={{ color: "#444849" }}>{item.successPerc}</span>
                  </span>
                </p>
              </div>
              <div className="mt-2 line-clamp-2 lg:mt-0 xs:max-md:[&amp;_br]:hidden">
                <p className="font-light text-2xl leading-8">
                  <span>
                    <span style={{ color: "#444849" }}>{item.text}</span>
                  </span>
                  <b>
                    <span>
                      <span style={{ color: "#444849" }}> {item.bText}</span>
                    </span>
                  </b>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
