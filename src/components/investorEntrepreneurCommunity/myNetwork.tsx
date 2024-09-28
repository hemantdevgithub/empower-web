import square from "/entrepreneurCommunity/square.png";
import arrowRightCircle from "/entrepreneurCommunity/arrowRightCircle.png";
import cardIcon from "/entrepreneurCommunity/cardIcon.png";
import arrow from "/entrepreneurCommunity/arrow.png";

interface CardDataProps {
  id: string;
  title: string;
  teams: number;
  percentage: string;
  color: string;
}

const MyNetwork = () => {
  const cardsData: CardDataProps[] = [
    {
      id: "1",
      title: "Investor Entrepreneur Community",
      teams: 3,
      percentage: "48.64%",
      color: "bg-blue-900",
    },
    {
      id: "2",
      title: "Investor Entrepreneur Community",
      teams: 6,
      percentage: "48.64%",
      color: "bg-blue-900",
    },
    {
      id: "3",
      title: "Investor Entrepreneur Community",
      teams: 3,
      percentage: "48.64%",
      color: "bg-blue-900",
    },
  ];

  return (
    <div>
      {/* My Network */}
      <div className="mt-11 flex h-16 w-64 items-center justify-between rounded-2xl bg-[#121212] p-4 shadow-lg">
        <div>
          <h2 className="text-lg font-semibold">My Network</h2>
          <p className="text-sm text-gray-400">Personal</p>
        </div>
        <div className="rounded-full bg-background p-2">
          <img src={square} alt="Square Icon" className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-28 grid grid-cols-4">
        {cardsData?.map((cardData) => (
          <div className="relative h-[196px] w-[195px] rounded-[30px] bg-gradient-to-r from-accent to-secondary-dark p-4 shadow-lg">
            <div className="absolute -top-6 right-0">
              <div className="relative h-[196px] w-[195px] rounded-[30px] bg-gradient-to-r from-accent to-secondary-dark p-4 shadow-lg">
                <div
                  className={`${cardData?.color} absolute -top-6 left-0 h-[196px] w-[195px] rounded-[30px] p-4 shadow-lg`}
                >
                  <div className="flex h-10 w-10 items-start justify-center rounded-full bg-background p-2">
                    <img src={cardIcon} alt="cardIcon" className="h-5 w-5" />
                  </div>
                  <p className="mb-1 mt-5 font-medium">{cardData?.title}</p>
                  <p className="mb-1 font-medium">Teams</p>
                  <div className="mt-5 flex items-end justify-between">
                    <h2 className="font-semibold">{cardData?.teams} Teams</h2>
                    <p className="flex items-center justify-items-end gap-x-1 text-sm font-medium text-green-400">
                      {cardData?.percentage}
                      <img src={arrow} alt="arrowIcon" className="h-4 w-4 rotate-180" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* VISA Card */}

        <div className="relative">
          <div className="absolute -top-8 rounded-[30px] bg-secondary-gradient p-4 text-white shadow-xl">
            <h2 className="mb-4 font-semibold">Total Funding</h2>
            <div className="mb-4">
              <p className="text-lg font-bold">$1,357,869</p>
              <p className="mt-1 text-sm text-white">Per Month</p>
            </div>
            <div className="mb-6 flex space-x-2">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-start justify-center rounded-full bg-background p-2">
                  <img src={arrowRightCircle} alt="Arrow Right Circle" className="h-4 w-4 rotate-45" />
                </div>
                <span className="text-sm font-semibold">$65,543</span>
              </div>
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-start justify-center rounded-full bg-background p-2">
                  <img src={arrowRightCircle} alt="Arrow Right Circle" className="h-4 w-4 -rotate-45" />
                </div>
                <span className="text-sm font-semibold">$65,543</span>
              </div>
            </div>
            <div className="flex justify-end">
              <span className="text-2xl font-bold italic">VISA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNetwork;
