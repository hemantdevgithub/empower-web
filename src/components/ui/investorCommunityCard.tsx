import { ArrowRightIcon, PlusIcon } from "lucide-react";
import mainImage from "/image-2.png";
import investor1 from "/Ellipse 171.png";
import investor2 from "/Ellipse 172.png";
import investor3 from "/Ellipse 174.png";
import handshake from "/image-9.png";
import GlobeIcon from "/Group 12023.png";

const InvestorCommunityCard = () => {
  const investorTeam = [investor1, investor2, investor3];
  return (
    <div className="aspect-[100/63] space-y-4 rounded-[20px] bg-accent p-9">
      <h3 className="text-lg font-[500px] text-white">Investors Entrepreneur Community</h3>
      <div className="flex items-center gap-3">
        <div className="w-[40%]">
          <div className="relative aspect-square w-full">
            <img src={mainImage} alt="" className="h-full w-full rounded-[20px]" />
            <button className="absolute bottom-[21px] right-[11px] flex items-center gap-2 rounded-full bg-background px-3 py-1 text-xs text-white">
              Investors
              <ArrowRightIcon className="h-2 w-2" />
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="w-[80%] rounded-[20px] bg-background p-4">
            <p className="mb-2 font-[500px] leading-3 text-white">
              Around <span className="text-secondary">1,000</span> of investors teams.
            </p>
            <div className="mb-4 flex">
              {investorTeam.map((i) => (
                <img
                  key={i}
                  src={i}
                  alt="Investor"
                  className="-ml-2 h-5 w-5 rounded-full border-2 border-background first:ml-0"
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center rounded-full bg-gray-700">
                <img src={GlobeIcon} alt="GlobeIcon" className="h-2 w-2 text-gray-400" />
              </div>
              <button className="flex items-center gap-2 rounded-full bg-background px-3 py-1 text-xs text-white">
                <span>Know more</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-2 flex gap-1">
            <img src={handshake} alt="Handshake" className="h-[106px] rounded-[20px]" />
            <div>
              <button className="flex gap-2 rounded-full bg-secondary-gradient px-3 py-2 text-left text-xs text-white">
                <span className="text-white">Global Investors around</span>
                <PlusIcon className="h-4 w-4 rounded-full bg-background p-1 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorCommunityCard;
