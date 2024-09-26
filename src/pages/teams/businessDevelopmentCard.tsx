import businessman from "/image-4.png";
import handshake from "/image-3.png";
import { ArrowRight } from "lucide-react";

const BusinessDevelopmentCard = () => {
  return (
    <div className="aspect-[100/63] space-y-6 rounded-[20px] bg-accent p-9">
      <h2 className="text-lg font-[500px] text-white">Business Development Entrepreneur Community</h2>
      <div className="flex justify-center gap-1">
        {/* Main circular image */}
        <div className="rounded-[20px] bg-background p-2">
          <p className="text-lg text-white">Business.</p>
          <div className="flex items-center justify-center">
            <img src={businessman} alt="Businessman" className="aspect-square w-[140px]" />
          </div>
          <h4 className="mt-2 text-center font-[500px] text-white">
            <span className="rounded-full bg-secondary-gradient px-2 py-1">Business</span> <span> Development</span>{" "}
            <br /> Entrepreneurs.
          </h4>
        </div>
        <div className="flex flex-col justify-between">
          <img src={handshake} alt="Handshake" className="-mt-4 h-[100px] rounded-[20px]" />
          <div>
            <button className="flex items-center text-white underline">
              Know more <ArrowRight className="-rotate-45" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDevelopmentCard;
