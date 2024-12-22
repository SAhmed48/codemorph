const AboutSectionTwo = () => {
  return (
    <section id="about" className="pt-20 md:pt-32 lg:pt-40 bg-white">
      <div className="container mx-auto">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-col justify-start items-start">
                <p className="text-xs uppercase text-indigo-600 tracking-wider pb-8">
                  <strong> Making a difference </strong>
                </p>
                <h2 className="text-4xl font-bold capitalize pb-12">
                  {" "}
                  Our story
                </h2>
              </div>
              <div className="leading-7 text-base">
                <p>
                  <strong>
                    The company’s founders used to work as frontline software
                    developers.
                  </strong>
                </p>
                <p className="mt-8">
                  They started the Software House in 2021, knowing that
                  flexibility and collaboration make Agile great, but only when
                  employees are cared for.
                </p>
                <p className="mt-8">
                  That assumption allowed the company to deliver custom
                  development projects for 24 countries, growing to a number of
                  employees.
                </p>
                <h3 className="mt-8 font-bold text-base">Who do we help?</h3>
                <p className="mt-4">
                  Companies that rely on technology for business growth. Our
                  clients see us as a long-term strategic partner and trusted
                  adviser for product design, development, DevOps, and cloud
                  computing work.
                </p>
                <h3 className="mt-8 font-bold text-base">Our philosophy</h3>
                <p className="mt-4">
                  Do good and the good will come to you. Each software project
                  we select we treat as our own because our client’s success
                  fuels ours.
                </p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 flex justify-end">
              <figure>
                <img
                  srcSet="https://tsh.io/wp-content/uploads/2021/10/story-image.png 2x, https://tsh.io/wp-content/uploads/fly-images/22338/story-image-520x651.png 1x"
                  src="https://tsh.io/wp-content/uploads/2021/10/story-image.png"
                  width="520"
                  height="651.5"
                  alt=""
                  loading="lazy"
                  className="image rounded-2xl"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
