const AboutSectionOne = () => {
  return (
    <section
      id="about-us-page-section-one"
      className="relative top-[90px] h-[700px] w-full flex-col justify-end overflow-hidden
        overflow-hidden bg-white dark:bg-gray-dark bg-hero-linear-gradient"
    >
      <video
        autoPlay
        muted
        loop
        id="about-us-page-section-one-video"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/images/video/about-us.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="text-4xl text-white absolute top-[40%] flex items-start flex-col w-3/5">
          <p className="pb-8 uppercase text-xs text-gray-300">
            <strong>About us</strong>
          </p>
          <h1 className="text-4xl font-bold text-white">
            {" "}
            We think you should feel supported by the people you work with
          </h1>
          <div className="text-xl text-white mt-8">
            {" "}
            How we treat each other makes us better as software creators. Our
            talent remains approachable and ready to lend a hand because it’s
            the right thing to do.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
