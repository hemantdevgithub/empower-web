import BusinessDevelopmentEntrepreneurCommunityCard from "@/components/businessDevelopmentEntrepreneurCommunity/businessDevelopmentEntrepreneurCommunityCard";

interface CardDataProps {
  id: string;
  title: string;
  teams: number;
  percentage: string;
  color: string;
}

const BusinessDevelopmentEntrepreneurCommunity = () => {
  const cardsData: CardDataProps[] = [
    {
      id: "1",
      title: "Benjimen Scott",
      teams: 3,
      percentage: "48.64%",
      color: "bg-blue-900",
    },
    {
      id: "2",
      title: "Benjimen Scott",
      teams: 6,
      percentage: "48.64%",
      color: "bg-blue-900",
    },
    {
      id: "3",
      title: "Benjimen Scott",
      teams: 3,
      percentage: "48.64%",
      color: "bg-blue-900",
    },
  ];

  return (
    <div className="mt-28 grid grid-cols-3 gap-3">
      {cardsData.map((cardData) => (
        <BusinessDevelopmentEntrepreneurCommunityCard key={cardData?.id} cardData={cardData} />
      ))}
    </div>
  );
};

export default BusinessDevelopmentEntrepreneurCommunity;
