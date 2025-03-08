import Image from "next/image";

const TeamSection = () => {
  return (
    <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/team.jpeg" // Make sure to put your image in the public folder or use a URL
          alt="Team Collaboration"
          width={520} // Adjust based on your design
          height={500}
          className=""
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">
          How we build React.js <br /> development team for you
        </h2>

        <p className="text-black text-lg leading-relaxed p-4 rounded-lg w-9/12">
          You’re guaranteed to work with top developers only. First of all, we
          set high recruitment standards – only 5% of applicants are offered a
          job. Secondly – we take care of developers’ personal growth and
          motivation. Finally, our priority is to be effective and
          well-coordinated.
        </p>

        {/* Bullet Points */}
        <div className="mt-8 space-y-6">
          {[
            {
              title: "Lead developers",
              description:
                "Your team will get one. They are the most experienced developers who take care of the right software development strategy and help the team with following it.",
            },
            {
              title: "Interdisciplinary skills",
              description:
                "You can easily fill the gap between frontend and backend, and take advantage of our cloud experience.",
            },
            {
              title: "Delivery mindset",
              description:
                "We work on business-oriented goals, so you start generating value from technology fast.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Checkmark Icon */}
              <span className="text-blue-500 text-xl">✔️</span>
              <p className="text-gray-800 text-lg font-medium">
                <span className="font-bold">{item.title}</span> –{" "}
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
