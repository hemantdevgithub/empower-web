import BusinessDevelopmentCard from "./businessDevelopmentCard";
import InvestorCommunityCard from "./investorCommunityCard";
import SupplyChainCard from "./supplyChainCard";

const Teams = () => {
  return (
    <div className="grid gap-[60px] lg:grid-cols-2">
      <InvestorCommunityCard />
      <BusinessDevelopmentCard />
      <SupplyChainCard />
    </div>
  );
};

export default Teams;
