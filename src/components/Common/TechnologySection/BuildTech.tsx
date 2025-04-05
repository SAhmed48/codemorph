import Image from "next/image";
import { Development } from "@/types/development";

interface TeamSectionProps {
  team: Development[];
  imageUrl?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ team, imageUrl }) => {
  return (
    <section className="container mx-auto px-24 py-16 flex flex-col md:flex-row gap-16">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-1/2 flex justify-center">
        <Image
          src={imageUrl}
          alt="Team Collaboration"
          width={520}
          height={520}
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-16">
        {team.map((item, index) => (
          <div key={index} className="flex flex-col space-y-6">
            {/* Title with min height to prevent shifting */}
            <h2 className="text-4xl font-normal text-black leading-snug max-w-96">
              {item.title}
            </h2>

            {/* Description */}

            {item.description.map((subitem, index) =>
              subitem.length > 1 ? (
                <p className="text-black text-lg leading-relaxed font-normal max-w-xl">
                  {subitem}
                </p>
              ) : (
                <p className="text-black text-lg leading-relaxed font-normal max-w-xl">
                  {subitem[0]}
                </p>
              ),
            )}
            {/* Bullet Points */}
            <div className="mt-6 space-y-10 max-w-xl">
              {item.subDescription.map((subItem, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex items-center justify-center w-8 h-8 border-[1px] border-blue-900 rounded-full">
                    <span className="text-blue-500 text-lg">✔️</span>
                  </div>
                  <div className="flex-1 flex-col">
                    <p className="text-gray-800 text-lg font-normal">
                      {subItem}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
