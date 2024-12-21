import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-20 md:py-22 lg:py-28 bg-contact-us-blob bg-no-repeat sm:bg-[length:1400px_1000px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-2/5 xl:w-2/5 flex justify-center items-center">
            <div
              className="mb-12 dark:bg-gray-dark"
              data-wow-delay=".15s"
            >
              <h1 className="my-12 text-6xl text-black dark:text-white font-light">
                Send us a message
              </h1>
              <p className="my-12 text-2xl font-light text-body-color">
                Tell us more about your project and get a response in 1 work day
              </p>
            </div>
          </div>
          <div className="w-full bg-white p-6 lg:w-6/12 xl:w-3/5">
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-lg font-medium text-dark dark:text-white"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="border-solid border-2 border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-lg font-medium text-dark dark:text-white"
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-lg font-medium text-dark dark:text-white"
                      >
                        Describe your project *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="What do you need to deliver? For when? Which professionals do you need?"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="source"
                        className="mb-3 block text-lg font-medium text-dark dark:text-white"
                      >
                        How did you hear about us? *
                      </label>
                      <input name='source'
                        type="text"
                        placeholder="Name the source i.e. Linkedin"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 flex justify-center items-center mb-8">
                  <p className="text-base font-light text-body-color">
                    Your personal data will be processed in order to handle your question, and their administrator will be The Software House sp. z o.o. with its registered office in Pakistan.
                  </p>
                  </div>
                  <div className="w-full px-4 flex justify-center items-center">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Send a Message
                    </button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
