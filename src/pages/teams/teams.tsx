import BusinessDevelopmentCard from "../../components/teams/businessDevelopmentCard";
import InvestorCommunityCard from "../../components/teams/investorCommunityCard";
import SupplyChainCard from "../../components/teams/supplyChainCard";

const Teams = () => {
  return (
    <div className="grid gap-x-10 gap-y-20 lg:grid-cols-2">
      <InvestorCommunityCard />
      <BusinessDevelopmentCard />
      <SupplyChainCard />
      <SupplyChainCard />
    </div>
  );
};

export default Teams;
