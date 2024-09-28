import { Card } from "./card";
import square from "/InvestorEntrepreneurCommunity/square.png";

interface CardDataProps {
  id: string;
  title: string;
  teams: number;
  percentage: string;
  color: string;
}

const MyPortfolio = () => {
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
      {/* My Portfolio */}
      <div className="flex h-16 w-64 items-center justify-between rounded-2xl bg-[#121212] p-4 shadow-lg">
        <div>
          <h2 className="text-lg font-semibold">My Portfolio</h2>
          <p className="text-sm text-gray-400">Local</p>
        </div>
        <div className="rounded-full bg-background p-2">
          <img src={square} alt="Square Icon" className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-28 grid grid-cols-3 gap-3">
        {cardsData.map((cardData) => (
          <Card key={cardData?.id} cardData={cardData} />
        ))}
      </div>
    </div>
  );
};

export default MyPortfolio;
