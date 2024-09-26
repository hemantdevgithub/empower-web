import BusinessDevelopmentCard from "./businessDevelopmentCard";
import InvestorCommunityCard from "./investorCommunityCard";

const Teams = () => {
  return (
    <div className="grid gap-[60px] lg:grid-cols-2">
      <InvestorCommunityCard />
      <BusinessDevelopmentCard />
    </div>
  );
};

export default Teams;
