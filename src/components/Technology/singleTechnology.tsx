import { Feature } from "@/types/feature";

const SingleTechnology = ({ technology }: { technology: Feature }) => {
  const { id, icon, title } = technology;
  
  return (
    <div key={`${id}-container`} className={`flex justify-center items-center flex-col py-5`}> 
                <li className={`cursor-pointer hover:text-primary`}>{icon}</li>
                <p className="text-xl font-semibold">{title}</p>
              </div>
  );
};

export default SingleTechnology;
