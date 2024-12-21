import { Feature } from "@/types/feature";

const SingleTechnology = ({ technology }: { technology: Feature }) => {
  const { id, icon, title } = technology;
  
  return (
    <li key={`${id}-container`} className={`flex justify-center items-center flex-col py-2`}>
                <span className={`cursor-pointer hover:text-primary`}>{icon}</span>
                <span className="text-base font-light my-3">{title}</span>
              </li>
  );
};

export default SingleTechnology;
