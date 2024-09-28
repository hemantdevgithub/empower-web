import businessman from "/image-4.png";
import handshake from "/image-3.png";
import global from "/image-719.png";
import { ArrowRight } from "lucide-react";

const BusinessDevelopmentCard = () => {
  return (
    <div className="space-y-6 rounded-[20px] bg-accent p-9">
      <h2 className="text-lg font-[500px] text-white">Business Development Entrepreneur Community</h2>
      <div className="flex justify-center gap-1">
        {/* Main circular image */}
        <div className="rounded-[20px] bg-background p-2">
          <p className="text-lg text-white">Business.</p>
          <div className="relative flex items-center justify-center">
            <img src={businessman} alt="Businessman" className="aspect-square w-[125px]" />
            <div className="absolute right-4 top-1 rounded-full bg-white p-4">
              <img src={global} alt="global" className="h-2 w-2" />
            </div>
            <button className="absolute bottom-6 left-1 flex items-center gap-[1px] rounded-full bg-white p-1 text-[8px] text-black">
              Customers
            </button>
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
