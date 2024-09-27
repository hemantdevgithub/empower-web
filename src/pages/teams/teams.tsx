import BusinessDevelopmentCard from "../../components/ui/businessDevelopmentCard";
import InvestorCommunityCard from "../../components/ui/investorCommunityCard";
import SupplyChainCard from "../../components/ui/supplyChainCard";

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
