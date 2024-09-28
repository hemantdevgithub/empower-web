import { Link } from "react-router-dom";
import BusinessDevelopmentCard from "../../components/teams/businessDevelopmentCard";
import InvestorCommunityCard from "../../components/teams/investorCommunityCard";
import SupplyChainCard from "../../components/teams/supplyChainCard";
import ConnectSourcesCard from "@/components/teams/connectSources";

const Teams = () => {
  return (
    <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2">
      <Link to="/investor/teams/investor-entrepreneur-community">
        <InvestorCommunityCard />
      </Link>
      {/* teams/investor-entrepreneur-community */}
      <Link to="#">
        <BusinessDevelopmentCard />
      </Link>
      <SupplyChainCard />
      <ConnectSourcesCard />
    </div>
  );
};

export default Teams;
