import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-12 md:py-12 lg:py-12">
        <div className="container">
          <SectionTitle
            title="Our Software Development Services"
            paragraph="At TechOniq, we aim to revolutionize businesses by helping them achieve splendid digital transformation.
            Take a look at our professional services that can augment your company’s output profoundly."
            center
            width="1000px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
