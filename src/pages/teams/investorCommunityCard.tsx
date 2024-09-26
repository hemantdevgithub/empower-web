import { ArrowRightIcon, GlobeIcon, PlusIcon } from "lucide-react";
import mainImage from "/image-2.png";
import investor1 from "/Ellipse 171.png";
import investor2 from "/Ellipse 172.png";
import investor3 from "/Ellipse 174.png";
import handshake from "/image-9.png";

const InvestorCommunityCard = () => {
  const investorTeam = [investor1, investor2, investor3];
  return (
    <div className="w-full items-center rounded-3xl bg-gray-900">
      <h2 className="mb-8 text-xl font-semibold text-white">Investors Entrepreneur Community</h2>
      <div className="flex w-full">
        {/* Main */}
        <div className="mb-4 mr-24 flex overflow-hidden rounded-2xl">
          <img src={mainImage} alt="Woman working at desk" className="h-auto object-cover" />
          <button className="flex items-center space-x-2 rounded-full bg-gray-800 bg-opacity-80 px-4 py-2 text-white">
            <span>Investors</span>
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>

        <div>
          <div className="rounded-2xl bg-gray-800 p-4">
            <p className="mb-2 text-lg font-semibold text-white">
              Around <span className="text-blue-400">1,000</span> of investors teams.
            </p>
            <div className="mb-4 flex">
              {investorTeam.map((i) => (
                <img
                  key={i}
                  src={i}
                  alt="Investor"
                  className="-ml-2 h-10 w-10 rounded-full border-2 border-gray-800 first:ml-0"
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700">
                <GlobeIcon className="h-6 w-6 text-gray-400" />
              </div>
              <button className="flex items-center space-x-1 text-blue-400">
                <span>Know more</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-2 flex items-start justify-around space-x-2">
            <div className="w-[40%] overflow-hidden rounded-2xl">
              <img src={handshake} alt="Handshake" className="h-full w-full object-cover" />
            </div>
            <div className="w-[60%]">
              <button className="flex items-center space-x-2 rounded-full bg-blue-600 px-4 py-2">
                <span className="text-white">Global Investors around</span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                  <PlusIcon className="h-4 w-4 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorCommunityCard;
