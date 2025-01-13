const Hero = () => {
  return (
    <>
      <section id="home-page" className="relative bg-[#313435]">
        <div className="container text-white grid grid-cols-1 gap-40 py-32 md:py-44 lg:grid-cols-1 lg:gap-0 lg:pt-64 lg:pb-44">
          <div className="-mx-2 w-full flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto text-left">
                <div className="mb-2">
                  <h1 className="paragraph-md text-white">
                    <span>
                      <span>A SOFTWARE DEVELOPMENT COMPANY</span>
                    </span>
                  </h1>
                </div>
                <header className="mb-4 text-balance *:max-w-80 sm:*:max-w-none md:max-w-none xl:mb-10">
                  <h2 className="heading-xl text-4xl lg:text-7xl text-white">
                    <span>
                      <span>Speed up your software</span>
                    </span>
                    <br></br>
                    <span>
                      <span>delivery process &amp; see key </span>
                    </span>
                    <br></br>
                    <span>
                      <span>metrics rise</span>
                    </span>
                  </h2>
                </header>
                <div className="max-w-[440px] lg:max-w-[730px] text-white">
                  <p className="mb-12 text-white !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                    <span>
                      <span>
                        We help product teams at scale-ups and SMBs release
                        better products faster &amp; cut development costs.
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-10 h-full w-full bg-bottom bg-no-repeat bg-hero-doors-sharp bg-[length:239px_393px] sm:bg-[length:350px_575px] lg:bg-[length:564px_667px]"></div>
          <div className="absolute inset-0 bottom-0 z-0 h-full w-full bg-[length:616px_345px] bg-center bg-no-repeat sm:bg-[length:880px_493px] lg:bg-[length:1232px_690px] xl:bg-[length:1760px_985px] bg-hero-lavender-blob"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
