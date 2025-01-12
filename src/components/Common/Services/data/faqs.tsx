export const webFaqs = [
  {
    question:
      "What industries does your web development company specialize in?",
    answer: (
      <div className="my-8 text-white font-light">
        <p className="my-8 text-lg font-light">
          Companies from 8 industries requested our support in custom
          development, including FinTech, E-commerce, Healthcare, Media and
          Entertainment, EdTech, Travel and Hospitality, Retail, and Information
          Technology.
        </p>
      </div>
    ),
  },
  {
    question:
      "How does your web development team ensure seamless project delivery?",
    answer: (
      <div className="my-8 text-white font-light">
        <p className="my-8 text-lg font-light">
          By design, our web development process must match or exceed market
          standards, or won’t have work continuity. Many times, clients see that
          it’s true after the first sprint.
        </p>
        <p className="my-8 text-lg font-light">
          We use delivery practices that increase efficiency in each of our web
          development projects and aggregate data to measure and display
          development velocity.
        </p>
        <p className="my-8 text-lg font-light">
          Team members join projects only when they’re needed: design begins
          first, the backend comes next, and the frontend joins later.
        </p>
        <p className="my-8 text-lg font-light">
          Partners can track development metrics through Jira at any time,
          observing tasks entering production, which ones return, and how fast
          our team delivers web solutions.
        </p>
      </div>
    ),
  },
  {
    question:
      "What technologies do you use to deliver website development services?",
    answer: (
      <div className="my-8 text-white font-light">
        <p className="my-8 text-lg font-light">
          For frontend development, we work with React, TypeScript, Angular, or
          Vue.js. On the backend, we use Node.js, PHP, Python, and TypeScript.
        </p>
        <p className="my-8 text-lg font-light">
          For AWS cloud projects, we deploy using Docker and Kubernetes.
        </p>
      </div>
    ),
  },
];

export const mobileFaqs = [
  {
    question:
      "Why do your mobile software development services focus on React Native?",
    answer: (
      <div className="my-8 text-white font-light">
        <p className="my-8 text-lg font-light">
          Skilled mobile app developers can release mobile apps 70% faster when
          React Native is used.
        </p>
        <p className="my-8 text-lg font-light">
          You can quickly develop and deploy a product across multiple platforms
          thanks to a shared codebase.
        </p>
        <p className="my-8 text-lg font-light">
          {" "}
          You only need one team to develop and maintain an app for Android and
          iOS, which reduces the time and costs of mobile app development
          projects.
        </p>
      </div>
    ),
  },
  {
    question: "How does React Native support scalable mobile applications?",
    answer: (
      <div className="my-8 text-white font-light">
        <p className="my-8 text-lg font-light">
          React Native’s modular architecture makes updating and maintaining
          scalable mobile applications more accessible.
        </p>
        <p className="my-8 text-lg font-light">
          Its component-based structure ensures consistent mobile performance
          and flexibility.
        </p>
      </div>
    ),
  },
  {
    question: "How do you compare to a mobile app development company?",
    answer: (
      <div className="my-8 text-white font-light">
        <p className="my-8 text-lg font-light">
          While we specialize in web development, we’ve completed dozens of
          high-profile mobile app projects in the past 6 years.
        </p>
        <p className="my-8 text-lg font-light">
          We can support your product’s growth across the web and mobile, thanks
          to our mobile app developers’ technical expertise in both domains.
        </p>
      </div>
    ),
  },
  {
    question: "How does React Native compare to progressive web apps?",
    answer: (
      <div className="my-8 text-white font-light">
        <p className="my-8 text-lg font-light">
          React Native provides a more native-like experience and better
          performance on mobile devices thanks to its native components and
          APIs.
        </p>
        <p className="my-8 text-lg font-light">
          Progressive web apps offer cross-platform accessibility via browsers
          but may not match React Native’s performance or integration on mobile
          devices.
        </p>
      </div>
    ),
  },
  {
    question:
      "Why one mobile app in React Native could be preferable to two native apps?",
    answer: (
      <div className="my-8 text-white font-light">
        <p className="my-8 text-lg font-light">
          By using React Native, the mobile development team can work with one
          codebase for their Android and iOS cross-platform mobile apps,
          minimizing cross-platform development and maintenance time.
        </p>
      </div>
    ),
  },
];

export const cloudFaqs = [
  {
    question: "Which cloud platforms do you work with?",
    answer: (
      <div className="my-8 text-white font-light">
        <p className="my-8 text-lg font-light">
          AWS is our main cloud, which we use for around 30 commercial projects
          per year.
        </p>
        <p className="my-8 text-lg font-light">
          As an AWS Advanced Partner, we have around 20 cloud engineers who earned multiple certifications, which include:
        </p>
        <p className="my-8 text-lg font-light">
         {[
             "AWS Solutions Architect Professional",
             "AWS Cloud Practitioner",
             "AWS Developer Associate",
             "AWS Security Specialty",
             "AWS SysOps Administrator",
             "AWS DevOps Engineer Professional",
             "AWS Database Specialty",
             "AWS Machine Learning Specialty",
         ].map((item, index) => (
          <p key={`cloud-faq-service-${index}`} className="text-lg my-4">
            -> {item}
          </p>
        ))}
        </p>
          <p className="my-8 text-lg font-light">
          Our cloud experts can help you build cloud-native architecture and applications with AWS or create a hybrid cloud environment if IT still has to migrate data and workloads completely.
        </p>
      </div>
    ),
  },
  {
    question:
      "Can you build cloud-based solutions using artificial intelligence?",
    answer: (
      <div className="my-8 text-white font-light">
        <p className="my-8 text-lg font-light">
          Yes. One of our recent projects involved creating a cloud-native tool for automated article translation using AI.
        </p>
        <p className="my-8 text-lg font-light">
          A team of 1 Node.js developer and a Software Architect tested several language models to choose the best match for price and quality.
        </p>

          <p className="my-8 text-lg font-light">
          Then, they built a lambda-based workflow that saved the client 99% of the translation costs for each article processed.
          </p>

          <p className="my-8 text-lg font-light">
          Discover the full story from the experts who completed the project here.
          </p>

          <p className="my-8 text-lg font-light">
          If you’d like to learn how your company can adopt AI for products or DevOps, consider a two-week low-risk sprint led by our AI team.
          </p>
      </div>
    ),
  },
  {
    question: "I need to create a cloud strategy. Can you help?",
    answer: (
      <div className="my-8 text-white font-light">
        <p className="my-8 text-lg font-light">
          Of course. A strategy project would include a team interview, architecture, cloud computing, product audits, and a business consultation with the board.
        </p>
          <p className="my-8 text-lg font-light"> Depending on your needs and how much work was done, the final strategy can include:</p>
         <p className="my-8 text-lg font-light">
         {[
             "Recommended cloud technology and services to adopt",
             "Recommended DevOps practices that speed up delivery",
             "Cloud governance practices with roles and responsibilities",
             "Cloud data management policy",
             "Cloud optimization practices",
             "Rules for secure applications",
             "A defined observability process",
         ].map((item, index) => (
          <p key={`cloud-faq-service-${index}`} className="text-lg my-4">
            -> {item}
          </p>
        ))}
        </p>
        <p className="my-8 text-lg font-light">
          Beyond that, you can expect guidance for any stage of cloud maturity your company is at.
        </p>
        <p className="my-8 text-lg font-light">
              We led on-prem-to-cloud migration projects, introduced full observability where it wasn’t an active process, and built multi-website data lakes to enable sharper decision-making.
        </p>
      </div>
    ),
  },
];
