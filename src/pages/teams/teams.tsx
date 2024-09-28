import BusinessDevelopmentCard from "../../components/teams/businessDevelopmentCard";
import InvestorCommunityCard from "../../components/teams/investorCommunityCard";
import SupplyChainCard from "../../components/teams/supplyChainCard";
import ConnectSourcesCard from "@/components/teams/connectSources";

const Teams = () => {
  return (
    <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2">
      <InvestorCommunityCard />
      <BusinessDevelopmentCard />
      <SupplyChainCard />
      <ConnectSourcesCard />
    </div>
  );
};

export default Teams;
